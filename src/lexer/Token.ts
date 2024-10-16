import PeekIterator from '../common/PeekIterator'
import AlphabetHelper from './AlphabetHelper'
import TokenType from './TokenType'

const KeyWords = new Set([
  'var',
  'if',
  'else',
  'for',
  'while',
  'break',
  'func',
  'return',
])

class Token {
  constructor(private _type: TokenType, private _value: string) {}

  get type() {
    return this._type
  }

  get value() {
    return this._value
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

  static makeVarOrKeyword(it: PeekIterator) {
    let s = ''
    while (it.hasNext()) {
      const c = it.peek()

      if (AlphabetHelper.isLetter(c)) {
        s += c
      } else {
        break
      }
      it.next()
    }

    if (KeyWords.has(s)) {
      return new Token(TokenType.KEYWORD, s)
    }

    if (s == 'true' || s == 'false') {
      return new Token(TokenType.BOOLEAN, s)
    }

    return new Token(TokenType.VARIABLE, s)
  }
}

export default Token
