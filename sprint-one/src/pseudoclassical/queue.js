var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.tail = 0;
};

Queue.prototype.enqueue = function(value) {
  this.tail += 1;
  this.storage[this.tail] = value;
};

Queue.prototype.dequeue = function() {
  var keys = Object.keys(this.storage);
  var min = Math.min(...keys);

  var headValue = this.storage[min];
  delete this.storage[min];

  return headValue;
};

Queue.prototype.size = function() {
  return Object.keys(this.storage).length;
};

var NewQueue = new Queue();


