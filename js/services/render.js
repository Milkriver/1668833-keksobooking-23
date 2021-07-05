import { makeElement } from '../utils/generate.js';

const renderSingleCard = function (card) {
  const offer = card.offer;
  const author = card.author;

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
  };
  let type = makeElement('h4', 'popup__type', localizationType);
  article.appendChild(type);

  const textСapacity = makeElement('p', 'popup__text--capacity', `${offer.rooms} комнат для ${offer.guests} гостей`);
  article.appendChild(textСapacity);
  const textTime = makeElement('p', 'popup__text--time', `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`);
  article.appendChild(textTime);

  const features = makeElement('ul', 'popup__features');
  article.appendChild(features);
  for (let index = 0; index < offer.features.length; index++) {
    const feature = offer.features[index];
    let featureElement;
    switch (feature) {
      case 'wifi':
        featureElement = makeElement('li', 'popup__feature--wifi', 'WiFi');
        break
      case 'dishwasher':
        featureElement = makeElement('li', 'popup__feature--dishwasher', 'посудомоечная машина');
        break
      case 'washer':
        featureElement = makeElement('li', 'popup__feature--washer', 'стиральная машина');
        break
      case 'elevator':
        featureElement = makeElement('li', 'popup__feature--elevator', 'лифт');
        break
      case 'parking':
        featureElement = makeElement('li', 'popup__feature--parking', 'парковка');
        break
      case 'conditioner':
        featureElement = makeElement('li', 'popup__feature--conditioner', 'кондиционер');
        break
    }
    features.appendChild(featureElement);
  }

  const description = makeElement('p', 'popup__description', offer.description);
  article.appendChild(description);
  const photos = makeElement('div', 'popup__photos');
  for (let index = 0; index < offer.photos.length; index++) {
    let photo = offer.photos[index];
    let photoOffer = makeElement('img', 'popup__photo');
    photoOffer.src = photo;
    photos.appendChild(photoOffer);
  }
  article.appendChild(photos);
}

export { renderSingleCard };
