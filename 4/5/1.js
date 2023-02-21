const sameObject = {};

function A() {
  return sameObject;
}
function B() {
  return sameObject;
}

let a = new A();
let b = new B();

console.log( a == b ); // true
console.log(a, b);
