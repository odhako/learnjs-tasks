function Person(name) {
  this.name = name;
}

let obj = new Person('Vasya');
let obj2 = new obj.constructor('Kolya');

console.log(obj.name);  // Vasya
console.log(obj2.name); // Kolya


// Чтобы сломать работоспособность, переназначим прототип Person:
Person.prototype = {};            // Это не повлияет на уже созданные объекты Person
let obj3 = new Person('Petya');   // поэтому мы создадим новый объект Person
let obj4 = new obj3.constructor('Misha');

console.log(obj3.name);  // Petya
console.log(obj4.name);  // undefined
