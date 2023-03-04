let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    alert(`${phrase}, ${user}`);
  }
}

sayHi();

// Функция sayHi() объявлена внутри блока кода if, и не видна снаружи.
// При вызове будет ошибка.
