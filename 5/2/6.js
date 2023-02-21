// Функция из прошлой задачи:
function random(min, max) {
  return min + (Math.random() * (max - min));
}

function randomInteger(min, max) {
  return Math.floor( random(min, max + 1) );
}

console.log(randomInteger(1, 5));
