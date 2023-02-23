function checkSpam(str) {
  return str.toLowerCase().includes('xxx') || str.toLowerCase().includes('viagra');
}

console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam('innocent rabbit'));
