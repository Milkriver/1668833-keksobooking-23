import { makeElement } from '../utils/generate.js';

const renderSingleCard = function (card) {
  const {offer, author} = card;

  const mapOffer = document.querySelector('.map__canvas');
  const avatar = makeElement('img', 'popup__avatar', author.avatar);
  mapOffer.appendChild(avatar);
  const article = makeElement('article', 'popup');
  mapOffer.appendChild(article);
  const title = makeElement('h3', 'popup__title', offer.title);
  article.appendChild(title);
  const address = makeElement('p', 'popup__text--address', offer.address);
  article.appendChild(address);
  const price = makeElement('p', 'popup__text--price', `${offer.price} ₽/ночь`);
  article.appendChild(price);

  let localizationType;
  switch (offer.type) {
    case 'flat':
      localizationType = 'Квартира';
      break;
    case 'bungalow':
      localizationType = 'Бунгало';
      break;
    case 'house':
      localizationType = 'Дом';
      break;
    case 'palace':
      localizationType = 'Дворец';
      break;
    case 'hotel':
      localizationType = 'Отель';
      break;
  }
  const type = makeElement('h4', 'popup__type', localizationType);
  article.appendChild(type);

  const textСapacity = makeElement('p', 'popup__text--capacity', `${offer.rooms} комнат для ${offer.guests} гостей`);
  article.appendChild(textСapacity);
  const textTime = makeElement('p', 'popup__text--time', `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`);
  article.appendChild(textTime);

  const features = makeElement('ul', 'popup__features');
  article.appendChild(features);
  for (let index = 0; index < offer.features.length; index++) {
    const feature = createElement('li', 'popup__feature');
    feature.classList.add(`popup__feature--${offer.features[index]}`);
    featuresElement.appendChild(feature);
  }

  const description = makeElement('p', 'popup__description', offer.description);
  article.appendChild(description);
  const photos = makeElement('div', 'popup__photos');
  for (let index = 0; index < offer.photos.length; index++) {
    const photo = offer.photos[index];
    const photoOffer = makeElement('img', 'popup__photo');
    photoOffer.src = photo;
    photos.appendChild(photoOffer);
  }
  article.appendChild(photos);
};

export { renderSingleCard };
