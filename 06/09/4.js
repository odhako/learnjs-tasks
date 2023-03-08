function throttle(f, ms) {
  let isThrottle = false;
  let decorator = function(...args) {

    if (!isThrottle) {
      isThrottle = true;

      setTimeout(() => {
        isThrottle = false;
        if (decorator.lastCall) {
          decorator.lastCall();
          decorator.lastCall = null;
        }
      }, ms);

      if (!decorator.lastCall) {
        return f.apply(this, args);
      }

      return decorator.lastCall()

    } else {
      decorator.lastCall = () => f.apply(this, args);
    }
  }

  return decorator;
}

function f(a) {
  console.log(a);
  console.log(f.myName);
}

f.myName = 'odhako';

// f1000 передаёт вызовы f максимум раз в 1000 мс
let f1000 = throttle(f, 1000);

f1000(1); // показывает 1
f1000(2); // (ограничение, 1000 мс ещё нет)
f1000(3); // (ограничение, 1000 мс ещё нет)

// когда 1000 мс истекли ...
// ...выводим 3, промежуточное значение 2 было проигнорировано
