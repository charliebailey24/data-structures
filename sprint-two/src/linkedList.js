var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    // input: string value
    // output: the value added to the apporpriate node, added to the tail

    // question: what is the list actually going to look like?
    // I'm confused about the relationship between each node and the list object
    // I obviously need something to hold the nodes... or do I?

    // list = {head: {node}, ... tail: {node}}

    // create a new node
    // add node to list
    // if the current tail is null
      // add the new node to list
      // update the list tail reference to the new node (how do I store the new node in list?)
    // otherwise
      // adjust the current tails next reference to the new node

    var NewNode = Node(value);
    list.value = NewNode;
    // should I check if head is null here too?
    if (list.tail === null) {
      // set tail pointer to new node... how do I do this?
      list.tail = list.value;
    }
    if (list.tail !== null) {
      // adjust current tail's next reference to refer to NewNode
      list.tail.next = list.value;
      // change tail reference itself to refer to new last value
      list.tail = list.value;
    }
    if (list.head === null) {
      list.head = list.value;
    }
  };

  list.removeHead = function() {
    // move head reference to next item in list AFTER ORIGINAL HEAD
    var currentHead = list.head;
    list.head = list.head.next;
    return currentHead.value;
  };

  list.contains = function(target, node) {
    if (node === undefined) {
      node = list.head;
    }
    if (node.value === target) {
      return true;
    }
    if (node.value === null) {
      return false;
    }
    return list.contains(target, node.next);
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  // need to deal with this... how do I get the next node?
  node.next = null; // terminal

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
