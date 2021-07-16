import { getRandomCards } from './data.js';
import { renderCard } from './services/render.js';
import { activateForm, deactivateForm, validateGuests } from './services/form.js';
const cards = getRandomCards();
const card = cards[0];
console.log(card);
deactivateForm(true);
// setTimeout(activateForm, 1000, false);
validateGuests();

const map = L.map('map-canvas')
  .on('load', () => {
    activateForm(true);
    console.log('Карта инициализирована');
  })
  .setView({
    lat: 35.6895,
    lng: 139.69171,
  }, 10);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const setAddressValue = (coordinateObject) => {
  document.querySelector('#address').value =
    `Широта: ${coordinateObject.lat.toFixed(3)}, долгота: ${coordinateObject.lng.toFixed(3)}`;
}

const defaultCoordinate = {
  lat: 35.6895,
  lng: 139.69171,
}

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
  let coordinates = evt.target.getLatLng();
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
}

marker
  .addTo(map)
  .bindPopup(
    renderCard(renderObject));

