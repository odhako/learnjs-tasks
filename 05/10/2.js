function topSalary(salaries) {
  let resultName;

  for ( const [name, salary] of Object.entries(salaries) ) {
    if (!resultName || salaries[resultName] < salary) {
      resultName = name;
    }
  }

  return resultName;
}


let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

console.log( topSalary(salaries) );  // Pete
