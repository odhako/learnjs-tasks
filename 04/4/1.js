function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

// alert( user.ref.name ); // Каким будет результат?

console.log(user.ref.name);
// undefined
// this можно использовать в методах объекта,
// а не во время создания.
