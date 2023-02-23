let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" }
];

// Чтобы хранить время, когда было прочитано сообщение,
// можно использовать WeakMap, где ключом будет объект
// сообщения, а значением - объект Date.
