export class Triangle {
  constructor(...sides) {
    this.side1 = sides[0]
    this.side2 = sides[1]
    this.side3 = sides[2]
  }

  isTriangle() {
    const condition1 = this.side1 > 0 && this.side2 > 0 && this.side3 > 0

    const sum12 = this.side1 + this.side2
    const sum23 = this.side2 + this.side3
    const sum31 = this.side3 + this.side1
    const condition2 = sum12 >= this.side3 && sum23 >= this.side1 && sum31 >= this.side2

    return condition1 && condition2
  }

  get isEquilateral() {
    if (!this.isTriangle()) return false

    return this.side1 === this.side2 && this.side2 === this.side3
  }

  get isIsosceles() {
    if (!this.isTriangle()) return false

    return this.side1 === this.side2 || this.side2 === this.side3 || this.side1 === this.side3
  }

  get isScalene() {
    if (!this.isTriangle()) return false

    return this.side1 !== this.side2 && this.side2 !== this.side3 && this.side1 !== this.side3
  }
}