function A() {}
function B() {}

A.prototype = B.prototype = {};

let a = new A();

console.log( a instanceof B ); // true
// У A() и B() один и тот же прототип,
// поэтому instanceof покажет true, хоть это и не так.
