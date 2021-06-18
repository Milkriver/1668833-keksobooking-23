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

const times = ['12:00', '13:00', '14:00'];
const features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const photos = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];
const types = ['palace', 'flat', 'house', 'bungalow', 'hotel'];

const getRandomOffer = function (myLocation) {
  return {
    title: 'Заголовок',
    address: `${myLocation.lat}, ${myLocation.lng}`,
    price: getRandomInteger(1, 999999),
    type: getRandomElement(types),
    rooms: getRandomInteger(1, 100),
    guests: getRandomInteger(1, 100),
    checkin: getRandomElement(times),
    checkout: getRandomElement(times),
    features: getRandomElements(features),
    description: 'Описание',
    photos: getRandomElements(photos),
  };
};

const getLeadZero = function (fixedAvatarNumber) {
  if (fixedAvatarNumber < 10) {
    return `0${fixedAvatarNumber}`;
  } else {
    return String(fixedAvatarNumber);
  }
};

const getRandomAuthor = function (avatarNumber) {
  const fixedAvatarNumber = avatarNumber + 1;
  const linkAvatarNumber = getLeadZero(fixedAvatarNumber);
  return {
    avatar: `img/avatars/user${linkAvatarNumber}.png`,
  };
};

const getRandomCards = function () {
  const cards = [];
  const numberElements = 10;
  for (let cardStep = 0; cardStep < numberElements; cardStep++) {
    const card = {};
    const location = {
      lat: getRandomDecimal(35.65000, 35.70000, 5),
      lng: getRandomDecimal(139.70000, 139.80000, 5),
    };
    const offer = getRandomOffer(location);
    const author = getRandomAuthor(cardStep);
    card.author = author;
    card.offer = offer;
    card.location = location;
    cards[cardStep] = card;
  }
  return cards;
};

getRandomCards();
