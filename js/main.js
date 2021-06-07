const getRandomInteger = function (min, max) {
  if (min < 0 || min > max) {
    return undefined;
  }
  const random = min + Math.random() * (max - min);
  return Math.round(random);
};

const getRandomDecimal = function (min, max, quantity) {
  if (min < 0 || min > max) {
    return undefined;
  }
  const random = min + Math.random() * (max - min);
  return Number(random.toFixed(quantity));
};

getRandomInteger(1, 100);
getRandomDecimal(1, 100, 2);
