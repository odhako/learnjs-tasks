// "use strict";

let str = "Привет";

str.test = 5;

console.log(str.test);

// node.js без "use strict" - undefined
// с "use strict" - TypeError: Cannot create property 'test' on string 'Привет'
