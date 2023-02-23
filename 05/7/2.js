function aclean(arr) {
  const result = [];
  result.push(arr[0]);
  iteration: for (const word of arr) {
    const sortedLettersOfCurrent = word.toLowerCase().split('').sort().join('');

    for (const addedWord of result) {
      if (addedWord.toLowerCase().split('').sort().join('') === sortedLettersOfCurrent) {
        continue iteration;
      }
    }

    result.push(word);
  }

  return result;
}


let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log( aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era"
