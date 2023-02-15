const TokenType = require('./TokenType')

class Token {
  constructor(type, value) {
    this._type = type
    this.value = value
  }

  getType() {
    return this._type
  }

  isVariable() {
    return this._type == TokenType.VARIABLE
  }

  isScalar() {
    return (
      this._type == TokenType.INTEGER ||
      this._type == TokenType.FLOAT ||
      this._type == TokenType.BOOLEAN
    )
  }

  toString() {
    return `type ${this._type.type}, value ${this._type}`
  }
}

module.exports = Token
