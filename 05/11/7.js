function getSecondsToTomorrow() {
  const tomorrowZero = new Date;
  tomorrowZero.setHours(24, 0, 0);

  const todayNow = new Date;
  return Math.round( (tomorrowZero - todayNow) / 1000 );
}


console.log(getSecondsToTomorrow());
