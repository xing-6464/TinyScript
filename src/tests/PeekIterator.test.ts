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

  it('test_peek', () => {
    const it = new PeekIterator(arrayToGenerator([...'abcdefg']))
    assert.equal(it.next(), 'a')
    assert.equal(it.peek(), 'b')
    assert.equal(it.peek(), 'b')
    assert.equal(it.next(), 'b')
    assert.equal(it.next(), 'c')
    it.pubBack()
    it.pubBack()
    assert.equal(it.next(), 'b')
    assert.equal(it.next(), 'c')
    assert.equal(it.next(), 'd')
  })

  it('test_endToken', () => {
    const it = new PeekIterator(arrayToGenerator([...'abcdefg']), '\0')
    for (let i = 0; i < 8; i++) {
      if (i == 7) {
        assert.equal(it.next(), '\0')
      } else {
        assert.equal(it.next(), 'abcdefgh'[i])
      }
    }
  })
})
