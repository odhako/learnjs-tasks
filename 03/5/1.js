it("Возводит x в степень n", function() {
  let x = 5;

  let result = x;
  assert.equal(pow(x, 1), result);

  result *= x;
  assert.equal(pow(x, 2), result);

  result *= x;
  assert.equal(pow(x, 3), result);
});

// Не очевидно что с чем сравнивается, лучше написать явно.
// Еще лучше разделить на блоки it() чтобы тест выполнял их отдельно
// и очевидно показывал в каком месте происходит ошибка.
