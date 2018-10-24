class Stack<T> {
  private items: Array<T> = [];
  push(ele: T) {
    this.items.push(ele);
  }
  pop(): T {
    return this.items.pop() as T;
  }
  peek() {
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  clear() {
    this.items = [];
  }
  print() {
    console.log(this.items.toString());
  }
}

function divideBy2(decNumber: number, base: number) {
  let remStack = new Stack<number>(),
    rem: number,
    binaryString: string = '',
    digits: string = '0123456789ABCDEF';
  while (decNumber > 0) {
    rem = Math.floor(decNumber % base);
    decNumber = Math.floor(decNumber / base);
    remStack.push(rem);
  }
  while (!remStack.isEmpty()) {
    binaryString += digits[remStack.pop()];
  }
  return binaryString;
}

console.log(divideBy2(100345, 16));
