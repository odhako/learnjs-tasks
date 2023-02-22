function Calculator() {
  this.methods = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
  };

  this.calculate = function(str) {
    const [a, method, b] = str.split(' ');
    if ( !(method in this.methods) || isNaN(a) || isNaN(b) ) return NaN;
    return this.methods[method](+a, +b);
  };

  this.addMethod = function(name, func) {
    this.methods[name] = func;
  };

}


let calc = new Calculator;

console.log( calc.calculate("3 + 7") ); // 10


let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 6");
console.log( result ); // 8
