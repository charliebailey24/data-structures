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

  for (var key in this.storage) {
    key = Number(key);
    if (key > this.tail) {
      this.tail = key;
    }
  }
  var nextKey = this.tail + 1;
  this.storage[nextKey] = value;
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



