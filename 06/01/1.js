function sumToCycle(n) {
  let result = 0;
  for (let i = 1; i <= n; i++) result += i;
  return result;
}

function sumToRecursion(n) {
  return (n === 1) ? 1 : n + sumToRecursion(n - 1);
}

function sumToFormula(n) {
  return (n * (n + 1)) / 2;
}

console.log(sumToCycle(10000));
console.log(sumToRecursion(10000));
console.log(sumToFormula(10000));

// Функция для измерения времени выполнения функции
function bench(fn, args) {
  let start = Date.now();
  for (let i = 0; i < 100000; i++) fn(...args);
  return Date.now() - start;
}

console.log('sumToCycle: ' + bench(sumToCycle, [10000]) + ' ms');
console.log('sumToRecursion: ' + bench(sumToRecursion, [10000]) + ' ms');
console.log('sumToFormula: ' + bench(sumToFormula, [10000]) + ' ms');

// Самый быстрый вариант решения - формула, там нет никакого цикла, просто короткое вычисление.
// На втором месте - вычисление в цикле, в 200-400 раз медленнее, т.к. нет затрат на вложенные вызовы.
// На последнем месте вариант с рекурсией, он примерно в 6-7 раз медленнее чем вариант с циклом.

// Вычислить с помощью рекурсии сумму всех чисел до 100000 не удалось:
// RangeError: Maximum call stack size exceeded
