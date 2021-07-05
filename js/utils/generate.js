const makeElement = function (tagName, className, text) {
  const element = document.createElement(tagName);
  element.classList.add(className);
  if (text) {
    element.textContent = text;
  }
  return element;
};

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
  let type = makeElement('h4', 'popup__type', offer.type);
  switch (offer.type) {
    case 'flat':
      type = makeElement('h4', 'popup__type', 'Квартира');
      break;
    case 'bungalow':
      type = makeElement('h4', 'popup__type', 'Бунгало');
      break;
    case 'house':
      type = makeElement('h4', 'popup__type', 'Дом');
      break;
    case 'palace':
      type = makeElement('h4', 'popup__type', 'Дворец');
      break;
    case 'hotel':
      type = makeElement('h4', 'popup__type', 'Отель');
      break;
  };
  article.appendChild(type);

  const textСapacity = makeElement('p', 'popup__text--capacity', `${offer.rooms} комнат для ${offer.guests} гостей`);
  article.appendChild(textСapacity);
  const textTime = makeElement('p', 'popup__text--time', `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`);
  article.appendChild(textTime);

  const features = makeElement('ul', 'popup__features');
  article.appendChild(features);
  for (let index = 0; index < offer.features.length; index++) {
    const feature = offer.features[index];
    switch (feature) {
      case 'wifi':
        const featuresWifi = makeElement('li', 'popup__feature--wifi', 'WiFi');
        features.appendChild(featuresWifi);
        break
      case 'dishwasher':
        const featuresDishwasher = makeElement('li', 'popup__feature--dishwasher', 'посудомоечная машина');
        features.appendChild(featuresDishwasher);
        break
      case 'washer':
        const featuresWasher = makeElement('li', 'popup__feature--washer', 'стиральная машина');
        features.appendChild(featuresWasher);
        break
      case 'elevator':
        const featuresElevator = makeElement('li', 'popup__feature--elevator', 'лифт');
        features.appendChild(featuresElevator);
        break
      case 'parking':
        const featuresParking = makeElement('li', 'popup__feature--parking', 'парковка');
        features.appendChild(featuresParking);
        break
      case 'conditioner':
        const featuresConditioner = makeElement('li', 'popup__feature--conditioner', 'кондиционер');
        features.appendChild(featuresConditioner);
        break
    }
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
