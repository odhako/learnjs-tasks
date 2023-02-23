function sumSalaries(salaries) {
  let result = 0;

  for (const salary of Object.values(salaries)) {
    result += salary;
  }

  return result;
}


let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

console.log( sumSalaries(salaries) ); // 650
