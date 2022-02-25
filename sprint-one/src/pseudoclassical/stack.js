var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.top = 0;
};

Stack.prototype.push = function(value) {
  this.top += 1;
  this.storage[this.top] = value;
};

Stack.prototype.pop = function() {
  var topValue = this.storage[this.top];
  delete this.storage[this.top];
  if (this.top > 0) {
    this.top -= 1;
  }
  return topValue;
};

Stack.prototype.size = function() {
  return this.top;
};

var NewStack = new Stack();


