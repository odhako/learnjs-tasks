let animal = {
  eat() {
    this.full = true;
  }
};

let rabbit = {
  __proto__: animal
};

rabbit.eat();
// Свойство full получит rabbit, так как метод вызван с контекстом rabbit.
