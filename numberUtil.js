export function strip(num, precision = 12) {// handle js float number bug
  return +parseFloat(num.toPrecision(precision));
}
