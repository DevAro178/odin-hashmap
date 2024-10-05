class node {
  constructor(key, value) {
    (this.key = key), (this.value = value), (this.next = null);
  }
}

export default class LinkedList {
  constructor() {
    (this.head = null), (this.tail = null), (this.current = null);
  }

  append(key, value) {
    this.current = new node(key, value);
    if (this.head == null) {
      this.head = this.current;
      this.tail = this.current;
    } else {
      this.head.next = this.current;
      this.tail = this.current;
    }
  }

  prepend(key, value) {
    this.current = new node(key, value);
    this.current.next = this.head;
    this.head = this.current;
  }

  size() {
    let current = this.head;
    let size = 0;
    while (current) {
      size++;
      current = current.next;
    }
    return size;
  }

  firstNode() {
    return this.head;
  }

  lastNode() {
    return this.tail;
  }

  at(index) {
    let current = this.head;
    let count = 0;

    while (current !== null) {
      if (count === index) {
        return current;
      }
      count++;
      current = current.next;
    }
    return null;
  }

  pop() {
    let current = this.head;
    let prev = null;
    while (current) {
      if (current.next == null) {
        this.tail = prev;
        this.tail.next = null;
        break;
      }
      prev = current;
      current = current.next;
    }
  }

  contains(key) {
    let current = this.head;
    let found = false;
    while (current) {
      if (key == current.key) {
        found = true;
        break;
      }
      current = current.next;
    }
    return found;
  }

  find(key) {
    let current = this.head;
    let index = 0;
    while (current) {
      if (key === current.key) {
        return index;
      }
      current = current.next;
      index++;
    }
    return null;
  }

  toString() {
    let current = this.head;
    let end = false;
    let response = "";
    while (!end) {
      current = current.next;
      if (current) {
        response += "(" + current.value;
        response += ") -> ";
      } else response += "null";

      if (current == null) {
        end = true;
      }
    }
    return response;
  }

  insertAt(key, value, index) {
    let current = this.head;
    let prev = null;
    let valid = true;
    for (let i = 0; i <= index; i++) {
      prev = current;
      current = current.next;
      if (current == null) {
        console.log("Invalid Index");
        valid = false;
        break;
      }
    }
    if (valid) {
      let newNode = new node(key, value);
      prev.next = newNode;
      newNode.next = current;
    }
  }

  removeAt(index) {
    let current = this.head;
    let prev = this.head;
    let valid = true;
    for (let i = 0; i <= index; i++) {
      prev = current;
      current = current.next;
      if (current == null) {
        console.log("Invalid Index");
        valid = false;
        break;
      }
    }
    if (valid) {
      prev.next = current.next;
    }
  }

  update(key, value) {
    let current = this.head;
    let index = 0;
    while (current) {
      if (key === current.key) {
        current.value = value;
      }
      current = current.next;
      index++;
    }
    return false;
  }

  get(key) {
    let index = this.find(key);
    if (index != null) {
      return this.at(index);
    }
    return null;
  }

  keys() {
    let current = this.head;
    let arr = [];
    while (current) {
      arr.push(current.key);
      current = current.next;
    }
    return arr;
  }

  values() {
    let current = this.head;
    let arr = [];
    while (current) {
      arr.push(current.value);
      current = current.next;
    }
    return arr;
  }

  entries() {
    let current = this.head;
    let arr = [];
    while (current) {
      arr.push([current.key, current.value]);
      current = current.next;
    }
    return arr;
  }
}
