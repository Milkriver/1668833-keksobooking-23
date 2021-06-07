const getRandomInteger = function (min, max) {
  const random = min + Math.random() * (max - min);
  return Math.round(random);
};

const getRandomDecimal = function (min, max, quantity) {
  const random = min + Math.random() * (max - min);
  return Number(random.toFixed(quantity));
};

getRandomInteger(1,100);
getRandomDecimal(1,100,2);
