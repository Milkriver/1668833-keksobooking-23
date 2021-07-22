import { renderCard, renderSuccess, renderFail } from './services/render.js';
import { initMap, renderOffers } from './services/map.js';
import { sendData, getOffers } from './services/api.js';
import { activateForm, deactivateForm, validateGuests, setAddressValue } from './services/form.js';
import { initFilter, filterOffers } from './services/filters.js';
// import { pinsNumber } from './variables.js';

deactivateForm(true);
validateGuests();
const offerForm = document.querySelector('.ad-form');

const MAP_CONTAINER_ID = 'map-canvas';
const mapCenter = {
  lat: 35.6895,
  lng: 139.69171,
};

const onMapLoad = () => activateForm(true);
initMap(MAP_CONTAINER_ID, mapCenter, onMapLoad);

const onSendSuccess = () => {
  const success = renderSuccess();
  const evtListener = document.addEventListener('keydown', () => {
    success.remove();
    document.removeEventListener('keydown', evtListener);
  }, true);
  success.addEventListener('click', () => success.remove());
  document.querySelector('body').append(success);
};

const onSendFail = () => {
  const fail = renderFail();
  const evtListener = document.addEventListener('keydown', () => {
    fail.remove();
    document.removeEventListener('keydown', evtListener);
  }, true);
  fail.addEventListener('click', () => fail.remove());
  document.querySelector('body').append(fail);
};

const handleFormSubmit = function (event) {
  event.preventDefault();
  sendData(onSendSuccess, onSendFail, offerForm);
};

offerForm.addEventListener('submit', handleFormSubmit);

let offers = [];
getOffers((data) => {
  offers = data;
  const slicedOffers = data.slice(0, 10);
  renderOffers(slicedOffers);
});

initFilter(() => {
  const slicedOffers = offers.slice(0, 10);
  renderOffers(filterOffers(slicedOffers));
});

setAddressValue(mapCenter);
