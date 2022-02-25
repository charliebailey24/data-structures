var Stack = function() {
  var someInstance = {};
  var storage = {};
  var top = 0;

  someInstance.push = function(value) {
    top += 1;
    storage[top] = value;
  };

  someInstance.pop = function() {
    var topValue = storage[top];
    delete storage[top];
    if (top > 0) {
      top -= 1;
    }
    return topValue;
  };

  someInstance.size = function() {
    return top;
  };

  return someInstance;
};
