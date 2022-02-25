class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.tail = 0;
  }

  enqueue(value) {
    this.tail += 1;
    this.storage[this.tail] = value;
  }

  dequeue() {
    var keys = Object.keys(this.storage);
    var min = Math.min(...keys);

    var headValue = this.storage[min];
    delete this.storage[min];
    return headValue;
  }

  size() {
    return Object.keys(this.storage).length;
  }

}

var NewQueue = new Queue();
