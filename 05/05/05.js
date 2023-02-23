function copySorted(arr) {
  const arrCopy = arr.slice();
  return arrCopy.sort();
}


let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

console.log( sorted ); // CSS, HTML, JavaScript
console.log( arr ); // HTML, JavaScript, CSS (без изменений)
