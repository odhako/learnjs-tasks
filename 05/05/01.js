function camelize(str) {
  return str
    .split('-')
    .map(
      (item, index) => index !== 0 ? item[0].toUpperCase() + item.slice(1) : item
    )
    .join('')
}

console.log(camelize("background-color") === 'backgroundColor');
console.log(camelize("list-style-image") === 'listStyleImage');
console.log(camelize("-webkit-transition") === 'WebkitTransition');
