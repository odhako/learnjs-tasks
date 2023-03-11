new Promise(function(resolve, reject) {
  setTimeout(() => {
    throw new Error("Whoops!");
  }, 1000);
}).catch(console.log);

// catch не выполнится, так как Error("Whoops!") запланирована
// после выполнения всего кода, включая catch.
// Код ниже выполнится как задумано, по порядку.

new Promise(function(resolve, reject) {
    throw new Error("Caught!");
}).catch(console.log);
