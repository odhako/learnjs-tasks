function readNumber() {
  let input;

  do {
    input = prompt('Введите число', '0');
  } while (!isFinite(input))

  if (input === '' || input === null) {
    return null;
  }

  return input;
}

alert(`Число: ${readNumber()}`);
