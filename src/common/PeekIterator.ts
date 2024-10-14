import LinkedList from 'linkedlist'

const CACHE_SIZE = 10

class PeekIterator {
  // 需要pubBack元素
  private stackPutBack = new LinkedList()
  // 基于时间窗口的缓存
  private queueCache = new LinkedList()

  constructor(private it: Iterator<any>, private endToken = null) {}

  peek() {
    if (this.stackPutBack.length > 0) {
      return this.stackPutBack.head
    }

    const val = this.next()
    this.pubBack()
    return val
  }

  pubBack() {
    if (this.queueCache.length > 0) {
      this.stackPutBack.push(this.queueCache.pop())
    }
  }

  hasNext() {
    return this.endToken || !!this.peek()
  }

  next() {
    let val: any = null

    if (this.stackPutBack.length > 0) {
      val = this.stackPutBack.pop()
    } else {
      val = this.it.next().value
      if (val == undefined) {
        const tmp = this.endToken
        this.endToken = null
        return tmp
      }
    }

    // 处理缓存
    while (this.queueCache.length > CACHE_SIZE - 1) {
      this.queueCache.shift()
    }
    this.queueCache.push(val)

    return val
  }
}

export default PeekIterator
