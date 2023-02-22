'use strict';

const login = prompt('Кто там?', '');

if (!login) {
  alert('Отменено');
} else if (login !== 'Админ') {
  alert('Я вас не знаю');
} else {
  const password = prompt('Пароль', '');

  if (!password) {
    alert('Отменено');
  } else if (password !== 'Я главный') {
    alert('Неверный пароль');
  } else {
    alert('Здравствуйте!');
  }
}
