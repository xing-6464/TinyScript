import TokenType from './TokenType'

class Token {
  constructor(type, value) {
    this._type = type
    this._value = value
  }

  get type() {
    return this._type
  }

  isVariable() {
    return this._type === TokenType.VARIABLE
  }

  isScalar() {
    return (
      this._type === TokenType.INTEGER ||
      this._type === TokenType.FLOAT ||
      this._type === TokenType.STRING ||
      this._type === TokenType.BOOLEAN
    )
  }

  toString() {
    return `type: ${this._type}, value: ${this._value}`
  }
}

export default Token
