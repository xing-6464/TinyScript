/**
 * 异常处理
 */
class LexicalException extends Error {
  constructor(msg: string) {
    super(msg)
  }

  static fromChar(c: string) {
    return new LexicalException(`Unexpected char ${c}`)
  }
}

export default LexicalException
