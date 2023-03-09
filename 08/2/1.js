function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

// Чтобы все работало правильно, раскомментировать строчки по одной

// Rabbit.prototype = {};  // true, новый прототип не влияет на уже созданные объекты
// Rabbit.prototype.eats = false;  // false, изменено свойство прототипа
// delete rabbit.eats;  // true, delete пытается удалить свойство объекта, а оно взято из прототипа
// delete Rabbit.prototype.eats;  // undefined, вот здесь удалено свойство из прототипа

console.log( rabbit.eats );
