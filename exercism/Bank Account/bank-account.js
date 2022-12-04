export class BankAccount {
  constructor() {
    this.isOpen = false
    this._balance = 0
  }

  open() {
    if (!this.isOpen) this.isOpen = true
    else throw new ValueError()
  }

  close() {
    if (this.isOpen) {
      this.isOpen = false
      this._balance = 0
    }
    else throw new ValueError()
  }

  deposit(amount) {
    if (this.isOpen & amount > 0) this._balance += amount
    else throw new ValueError()
  }

  withdraw(amount) {
    if (this.isOpen & amount <= this._balance && amount > 0)
      this._balance -= amount
    else throw new ValueError()
  }

  get balance() {
    if (this.isOpen) return this._balance
    else throw new ValueError()
  }

  set balance(amount) {
    throw new ValueError()
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}