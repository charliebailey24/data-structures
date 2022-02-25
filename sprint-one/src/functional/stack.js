var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var top = 0;

  // Implement the methods below
  someInstance.push = function(value) {

    // input: some value
    // output: value added to someInstance (or storage?) at the "top of the stack"

    // get max key in storage
    // add value at max key

    for (var key in storage) {
      key = Number(key);
      if (key > top) {
        top = key;
      }
    }
    var nextKey = top + 1;

    storage[nextKey] = value;
  };

  someInstance.pop = function() {
    for (var key in storage) {
      key = Number(key);
      if (key > top) {
        top = key;
      }
    }

    var topValue = storage[top];
    delete storage[top];
    if (top > 0) {
      top -= 1;
    }

    return topValue;
  };

  someInstance.size = function() {

    return Object.keys(storage).length;
  };

  return someInstance;
};
