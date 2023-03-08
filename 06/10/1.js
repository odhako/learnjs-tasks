function f() {
  console.log( this ); // ?
}

let user = {
  g: f.bind(null)  // null привязан в качестве this
};

user.g();  // выведет null, т.к. this == null
