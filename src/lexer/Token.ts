import TokenType from './TokenType'

class Token {
  constructor(private _type: TokenType, private value: string) {}

  get type() {
    return this._type
  }

  isVariable() {
    return this._type == TokenType.VARIABLE
  }

  isScalar() {
    return (
      this._type == TokenType.INTEGER ||
      this._type == TokenType.FLOAT ||
      this._type == TokenType.STRING ||
      this._type == TokenType.BOOLEAN
    )
  }

  toString() {
    return `type：${this._type}，value：${this.value}`
  }
}
