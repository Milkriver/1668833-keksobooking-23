const zoomLevel = 10;
const initMap = function(coordinate, containerId, onLoad){
  const map = L.map(containerId)
    .on('load', onLoad)
    .setView(coordinate, zoomLevel);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);

  return map;
};

export { initMap };
