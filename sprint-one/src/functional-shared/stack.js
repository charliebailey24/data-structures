var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.top = 0;
  _.extend(someInstance, stackMethods);

  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  // input: string value
  // output: value added to the top of storage

  for (var key in this.storage) {
    key = Number(key);
    if (key > this.top) {
      this.top = key;
    }
  }
  var nextKey = this.top + 1;
  this.storage[nextKey] = value;

};

stackMethods.pop = function() {

  for (var key in this.storage) {
    key = Number(key);
    if (key > this.top) {
      this.top = key;
    }
  }
  var topValue = this.storage[this.top];
  delete this.storage[this.top];

  if (this.top > 0) {
    this.top -= 1;
  }

  return topValue;
};

stackMethods.size = function() {
  return Object.keys(this.storage).length;
};






