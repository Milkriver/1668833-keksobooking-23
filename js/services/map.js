import {renderCard} from './render.js';
import {setAddressValue} from './form.js';

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

const initMap = function(containerId, centerCoordinates, onLoad){
  map = L.map(containerId)
    .on('load', onLoad)
    .setView(centerCoordinates, ZOOM_LEVEL);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);

  markerGroup = L.layerGroup().addTo(map);

  L.marker(
    centerCoordinates,
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

  return map;
};


// const offersCount = getRandomInteger(0, 40);
const renderOffers = (offers) => {
  /*let cards = cardCollection;
  let filtredArray = [];
  for (let i = 0; i < cards.length; i++) {
    let testCard = cards[i];
    // console.log(testCard.offer.type);
    // console.log(filter);
    if (filter.type === testCard.offer.type) {
      // console.log(filter.type);
      filtredArray.push(testCard)
    }
  }*/

  // filtredArray = filtredArray.slice(0, pinsNumber);
  // console.log(filtredArray)
  // cards = cards.slice(0, pinsNumber);

  markerGroup.clearLayers();
  for (let index = 0; index < offers.length; index++) {
    const offer = offers[index];
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
    // console.log(filtredArray);
    // const cleanFilter = function () {
    //   let filtredArray = [];
    //   marker.remove();
    // }
    // filter.addEventListener('change', cleanFilter);
  }
};

export { initMap, renderOffers };
