import arrayToGenerator from '../common/ArrayToGenerator'
import Token from '../lexer/Token'
import TokenType from '../lexer/TokenType'
import PeekIterator from '../common/PeekIterator'

describe('Token', () => {
  function assertToken(token: Token, value: string, type: TokenType) {
    assert.equal(token.type, type)
    assert.equal(token.value, value)
  }

  it('varOrKeyword', () => {
    let it1 = new PeekIterator(arrayToGenerator([...'if abc']))
    let it2 = new PeekIterator(arrayToGenerator([...'true abc']))

    let token1 = Token.makeVarOrKeyword(it1)
    let token2 = Token.makeVarOrKeyword(it2)
    it1.next()
    let token3 = Token.makeVarOrKeyword(it1)
    assertToken(token1, 'if', TokenType.KEYWORD)
    assertToken(token2, 'true', TokenType.BOOLEAN)
    assertToken(token3, 'abc', TokenType.VARIABLE)
  })
})
