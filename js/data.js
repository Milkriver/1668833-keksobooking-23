const times = ['12:00', '13:00', '14:00'];
const features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const photos = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];
const types = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
import {getRandomInteger, getRandomDecimal, getRandomElement, getRandomElements} from './utils/util.js';

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

const getRandomAuthor = function (avatarNumber) {
  const fixedAvatarNumber = avatarNumber + 1;
  const linkAvatarNumber = fixedAvatarNumber.toString().padStart(2,"0");
  return {
    avatar: `img/avatars/user${linkAvatarNumber}.png`,
  };
};

const getRandomCards = function () {
  const cards = [];
  const numberElements = 10;
  for (let cardStep = 0; cardStep < numberElements; cardStep++) {
    cards[cardStep] = {
      author: getRandomAuthor(cardStep),
      offer: getRandomOffer(location),
      location: {
        lat: getRandomDecimal(35.65000, 35.70000, 5),
        lng: getRandomDecimal(139.70000, 139.80000, 5),
      },
    };
  }
  return cards;
};

export {getRandomCards};
