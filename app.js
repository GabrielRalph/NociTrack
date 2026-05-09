import { AssessmentRepository } from "./services/AssessmentRepository.js";

const DEFAULT_SOURCE = "default_bank";

class PainManagementApp {
  /** Create the app coordinator for one assessment source. */
  constructor({ assessmentId = "fear-of-pain", source = null } = {}) {
    this.assessmentId = assessmentId;
    this.assessment = null;
    this.source = source;
    this.assessmentRepo = new AssessmentRepository();
    this.state = "menu";
  }

  /** Register remote listeners and load the initial assessment when available. */
  async init() {
    // this.addListeners();

    if (!this.assessmentId) {
      return;
    }

    this.assessment = await this.assessmentRepo.fetchAssessment(
      this.assessmentId,
      this.source,
    );
    console.log(this.assessment);
  }

  /** Keep local app state in sync with Squidly/Firebase values. */
  addListeners() {
    SquidlyAPI.firebaseOnValue("assessmentId", (value) => {
      if (value) this.assessmentId = value;
    });

    SquidlyAPI.firebaseOnValue("state", (value) => {
      if (value) this.state = value;
    });

    SquidlyAPI.firebaseOnValue("assessmentAnswers", (value) => {
      if (value) {
        const payload = JSON.parse(value);
        console.log(payload);
      }
    });
  }

  /** Save an answer for the current question and publish the updated payload. */
  answerCurrentQuestion(value) {
    if (!this.assessment) {
      return;
    }

    this.assessment.answerCurrentQuestion(value);
    this.syncAnswersToFirebase();
  }

  /** Persist the assessment answer payload to Firebase. */
  syncAnswersToFirebase() {
    if (!this.assessment) {
      return;
    }

    SquidlyAPI.firebaseSetValue(
      "assessmentAnswers",
      JSON.stringify(this.assessment.toAnswerPayload()),
    );
  }
}

const app = new PainManagementApp({ source: DEFAULT_SOURCE });
app.init();
