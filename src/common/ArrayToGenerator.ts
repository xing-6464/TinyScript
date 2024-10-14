function* arrayToGenerator(arr: any[]): Generator<any, void, void> {
  for (let i = 0; i < arr.length; i++) {
    yield arr[i]
  }
}

export default arrayToGenerator
