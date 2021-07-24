import { renderSuccess, renderFail } from './services/render.js';
import { initMap, renderOffers, resetMainMarker, updateView } from './services/map.js';
import { sendData, getOffers } from './services/api.js';
import { activateForm, deactivateForm, guestsValidateHandler, resetForm, setAddressValue } from './services/form.js';
import { initFilter, filterOffers, resetFilter } from './services/filters.js';
import { PINS_NUMBER } from './variables.js';
import { debounce } from './utils/debounce.js';

deactivateForm(true);
guestsValidateHandler();
const offerForm = document.querySelector('.ad-form');

const MAP_CONTAINER_ID = 'map-canvas';
const mapCenter = {
  lat: 35.68950,
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
  resetFilter();
  resetForm();
  updateView(mapCenter);
  resetMainMarker(mapCenter);
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

const OnFormSubmit = function (event) {
  event.preventDefault();
  sendData(onSendSuccess, onSendFail, offerForm);
};

offerForm.addEventListener('submit', OnFormSubmit);

let offers = [];
getOffers((data) => {
  offers = data;
  const slicedOffers = data.slice(0, PINS_NUMBER);
  renderOffers(slicedOffers);
});

const debouncedRenderOffers = debounce(() => {
  renderOffers(filterOffers(offers).slice(0, PINS_NUMBER));
});
initFilter(debouncedRenderOffers);

setAddressValue(mapCenter);
