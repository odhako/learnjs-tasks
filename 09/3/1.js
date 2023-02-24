class Rabbit extends Object {
  constructor(name) {
    super();  // Нужен super() в начале дочернего конструктора!
    this.name = name;
  }
}

let rabbit = new Rabbit("Кроль");

console.log( rabbit.hasOwnProperty('name') ); // Нет ошибки
