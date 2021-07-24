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

  const featureElements = template.querySelector('.popup__features');
  if (offer.features) {
    featureElements.innerHTML = '';
    offer.features.forEach((feature) => {
      const featureElement = createElement('li', 'popup__feature');
      featureElement.classList.add(`popup__feature--${feature}`);
      featureElements.appendChild(featureElement);
    });
  } else {
    featureElements.remove();
  }

  const photoElements = template.querySelector('.popup__photos');
  if (offer.photos) {
    photoElements.innerHTML = '';
    offer.photos.forEach((photo) => {
      const photoElement = createElement('img', 'popup__photo');
      photoElement.src = photo;
      photoElement.width = '45';
      photoElement.height = '40';
      photoElements.appendChild(photoElement);
    });
  } else {
    photoElements.remove();
  }

  return template;
};

const renderSuccess = () => {
  const template = successTemplate.cloneNode(true);
  const successMessage = createElement('p', 'success__message--extra', 'Для возврата на сайт нажмите любую клавишу');
  template.appendChild(successMessage);
  return template;
};

const renderFail = (message) => {
  const template = errorTemplate.cloneNode(true);
  template.querySelector('.error__message').textContent = message;
  return template;
};

export { renderCard, renderSuccess, renderFail };
