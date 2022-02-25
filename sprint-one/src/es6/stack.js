class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.top = 0;
  }

  push(value) {
    this.top += 1;
    this.storage[this.top] = value;
  }

  pop() {
    var topValue = this.storage[this.top];
    delete this.storage[this.top];
    if (this.top > 0) {
      this.top -= 1;
    }
    return topValue;
  }

  size() {
    return this.top;
  }

}

var NewStack = new Stack();