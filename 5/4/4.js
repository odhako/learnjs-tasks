function sumInput() {
  const numbers = [];
  let input;

  while (true) {
    input = prompt('Введите число', '0');
    if (input === null || input === "" || !isFinite(input)) {
      break;
    }
    numbers.push(input);
  }

  let result = 0;
  for (const number of numbers) {
    result += +number;
  }

  return result;
}

alert(sumInput())
