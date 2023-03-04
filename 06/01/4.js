function printListCycle(list) {
  let item = list;
  while (item) {
    console.log(item.value);
    item = item.next;
  }
}

function printListRecursion(list) {
  console.log(list.value);
  if (list.next) {
    printListRecursion(list.next);
  }
}

let list = {value: 1, next: {value: 2, next: {value: 3, next: {value: 4, next: null}}}};
printListCycle(list);
printListRecursion(list);

// Функция для измерения времени выполнения функции
function bench(fn, args) {
  let start = Date.now();
  for (let i = 0; i < 1000; i++) fn(...args);
  return Date.now() - start;
}

// console.log('printListCycle: ' + bench(printListCycle, [list]) + ' ms');
// console.log('printListRecursion: ' + bench(printListRecursion, [list]) + ' ms');

// Примерно одинаковое время выполнения.
