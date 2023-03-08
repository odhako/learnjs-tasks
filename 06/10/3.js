function sayHi() {
  alert( this.name );
}
sayHi.test = 5;

let bound = sayHi.bind({  // В привязанном контексте не определена переменная test
  name: "Вася"
});

console.log( bound.test ); // что выведет? почему?

// undefined, так как контекст другой
