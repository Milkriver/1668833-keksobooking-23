import { renderCard } from './render.js';
import { setAddressValue } from './form.js';

const ZOOM_LEVEL = 14;
let map = null;
let markerGroup = null;

const pinIcon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const updateView = (coordinates) => {
  map.setView(coordinates, ZOOM_LEVEL);
};

const resetMainMarker = (coordinates) => {
  L.marker(
    coordinates,
    {
      draggable: true,
      icon: mainPinIcon,
    },
  )
    .addTo(map)
    .bindPopup('Главная точка')
    .on('moveend', (evt) => {
      setAddressValue(evt.target.getLatLng());
    });
};

const initMap = function (containerId, centerCoordinates, onLoad) {
  map = L.map(containerId);

  if (onLoad !== undefined) {
    map.on('load', onLoad);
  }

  updateView(centerCoordinates);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);

  markerGroup = L.layerGroup().addTo(map);

  resetMainMarker(centerCoordinates);
  return map;
};

const renderOffers = (offers) => {
  markerGroup.clearLayers();
  offers.forEach((offer) => {
    const marker = L.marker({
      lat: offer.location.lat,
      lng: offer.location.lng,
    }, {
      icon: pinIcon,
    });

    marker
      .addTo(markerGroup)
      .bindPopup(
        renderCard({
          offer: offer.offer,
          author: offer.author,
        }),
        {
          keepInView: true,
        },
      );
  });
};

export { initMap, renderOffers, updateView, resetMainMarker };
