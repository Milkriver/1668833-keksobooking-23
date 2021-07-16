import { getRandomCards } from './data.js';
import { renderCard } from './services/render.js';
import { initMap } from './services/map.js';
import { activateForm, deactivateForm, validateGuests, setAddressValue } from './services/form.js';
const cards = getRandomCards();
const card = cards[0];
deactivateForm(true);
validateGuests();

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

const icon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});
const marker = L.marker(
  {
    lat: 35.720,
    lng: 139.692,
  },
  {
    icon: icon,
  },
);

setAddressValue(defaultCoordinate);

const  renderObject = {
  offer: card.offer,
  author: card.author,
};

marker
  .addTo(map)
  .bindPopup(
    renderCard(renderObject));

