Function.prototype.defer = function(ms) {
  const func = this;
  return function decorator(...args) {
    setTimeout(() => func.apply(this, args), ms)
  }
}

function f(a, b) {
  console.log( a + b );
}

f.defer(1000)(1, 2); // выведет 3 через 1 секунду.
