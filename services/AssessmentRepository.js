import { Assessment } from "../models/Assessment.js";

const DEFAULT_QUESTION_BANK_INDEX_URL = "./question-banks/index.json";

export class AssessmentRepository {
  constructor() {
    this.assessmentCache = new Map();
    this.assessmentIndex = null;
    this.persistence = {
      default_bank: (assessmentId) => this._fetchFromDefaultBank(assessmentId),
      database: (assessmentId) => this._fetchFromDatabase(assessmentId),
    };
  }

  async fetchAssessment(assessmentId, source = "default_bank") {
    const cacheKey = `${source}:${assessmentId}`;

    if (this.assessmentCache.has(cacheKey)) {
      return this.assessmentCache.get(cacheKey);
    }

    const persistence = this.persistence[source];

    if (!persistence) {
      throw new Error(`Unknown question source: ${source}`);
    }

    const assessmentData = await persistence(assessmentId);

    if (!assessmentData) {
      throw new Error(`Assessment not found: ${assessmentId}`);
    }

    const assessment = new Assessment(assessmentData);
    this.assessmentCache.set(cacheKey, assessment);

    return assessment;
  }

  async fetchAssessmentIndex() {
    if (this.assessmentIndex) {
      return this.assessmentIndex;
    }

    const response = await fetch(DEFAULT_QUESTION_BANK_INDEX_URL);

    if (!response.ok) {
      throw new Error(`Failed to fetch assessment index: ${response.status}`);
    }

    this.assessmentIndex = await response.json();
    return this.assessmentIndex;
  }

  async _fetchFromDefaultBank(assessmentId) {
    if (!assessmentId) {
      throw new Error("assessmentId is required");
    }

    const assessmentIndex = await this.fetchAssessmentIndex();
    const assessmentMeta = assessmentIndex.find(
      (assessment) => assessment.id === assessmentId,
    );

    if (!assessmentMeta) {
      throw new Error(`Assessment not found: ${assessmentId}`);
    }

    const response = await fetch(assessmentMeta.url);

    if (!response.ok) {
      throw new Error(
        `Failed to fetch assessment ${assessmentId}: ${response.status}`,
      );
    }

    return response.json();
  }

  async _fetchFromDatabase(assessmentId = null) {
    // to be implemented; shape must be aligned with Assessment dataclass
  }
}
