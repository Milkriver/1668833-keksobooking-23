const getRandomInteger = function (min, max) {
  if (min < 0 || min > max) {
    return null;
  }
  const random = min + Math.random() * (max - min);
  return Math.round(random);
};

const getRandomDecimal = function (min, max, quantity) {
  if (min < 0 || min > max) {
    return null;
  }
  const random = min + Math.random() * (max - min);
  return Number(random.toFixed(quantity));
};

const getRandomElement = function (collection) {
  const randomIndex = getRandomInteger(0, collection.length - 1);
  return collection[randomIndex];
};

const getRandomElements = function (collection) {
  const numberElement = getRandomInteger(1, collection.length);
  const clone = collection.slice(0);
  const elements = [];
  for (let index = 0; index < numberElement; index++) {
    const randomIndex = getRandomInteger(0, clone.length - 1);
    const splicedElements = clone.splice(randomIndex, 1);
    const newElement = splicedElements.shift();
    elements.push(newElement);
  }
  return elements;
};

export { getRandomInteger, getRandomDecimal, getRandomElement, getRandomElements };
