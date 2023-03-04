function printListBackwardsCycle(list) {
  const resultArray = [];
  let item = list;
  while (item) {
    resultArray.push(item.value);
    item = item.next;
  }

  while (resultArray.length !== 0) {
    console.log(resultArray.pop());
  }
}

function printListBackwardsRecursion(list) {
  if (list.next) {
    printListBackwardsRecursion(list.next);
  }
  console.log(list.value);
}

let list = {value: 1, next: {value: 2, next: {value: 3, next: {value: 4, next: null}}}};
printListBackwardsCycle(list);
printListBackwardsRecursion(list);
