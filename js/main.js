import { renderSuccess, renderFail } from './services/render.js';
import { initMap, renderOffers, resetMainMarker, updateView } from './services/map.js';
import { sendData, getOffers } from './services/api.js';
import { activateForm, deactivateForm, guestsValidateHandler, resetForm, setAddressValue } from './services/form.js';
import { initFilter, filterOffers, resetFilter } from './services/filters.js';
import { DIALOG_MESSAGES, PINS_NUMBER } from './variables.js';
import { debounce } from './utils/debounce.js';
import { showErrorDialog, showSuccessDialog } from './services/dialog.js';

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
  showSuccessDialog()
  offerForm.reset();
};

const onSendFail = (message) => {
  showErrorDialog(message)
};

const onFormSubmit = (event) => {
  event.preventDefault();
  sendData(
    onSendSuccess, () => onSendFail(DIALOG_MESSAGES.postOfferError), offerForm);
};

const onFormReset = () => {
  setTimeout(() => {
    resetForm();
    resetFilter();
    updateView(mapCenter);
    resetMainMarker(mapCenter);
  }, 0);
};

offerForm.addEventListener('reset', onFormReset);
offerForm.addEventListener('submit', onFormSubmit);

let offers = [];

const onGetOffersSuccess = (data) => {
  offers = data;
  const slicedOffers = data.slice(0, PINS_NUMBER);
  renderOffers(slicedOffers);
};

const onGetOffersFail = () => onSendFail(DIALOG_MESSAGES.getOfferError);

getOffers(onGetOffersSuccess, onGetOffersFail);

const debouncedRenderOffers = debounce(() => {
  renderOffers(filterOffers(offers).slice(0, PINS_NUMBER));
});
initFilter(debouncedRenderOffers);

setAddressValue(mapCenter);
