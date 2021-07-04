const makeElement = function (tagName, className, text) {
  const element = document.createElement(tagName);
  element.classList.add(className);
  if (text) {
    element.textContent = text;
  }
  return element;
};

const renderSingleOffer = function (offer) {
  const mapOffer = document.querySelector('.map__canvas');
  const article = makeElement('article', 'popup');
  mapOffer.appendChild(article);
  const title = makeElement('h3', 'popup__title', offer.title);
  article.appendChild(title);
  const address = makeElement('p', 'popup__text--address', offer.address);
  article.appendChild(address);
  const price = makeElement('p', 'popup__text--price', `${offer.price} ₽/ночь`);
  article.appendChild(price);
  let type = makeElement('h4', 'popup__type', offer.type);
  if (offer.type === 'flat') {
    type = makeElement('h4', 'popup__type', 'Квартира');
  }
  if (offer.type === 'bungalow') {
    type = makeElement('h4', 'popup__type', 'Бунгало ');
  }
  if (offer.type === 'house') {
    type = makeElement('h4', 'popup__type', 'Дом');
  }
  if (offer.type === 'palace') {
    type = makeElement('h4', 'popup__type', 'Дворец ');
  }
  if (offer.type === 'hotel') {
    type = makeElement('h4', 'popup__type', 'Отель');
  }
  article.appendChild(type);
  const textСapacity = makeElement('p', 'popup__text--capacity', `${offer.rooms} комнат для ${offer.guests} гостей`);
  article.appendChild(textСapacity);
  const textTime = makeElement('p', 'popup__text--time', `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`);
  article.appendChild(textTime);

  const features = makeElement('ul', 'popup__features');
  article.appendChild(features);
  for (let index = 0; index < offer.features.length; index++) {
    const feature = offer.features[index];
    if (feature === 'wifi') {
      const featuresWifi = makeElement('li', 'popup__feature--wifi', 'WiFi');
      features.appendChild(featuresWifi);
    }
    if (feature === 'dishwasher') {
      const featuresDishwasher = makeElement('li', 'popup__feature--dishwasher', 'посудомоечная машина');
      features.appendChild(featuresDishwasher);
    }
    if (feature === 'washer') {
      const featuresWasher = makeElement('li', 'popup__feature--washer', 'стиральная машина');
      features.appendChild(featuresWasher);
    }
    if (feature === 'elevator') {
      const featuresElevator = makeElement('li', 'popup__feature--elevator', 'лифт');
      features.appendChild(featuresElevator);
    }
    if (feature === 'parking') {
      const featuresParking = makeElement('li', 'popup__feature--parking', 'парковка');
      features.appendChild(featuresParking);
    }
    if (feature === 'conditioner') {
      const featuresConditioner = makeElement('li', 'popup__feature--conditioner', 'кондиционер');
      features.appendChild(featuresConditioner);
    }
  }
  const description = makeElement('p', 'popup__description', offer.description);
  article.appendChild(description);
  const photos = makeElement('div', 'popup__photos', offer.photos);
  for (let index = 0; index < offer.photos.length; index++) {
    const photo = offer.photos[index];
  }
  article.appendChild(photos);
};
export { renderSingleOffer };
