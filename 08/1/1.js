let animal = {
  jumps: null
};
let rabbit = {
  __proto__: animal,
  jumps: true
};

console.log( rabbit.jumps ); // true, строчка 6

delete rabbit.jumps;

console.log( rabbit.jumps ); // null, из прототипа, строчка 2

delete animal.jumps;

console.log( rabbit.jumps ); // undefined, из прототипа тоже удален
