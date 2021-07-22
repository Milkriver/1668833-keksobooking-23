import { renderCard, renderSuccess, renderFail } from './services/render.js';
import { initMap } from './services/map.js';
import { getRandomInteger } from './utils/util.js';
import { sendData, getData } from './services/api.js';
import { activateForm, deactivateForm, validateGuests, setAddressValue } from './services/form.js';
import { initFilter } from './services/filters.js';
import { pinsNumber } from './variables.js';

deactivateForm(true);
validateGuests();
const offerForm = document.querySelector('.ad-form');
const defaultCoordinate = {
  lat: 35.6895,
  lng: 139.69171,
};

const mapContainerId = 'map-canvas';
const onMapLoad = () => activateForm(true);
const map = initMap(defaultCoordinate, mapContainerId, onMapLoad);
const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});
const mainPinMarker = L.marker(
  defaultCoordinate,
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

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

const handleFilterReady = function (filter) {
  getData((items) => onGetSuccess(items, filter))
}

initFilter(handleFilterReady)

// const offersCount = getRandomInteger(0, 40);
const onGetSuccess = (cardCollection, filter) => {

  let cards = cardCollection;
  let filtredArray = [];
  for (let i = 0; i < cards.length; i++) {
    let testCard = cards[i];
    // console.log(testCard.offer.type);
    // console.log(filter);
    if (filter.type === testCard.offer.type) {
      // console.log(filter.type);
      filtredArray.push(testCard)
    }
  }

  filtredArray = filtredArray.slice(0, pinsNumber);
  console.log(filtredArray)
  // cards = cards.slice(0, pinsNumber);

  for (let index = 0; index < cards.length; index++) {
    const card = filtredArray[index];
    const icon = L.icon({
      iconUrl: './img/pin.svg',
      iconSize: [52, 52],
      iconAnchor: [26, 52],
    });
    const marker = L.marker(
      {
        lat: card.location.lat,
        lng: card.location.lng,
      },
      {
        icon: icon,
      },
    );
    marker
      .addTo(map)
      .bindPopup(
        renderCard({
          offer: card.offer,
          author: card.author,
        }),
        {
          keepInView: true,
        },

      );
    // console.log(filtredArray);
    // const cleanFilter = function () {
    //   let filtredArray = [];
    //   marker.remove();
    // }
    // filter.addEventListener('change', cleanFilter);


  }
};
getData(onGetSuccess);

setAddressValue(defaultCoordinate);

mainPinMarker
  .addTo(map)
  .bindPopup('Главная точка');

mainPinMarker.on('moveend', (evt) => {
  const coordinates = evt.target.getLatLng();
  setAddressValue(coordinates);
});

setAddressValue(defaultCoordinate);
