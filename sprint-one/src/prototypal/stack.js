var Stack = function() {

  var newInstance = Object.create(stackMethods);
  newInstance.storage = {};
  newInstance.top = 0;

  return newInstance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.top += 1;
  this.storage[this.top] = value;
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


