import LinkedList from "./linkedList.js";

export default class hashMap {
  constructor() {
    this.hashTable = this.initializeBuckets(16);
    this.capacity = this.hashTable.length;
    this.loadFactor = 0.8;
  }

  initializeBuckets(size) {
    let temp = [];
    for (let index = 0; index < size; index++) {
      const list = new LinkedList();
      temp[index] = list;
    }
    return temp;
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    return hashCode % this.capacity;
  }

  set(key, value) {
    let index = this.hash(key);
    let foundIndex = this.hashTable[index].find(key);
    if (foundIndex == null) this.hashTable[index].append(key, value);
    else this.hashTable[index].update(key, value);
    if (this.length() > this.capacity * this.loadFactor) {
      this.hashTable = this.growBucket();
    }
  }

  get(key) {
    return this.hashTable[this.hash(key)].get(key);
  }

  has(key) {
    return this.hashTable[this.hash(key)].contains(key);
  }

  remove(key) {
    let index = this.hash(key);
    let keyIndex = this.hashTable[index].find(key);
    if (keyIndex != null) {
      this.hashTable[index].removeAt(keyIndex);
      return true;
    }
    return false;
  }

  length() {
    let length = 0;
    this.hashTable.forEach((e) => (length += e.size()));
    return length;
  }

  clear() {
    this.initializeBuckets(this.capacity);
  }

  keys() {
    let arr = [];
    this.hashTable.forEach((e) => {
      arr.push(...e.keys());
    });
    return arr;
  }

  values() {
    let arr = [];
    this.hashTable.forEach((e) => {
      arr.push(...e.values());
    });
    return arr;
  }

  entries() {
    let arr = [];
    this.hashTable.forEach((e) => {
      arr.push(...e.entries());
    });
    return arr;
  }

  growBucket() {
    let entries = [];
    this.capacity = this.capacity * 2;

    this.hashTable.forEach((e) => {
      entries.push(...e.entries());
    });

    let newHashTable = this.initializeBuckets(this.capacity);
    entries.forEach((e) => {
      newHashTable[this.hash(e[0])].append(e[0], e[1]);
    });
    return newHashTable;
  }
}
