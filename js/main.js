import { getRandomCards } from './data.js';
import { renderCard } from './services/render.js';
import { activateForm, deactivateForm, validateGuests } from './services/form.js';
const cards = getRandomCards();
const card = cards[0];
renderCard(card);
deactivateForm(true);
setTimeout(activateForm, 1000, false);
validateGuests();

const map = L.map('map-canvas')
.on('load', () => {
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

const marker = L.marker(
  {
    lat: 35.6895,
    lng: 139.69171,
  },
  {
    draggable: true,
  },
);

marker
.addTo(map);

marker.on('moveend', (evt) => {
  console.log(evt.target.getLatLng());
});

