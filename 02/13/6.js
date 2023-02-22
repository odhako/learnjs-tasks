let number = 1;

while (true) {
  number = prompt('Введите число больше 100', '0');
  if (!number || number > 100) {
    break;
  }
}
