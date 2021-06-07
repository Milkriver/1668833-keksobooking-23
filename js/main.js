let getRandomInteger = function (min, max) {
  let random = min + Math.random() * (max - min);
  return Math.round(random);
}

let getRandomDecimal = function (min, max, quantity) {
  let random = min + Math.random() * (max - min);
  return Number(random.toFixed(quantity));
}
