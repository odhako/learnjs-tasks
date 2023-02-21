let calculator = {
  read() {
    this.x = prompt('a?', '0');
    this.y = prompt('b?', '0');
  },

  sum() {
    return +this.x + +this.y;
  },

  mul() {
    return this.x * this.y;
  },
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
