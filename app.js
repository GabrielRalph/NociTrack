import { Answer, Assessment } from "./models/models.js";
import { AssessmentRepository } from "./services/AssessmentRepository.js";
import { MenuView, MessageView, QuestionView, ResultsView } from "./ui/views.js";

const DEFAULT_SOURCE = "default_bank";
const STATE_MENU = "menu";
const STATE_ASSESSMENT = "assessment";
const STATE_RESULT = "result";

const STATE_VIEWS = {
    menu: MenuView,
    assessment: QuestionView,
    result: ResultsView,
    default: MessageView,
}
function parseJSON(json) {
  try {
      return JSON.parse(json);
  } catch (e) {
      return null;
  }
}

class PainManagementApp {
  #assessment = null;
  #answerPayload = null;
  #answerPayloadJSON = null;
  #lastQuestionIndex = null;
  state = STATE_MENU;
  assessmentId = null;
  assessmentIndex = [];
  renderQueued = false;

  constructor({ source = DEFAULT_SOURCE } = {}) {
    this.source = source;
    this.assessmentRepo = new AssessmentRepository();
    this.root = document.createElement("div");
    this.root.className = "app-root";
    document.body.appendChild(this.root);
    this.init();
  }

  async init() {
    SquidlyAPI.firebaseOnValue("state", async (value) => {
      // If no state is set, default to menu. 
      // This can happen on a fresh session or 
      // if the Firebase value is deleted.
      if (!value) {
        SquidlyAPI.firebaseSet("state", STATE_MENU);
        value = STATE_MENU;
      }
      this.state = value;
      this.requestRender();
    });

    SquidlyAPI.firebaseOnValue("assessmentId", async (value) => {
      this.assessmentId = value;
      if (value) {
        this.assessment = await this.assessmentRepo.fetchAssessment(value, this.source);
      }
    });

    SquidlyAPI.firebaseOnValue("assessmentAnswers", (value) => {
      this.answersPayload = value;
    });


    this.assessmentIndex = await this.assessmentRepo.fetchAssessmentIndex(this.source);
    this.requestRender();
  }


  set questionIndex(value) {
    this.#lastQuestionIndex = value;
    if (this.assessment) {
      this.assessment.questionIndex = value;
      this.requestRender();
    }
  }


  set answersPayload(value) {
    let string = typeof value === "string" ? value : (value ? JSON.stringify(value) : "");
    let object = typeof value === "object" ? value : parseJSON(value);

    this.#answerPayload = object;
    if (this.assessment && object && object.assessmentId === this.assessment.id) {
      this.assessment.answers = Assessment.answers_parser(object.answers)
      this.assessment.questionIndex = object.questionIndex || 0;
    }

    if (string !== this.#answerPayloadJSON) {
        this.requestRender();
    }

    this.#answerPayloadJSON = string;
  }
  get answersPayload() {
    return this.#answerPayload;
  }
  get answersPayloadJSON() {
    return this.#answerPayloadJSON;
  }
  set assessment(value) {
    let changed = value !== this.#assessment;
    this.#assessment = value;
    if (this.#assessment && this.answersPayload && this.answersPayload.assessmentId === this.#assessment.id) {
      this.assessment.answers = Assessment.answers_parser(this.answersPayload.answers)
      this.assessment.questionIndex = this.answersPayload.questionIndex || 0;
    }
 
    if (changed) {
      this.requestRender();
    }
  }
  get assessment() {
    return this.#assessment;
  }
  

  // Deferred so multiple rapid state changes only produce one DOM update
  requestRender() {
    if (this.renderQueued) return;
    this.renderQueued = true;
    window.setTimeout(() => {
      this.renderQueued = false;
      this.root.replaceChildren(this.currentScreen);
    }, 0);
  }

  get currentScreen() {
    const {state, assessmentIndex, assessment, answersPayload} = this;
    const viewData = {
      message: "Uknown app state.",
      assessmentIndex,
      answersPayload,
      assessment,
      onSelectAssessment: (e, id) => {
        this.assessmentId = id;
        this.assessment = null;
        this.answersPayload = null;
        SquidlyAPI.firebaseSet("assessmentId", id);
        SquidlyAPI.firebaseSet("assessmentAnswers", "");
        SquidlyAPI.firebaseSet("state", STATE_ASSESSMENT);
      },
      onAnswer: (e, value) => {
        if (!this.assessment) return;
        this.assessment.answerCurrentQuestion(value);
        this.answersPayload = this.assessment.toAnswerPayload();
        SquidlyAPI.firebaseSet("assessmentAnswers", this.answersPayloadJSON);
      },
      onGoHome: (e) => {
        this.state = STATE_MENU;
        this.assessmentId = null;
        this.assessment = null;
        this.answersPayload = null;
        SquidlyAPI.firebaseSet("assessmentId", "");
        SquidlyAPI.firebaseSet("assessmentAnswers", "");
        SquidlyAPI.firebaseSet("state", STATE_MENU);
        this.requestRender();
      },
      onMoveQuestion: (e, step)  => {
        if (this.state !== STATE_ASSESSMENT || !this.assessment) return;
        this.assessment.moveQuestion(step);
        this.answersPayload = this.assessment.toAnswerPayload();
        SquidlyAPI.firebaseSet("assessmentAnswers", this.answersPayloadJSON);
        this.requestRender();
      },
      onShowResult: (e) => {
        this.state = STATE_RESULT;
        SquidlyAPI.firebaseSet("state", STATE_RESULT);
        this.requestRender();
      },
    }
    return new (STATE_VIEWS[state] || STATE_VIEWS.default)(viewData);
  }
 
}

const app = new PainManagementApp();

