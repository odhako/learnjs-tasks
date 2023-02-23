function getLastDayOfMonth(year, month) {
  const lastDay = new Date(year, month + 1, 0);  // Месяц +1, день 0, то есть -1
  return lastDay.getDate();
}


console.log(getLastDayOfMonth(2012, 1));  // 29
