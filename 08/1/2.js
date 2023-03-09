let head = {
  glasses: 1
};

let table = {
  __proto__: head,
  pen: 3
};

let bed = {
  __proto__: table,
  sheet: 1,
  pillow: 2
};

let pockets = {
  __proto__: bed,
  money: 2000
};

console.log(pockets.pen);  // 3
console.log(bed.glasses);  // 1


// Функция для измерения времени выполнения функции
function bench(fn) {
  let start = Date.now();
  for (let i = 0; i < 100000000; i++) fn();
  return Date.now() - start;
}

console.log('pockets.glasses: ' + bench(() => pockets.glasses) + ' ms');
console.log('head.glasses: ' + bench(() => head.glasses) + ' ms');

// Получение pockets.glasses быстрее чем head.glasses,
// по крайней мере в этом простом тесте, но разница
// становится заметна только на 1 миллионе итераций.
