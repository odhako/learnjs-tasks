let map = new Map();

map.set("name", "John");

// let keys = map.keys();
let keys = Array.from( map.keys() );  // здесь нужен Array.from()

keys.push("more");

console.log(keys);
