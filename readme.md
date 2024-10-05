# HashMap Implementation

## Overview

This project is a JavaScript implementation of a HashMap data structure. It uses a `LinkedList` for handling collisions, allowing efficient insertion, deletion, and retrieval of key-value pairs. The HashMap automatically resizes when the load factor exceeds a threshold, ensuring performance optimization.

## Features

- Efficient key-value pair storage and retrieval.
- Automatic resizing of buckets to handle increased data.
- Collision resolution using Linked Lists.
- Supports various operations such as adding, updating, retrieving, and deleting entries.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/DevAro178/odin-hashmap.git
   ```
2. Navigate to the project directory:
   ```bash
   cd odin-hashmap
   ```

## Usage

Example usage of the HashMap class:

```javascript
import hashMap from "./hashMap.js";

const map = new hashMap();
map.set("apple", "red");
console.log(map.get("apple")); // Output: red
map.set("banana", "yellow");
console.log(map.has("banana")); // Output: true
map.remove("apple");
console.log(map.get("apple")); // Output: null
```

## Methods

### `set(key, value)`

- Adds or updates the key-value pair in the HashMap.

### `get(key)`

- Retrieves the value associated with the key. Returns `null` if the key is not found.

### `has(key)`

- Checks if the key exists in the HashMap.

### `remove(key)`

- Removes the key-value pair from the HashMap. Returns `true` if successful, `false` if the key does not exist.

### `keys()`

- Returns an array of all keys in the HashMap.

### `values()`

- Returns an array of all values in the HashMap.

### `entries()`

- Returns an array of key-value pairs in the HashMap.

### `clear()`

- Clears all entries from the HashMap.

### `length()`

- Returns the total number of key-value pairs in the HashMap.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request for any improvements or features.

## License

This project is open-source and available under the [MIT License](LICENSE).
