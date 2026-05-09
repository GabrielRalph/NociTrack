import { Question } from "./Question.js";

export class Assessment {
  constructor({
    id = null,
    title = "",
    description = "",
    version = "",
    questions = [],
    questionIndex = 0,
  } = {}) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.version = version;

    this.questions = questions.map((q) =>
      q instanceof Question ? q : new Question(q),
    );

    this.questionIndex = questionIndex;
  }

  currentQuestion() {
    return this.questions[this.questionIndex] ?? null;
  }

  moveQuestion(step) {
    this.questionIndex = Math.max(
      0,
      Math.min(this.questions.length - 1, this.questionIndex + step),
    );
  }

  isComplete() {
    return (
      this.questionIndex === this.questions.length - 1 &&
      this.questions.every((q) => q.isAnswered())
    );
  }
}
