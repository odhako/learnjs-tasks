function spy(func) {
  let decorator = function(...args) {
    decorator.calls.push(args);
    return func.apply(this, args);
  }

  decorator.calls = [];
  return decorator;
}

function work(a, b) {
  console.log( a + b ); // произвольная функция или метод
}

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {
  console.log( 'call:' + args.join() ); // "call:1,2", "call:4,5"
}
