var Stack = function() {

  var someInstance = {};
  someInstance.storage = {};
  someInstance.top = 0;
  _.extend(someInstance, stackMethods);

  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.top += 1;
  var nextKey = this.top;
  this.storage[nextKey] = value;
};

stackMethods.pop = function() {
  var topValue = this.storage[this.top];
  delete this.storage[this.top];
  if (this.top > 0) {
    this.top -= 1;
  }
  return topValue;
};

stackMethods.size = function() {
  return this.top;
};






