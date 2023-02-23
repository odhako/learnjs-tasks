function getSecondsToday() {
  const todayZero = new Date;
  todayZero.setHours(0, 0, 0);

  const todayNow = new Date;
  return Math.round( (todayNow - todayZero) / 1000 );

}


console.log(getSecondsToday());
