var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  var tail = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {

    // input: value
    // output: value added to the next avaliable index in storage

    for (var key in storage) {
      key = Number(key);
      if (key > tail) {
        tail = key;
      }
    }

    var nextKey = tail + 1;

    storage[nextKey] = value;
  };

  someInstance.dequeue = function() {

    // return the value in storage with the smallest value
    var keys = Object.keys(storage);
    var min = Math.min(...keys);

    var headValue = storage[min];
    delete storage[min];

    return headValue;
  };

  someInstance.size = function() {

    return Object.keys(storage).length;
  };

  return someInstance;
};
