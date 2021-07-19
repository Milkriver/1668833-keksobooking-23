import { getRandomCards } from './data.js';
import { renderCard } from './services/render.js';
import { initMap } from './services/map.js';
import { getRandomInteger, getRandomElements } from './utils/util.js';
import { getData } from './services/incomingData.js';
import { activateForm, deactivateForm, validateGuests, setAddressValue } from './services/form.js';
deactivateForm(true);
validateGuests();

const numberOfOffers = getRandomInteger(0, 40);
console.log(numberOfOffers);
const onSuccess = (cardCollection) => {
  const points = cardCollection.slice(numberOfOffers, numberOfOffers + 10);
  for (let index = 0; index < points.length; index++) {
    const card = points[index];
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
        }));

  }
}
const onFail = (error) => console.error('Сервер недоступен. Повторите запрос', error)

getData(onSuccess, onFail);

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

setAddressValue(defaultCoordinate);

mainPinMarker
  .addTo(map)
  .bindPopup('Главная точка');

mainPinMarker.on('moveend', (evt) => {
  const coordinates = evt.target.getLatLng();
  setAddressValue(coordinates);
});

setAddressValue(defaultCoordinate);
