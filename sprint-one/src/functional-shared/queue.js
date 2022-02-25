var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.tail = 0;
  _.extend(someInstance, queueMethods);
  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.tail += 1;
  this.storage[this.tail] = value;
};

queueMethods.dequeue = function() {
  var keys = Object.keys(this.storage);
  var min = Math.min(...keys);

  var headValue = this.storage[min];
  delete this.storage[min];

  return headValue;
};

queueMethods.size = function() {
  return Object.keys(this.storage).length;
};



