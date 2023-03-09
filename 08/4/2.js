function Rabbit(name) {
  this.name = name;
}

Rabbit.prototype.sayHi = function() {
  console.log(this.name);
};

let rabbit = new Rabbit("Rabbit");

rabbit.sayHi();  // Rabbit, метод из прототипа, name из контекста
Rabbit.prototype.sayHi();  // undefined, в контексте прототипа не определен name
Object.getPrototypeOf(rabbit).sayHi();  // undefined, тоже вызывается в контексте прототипа
rabbit.__proto__.sayHi();  // undefined, тоже в контексте прототипа
