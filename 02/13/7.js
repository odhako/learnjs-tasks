let n = 10;

numbers: for (let number = 2; number <= n; number += 1) {
  for (let divider = 2; divider <= (number / 2); divider += 1) {
    if (number % divider === 0) {
      continue numbers;
    }
  }
  alert(number);
}
