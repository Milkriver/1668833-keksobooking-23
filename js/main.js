import { getRandomCards } from './data.js';
import { renderSingleOffer } from './utils/generate.js';
getRandomCards();

const offer =  {
  title: 'Квартира студия в престижном районе',
  address: 'Chiyoda-ku, Tōkyō-to 102-0091',
  price: 88000,
  type: 'house',
  rooms: 6,
  guests: 5,
  checkin: '7:00',
  checkout: '10:00',
  features: [
    'wifi',
    'washer',
    'elevator',
    'parking',
    'dishwasher',
    'conditioner',
  ],
  description: 'Комната в трёхкомнатной квартире, подойдёт молодым путешественникам.',
  photos: [
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/cameron-venti-R64qgQ6rr_o.jpg',
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
  ],
};

renderSingleOffer(offer);
