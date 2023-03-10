function delay(func, ms) {
  return function(...args) {
    setTimeout(() => func.apply(this, args), ms);
  }
}

function f(x) {
  console.log(x);
}

// создаём обёртки
let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000("test"); // показывает "test" после 1000 мс
f1500("test 2"); // показывает "test" после 1500 мс
