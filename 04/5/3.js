function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function () {
    const addValue = +prompt('Сколько нужно добавить?', '0');
    this.value += addValue;
  }
}

let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
accumulator.read(); // прибавляет введённое пользователем значение к текущему значению

alert(accumulator.value); // выведет сумму этих значений
