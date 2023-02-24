let user = {
  name: "Василий Иванович",
  age: 35
};

const userJSON = JSON.stringify(user, null, 2);
console.log(userJSON);

const userFromJSON = JSON.parse(userJSON);
console.log(userFromJSON);
