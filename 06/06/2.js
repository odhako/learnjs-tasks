function sum(a) {
  let currentResult = a;
  function inner(b) {
    currentResult += b;
    return inner;
  }

  inner.toString = function() {
    return currentResult;
  };

  return inner;
}


console.log( +sum(1)(2) );              // 3
console.log( +sum(1)(2)(3) );           // 6
console.log( +sum(5)(-1)(2) );          // 6
console.log( +sum(6)(-1)(-2)(-3) );     // 0
console.log( +sum(0)(1)(2)(3)(4)(5) );  // 15

// В nodejs console.log работает по-другому.
// Самый простой вариант это добавить унарный плюс к вызову.
