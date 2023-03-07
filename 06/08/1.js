function printNumbersSetInterval(from, to) {
  let i = from;
  let intervalId = setInterval(function() {
    console.log(i);
    i++;
    if (i > to) clearTimeout(intervalId);
    }, 1000);
}

function printNumbersSetTimeout(from, to) {
  let i = from;
  setTimeout(function tick() {
    console.log(i);
    i++;
    if (i <= to) setTimeout(tick, 1000);
    }, 1000);
}

printNumbersSetInterval(1, 10);
// printNumbersSetTimeout(1, 10);
