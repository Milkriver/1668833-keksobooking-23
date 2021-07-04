let makeElement = function (tagName, className, text) {
  let element = document.createElement(tagName);
  element.classList.add(className);
  if (text) {
    element.textContent = text;
  };
  return element;
}

//1. создатьв памяти дом элемент обьявление
let renderSingleOffer = function () {
  let mapOffer = document.querySelector('.map__canvas');
  let article = makeElement('article', 'popup');
  mapOffer.appendChild(article);
  let title = makeElement('h3', 'popup__title', 'Уютное гнездышко для молодоженов');
  article.appendChild(title);
  let address = makeElement('p', 'popup__text--address', '102-0082 Tōkyō-to, Chiyoda-ku, Ichibanchō, 14−3');
  article.appendChild(address);
  let price = makeElement('p', 'popup__text--price', '5200₽/ночь');
  article.appendChild(price);
  let type = makeElement('h4', 'popup__type', 'Квартира');
  article.appendChild(type);
  let textСapacity = makeElement('p', 'popup__text--capacity', '2 комнаты для 3 гостей');
  article.appendChild(textСapacity);
  let textTime = makeElement('p', 'popup__text--time', 'Заезд после 14:00, выезд до 10:00');
  article.appendChild(textTime);
  let features = makeElement('ul', 'popup__features');
  article.appendChild(features);
  let featuresWifi = makeElement('li', 'popup__feature--wifi', 'wi-fi');
  features.appendChild(featuresWifi);
  let featuresDishwasher = makeElement('li', 'popup__feature--dishwasher', 'dishwasher');
  features.appendChild(featuresDishwasher);
  let featuresParking = makeElement('li', 'popup__feature--parking', 'parking');
  features.appendChild(featuresParking);
  let featuresWasher = makeElement('li', 'popup__feature--washer', 'washer');
  features.appendChild(featuresWasher);
  let featuresElevator = makeElement('li', 'popup__feature--elevator', 'elevator');
  features.appendChild(featuresElevator);
  let featuresConditioner = makeElement('li', 'popup__feature--conditioner', 'conditioner');
  features.appendChild(featuresConditioner);
  let description = makeElement('p', 'popup__description', 'Великолепная квартира-студия в центре Токио. Подходит как туристам, так и бизнесменам. Квартира полностью укомплектована и недавно отремонтирована.');
  article.appendChild(description);
  let photos = makeElement('div', 'popup__photos');
  article.appendChild(photos);
  let photosImg = makeElement('img', 'popup__photo');
  photosImg.src = document.querySelector('.popup__photo').imgUrl;
  photosImg.alt = document.querySelector('.popup__photo').text;
  article.appendChild(photosImg);
}

export { renderSingleOffer };
