function formatDate(date) {
  const diffMs = Date.now() - date;

  if (diffMs < 1000) {
    return "прямо сейчас";
  } else if (diffMs < 60000) {
    return `${diffMs / 1000} сек. назад`;
  } else if (diffMs < 3600000) {
    return `${diffMs / 60000} мин. назад`;
  } else {
    return date.toLocaleString('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hourCycle: 'h23',
    }).replace(',', '');
  }
}


console.log( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

console.log( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
console.log( formatDate(new Date(new Date - 86400 * 1000)) );
