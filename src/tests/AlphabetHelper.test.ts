import AlphabetHelper from '../lexer/AlphabetHelper'

describe('AlphabetHelper', () => {
  it('charCheck', () => {
    assert.equal(true, AlphabetHelper.isLetter('a'))
    assert.equal(true, AlphabetHelper.isLetter('b'))
    assert.equal(true, AlphabetHelper.isLetter('A'))
    assert.equal(false, AlphabetHelper.isLetter('1'))
    assert.equal(true, AlphabetHelper.isOperator('*'))
    assert.equal(true, AlphabetHelper.isOperator('+'))
    assert.equal(true, AlphabetHelper.isOperator('<'))
    assert.equal(true, AlphabetHelper.isOperator('&'))
    assert.equal(true, AlphabetHelper.isOperator('='))
    assert.equal(false, AlphabetHelper.isOperator(' '))
    assert.equal(true, AlphabetHelper.isNumber('1'))
    assert.equal(true, AlphabetHelper.isNumber('9'))
    assert.equal(false, AlphabetHelper.isNumber('x'))
    assert.equal(true, AlphabetHelper.isLiteral('_'))
    assert.equal(true, AlphabetHelper.isLiteral('x'))
    assert.equal(true, AlphabetHelper.isLiteral('M'))
    assert.equal(true, AlphabetHelper.isLiteral('0'))
    assert.equal(false, AlphabetHelper.isLiteral('*'))
  })
})
