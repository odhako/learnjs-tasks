function getSalariesSum(salaries) {

  let salariesSum = 0;
  for (const key in salaries) {

    salariesSum += salaries[key];
  }
  return salariesSum;

}

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

sum = getSalariesSum(salaries);
console.log(sum);
