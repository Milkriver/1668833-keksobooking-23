import { createElement } from '../utils/generate.js';
import { apartmentTypes } from '../variables.js';

const cardTemplate = document.querySelector('#card').content.querySelector('.popup');
const successTemplate = document.querySelector('#success').content.querySelector('.success');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');

const renderCard = function ({ offer, author }) {
  const template = cardTemplate.cloneNode(true);

  template.querySelector('.popup__avatar').textContent = author.avatar;
  template.querySelector('.popup__title').textContent = offer.title;
  template.querySelector('.popup__text--address').textContent = offer.address;
  template.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
  template.querySelector('.popup__type').textContent = apartmentTypes[offer.type] ? apartmentTypes[offer.type] : 'Не определен';
  template.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнат для ${offer.guests} гостей`;
  template.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  template.querySelector('.popup__description').textContent = offer.description;
  const featuresElement = template.querySelector('.popup__features');
  featuresElement.innerHTML = '';
  if (offer.features) {
    for (let index = 0; index < offer.features.length; index++) {
      const feature = createElement('li', 'popup__feature');
      feature.classList.add(`popup__feature--${offer.features[index]}`);
      featuresElement.appendChild(feature);
    }
  }
  const photosElement = template.querySelector('.popup__photos');
  photosElement.innerHTML = '';
  if (offer.photos){
    for (let index = 0; index < offer.photos.length; index++) {
      const photoOffer = createElement('img', 'popup__photo');
      photoOffer.src = offer.photos[index];
      photoOffer.width = '45';
      photoOffer.height = '40';
      photosElement.appendChild(photoOffer);
    }
  }
  return template;
};

const renderSuccess = function () {
  const template = successTemplate.cloneNode(true);
  const successMessage = createElement('p', 'success__message--extra', 'Для возврата на сайт нажмите любую клавишу');
  template.appendChild(successMessage);
  return template;
};
const renderFail = function () {
  return errorTemplate.cloneNode(true);
};
export { renderCard, renderSuccess, renderFail };
