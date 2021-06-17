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

const pickupRandomElement = function (collection) {
  //1. Найти случайный индекс
  const randomIndex = getRandomInteger(0, collection.length - 1);
  //2. По этому индексу вытянуть элемент из массива
  const element = collection[randomIndex];
  //3. Вернуть элемент
  return element;
};

const pickupRandomElements = function (collection) {
  //1. Найти количество элементов
  const numberElement = getRandomInteger(1, collection.length);
  const clone = collection.slice(0);
  const elements = [];
  //2. Определить, какие из элементов мы будем использовать.
  for (let index = 0; index < numberElement; index++) {
    //найти случайный индекс
    const randomIndex = getRandomInteger(0, clone.length - 1);
    //вырезать элемент
    const splicedElements = clone.splice(randomIndex, 1);
    //взять 1 элемент из вырезанных
    const newElement = splicedElements.shift();
    //сложить в новый массив elements
    elements.push(newElement);
  }
  //3. Вернуть элементы
  return elements;
};

const getRandomOffer = function (myLocation) {
  const times = ['12:00', '13:00', '14:00'];
  const features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
  const photos = [
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];
  const types = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
  const offer = {
    title: 'Заголовок',
    address: `${myLocation.lat}, ${myLocation.lng}`,
    price: getRandomInteger(1, 999999),
    type: pickupRandomElement(types),
    rooms: getRandomInteger(1, 100),
    guests: getRandomInteger(1, 100),
    checkin: pickupRandomElement(times),
    checkout: pickupRandomElement(times),
    features: pickupRandomElements(features),
    description: 'Описание',
    photos: pickupRandomElements(photos),
  };
  return offer;
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
  const author = {
    avatar: `img/avatars/user${linkAvatarNumber}.png`,
  };
  return author;
};

const getRandomCards = function () {
  const cards = [];
  const numberElements = 10;
  for (let cardStep = 0; cardStep < numberElements; cardStep++) {
    //1. Создать пустую карточку
    const card = {};
    //2. Сгенерировать локацию
    const location = {
      lat: getRandomDecimal(35.65000, 35.70000, 5),
      lng: getRandomDecimal(139.70000, 139.80000, 5),
    };
    //3. Сгенерировать оффер
    const offer = getRandomOffer(location);
    //4. Сгенерировать автора
    const author = getRandomAuthor(cardStep);
    //5. Записать в карточку локацию, оффер, автора
    card.author = author;
    card.offer = offer;
    card.location = location;
    //6. Добавить карточку в массив
    cards[cardStep] = card;
  }
  return cards;
};

getRandomCards();
