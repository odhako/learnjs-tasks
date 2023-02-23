function getWeekDay(date) {
  const weekDays = {
    0: 'ВС',
    1: 'ПН',
    2: 'ВТ',
    3: 'СР',
    4: 'ЧТ',
    5: 'ПТ',
    6: 'СБ',
  }

  return weekDays[date.getDay()];
}


let date = new Date(2012, 0, 3);  // 3 января 2012 года
console.log( getWeekDay(date) );  // нужно вывести "ВТ"
