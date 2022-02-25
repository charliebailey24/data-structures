var Queue = function() {
  var someInstance = {};
  var storage = {};
  var tail = 0;

  someInstance.enqueue = function(value) {
    tail += 1;
    storage[tail] = value;
  };

  someInstance.dequeue = function() {
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
