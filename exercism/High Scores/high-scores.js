export class HighScores {
  constructor(input) {
    this.input = input
    this.sortedInput = this.sortedScores(this.input)
  }

  get scores() {
    return this.input
  }

  get latest() {
    return this.scores[this.scores.length - 1]
  }

  get personalBest() {
    return this.sortedInput[0]
  }

  get personalTopThree() {
    return this.sortedInput.slice(0, 3)
  }

  sortedScores(input) {
    const inputCopy = [...input]
    return inputCopy.sort((a, b) => b - a)
  }
}