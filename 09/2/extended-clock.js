import Clock from "../1/clock.js"

class ExtendedClock extends Clock {
  constructor({ template, precision }) {
    super( {template} );
    this.precision = precision;
  }

  start() {
    this.render();
    this.timer = setInterval(this.render.bind(this), this.precision);
  }
}


let clock = new ExtendedClock({template: 'h:m:s', precision: 300});
clock.start();
