import PeekIterator from '../common/PeekIterator'
import arrayToGenerator from '../common/ArrayToGenerator'

describe('test PeekIterator', () => {
  it('test_peek', () => {
    const it = new PeekIterator(arrayToGenerator([...'abcdefg']))
    assert.equal(it.next(), 'a')
    assert.equal(it.next(), 'b')
    assert.equal(it.peek(), 'c')
    assert.equal(it.peek(), 'c')
    assert.equal(it.next(), 'c')
    assert.equal(it.next(), 'd')
  })
})
