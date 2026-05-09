import { AssessmentRepository } from "./services/AssessmentRepository.js";

class PainManagementApp {
  constructor({ assessmentId = null } = {}) {
    this.assessmentId = assessmentId;
    this.assessment = null;
    this.assessmentRepo = new AssessmentRepository();
  }

  async init() {
    if (!this.assessmentId) {
      return;
    }

    this.assessment = await this.fetchAssessment(this.assessmentId);
    console.log(this.assessment);
  }

  addListeners() {
    SquidlyAPI.firebaseOnValue("assessmentId", (value) => {
      this.assessmentId = value;
    });
  }

  async fetchAssessment(assessmentId, source = "default_bank") {
    return this.assessmentRepo.fetchAssessment(assessmentId, source);
  }
}
const app = new PainManagementApp();
app.init();
