function unique(arr) {
  return arr.reduce((resultArr, currentItem) => {
    if (!resultArr.includes(currentItem)) {
      resultArr.push(currentItem);
    }
    return resultArr;
  }, [])
}


let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

console.log( unique(strings) ); // кришна, харе, :-O
