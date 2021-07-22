const priceRanges = {
  low: [0, 10000],
  middle: [10000, 50000],
  high: [50000, 1000000],
};

const allSelectFilters = document.querySelectorAll('.map__filter');
const allCheckboxFilters = document.querySelectorAll('.map__checkbox');

const type = document.querySelector('#housing-type');
const price = document.querySelector('#housing-price');

const wifi = document.querySelector('#filter-wifi');

/*
const rooms = document.querySelector('#housing-rooms');
const guests = document.querySelector('#housing-guests');
const isDishwasher = document.querySelector('#filter-dishwasher');
const isParking = document.querySelector('#filter-parking');
const isWasher = document.querySelector('#filter-washer');
const isElevator = document.querySelector('#filter-elevator');
const isConditioner = document.querySelector('#filter-conditioner');
*/


const filterOffers = (offers) => offers.filter(({ offer }) => {
  if (type.value !== 'any' && offer.type !== type.value) {
    return false;
  }
  if (price.value !== 'any') {
    const [from, to] = priceRanges[price.value];
    if (offer.price < from || offer.price > to) {
      return false;
    }
  }
  if (wifi.checked && (!offer.features || !offer.features.includes('wifi'))) {
    return false;
  }

  return true;
});

const initFilter = (onFilterChange) => {
  allSelectFilters.forEach((elem) => {
    elem.addEventListener('change', onFilterChange);
  });
  allCheckboxFilters.forEach( (elem) => {
    elem.addEventListener('change', onFilterChange);
  });
};

/*
const initFilter = (handleFilterReady) => {
  const handleFilterChange = () => {
    let filter = {};
    filter.type = document.querySelector('#housing-type').value;
    filter.price = document.querySelector('#housing-price').value;
    filter.rooms = document.querySelector('#housing-rooms').value;
    filter.guests = document.querySelector('#housing-guests').value;
    filter.isWifi = document.querySelector('#filter-wifi').checked;
    filter.isDishwasher = document.querySelector('#filter-dishwasher').checked;
    filter.isParking = document.querySelector('#filter-parking').checked;
    filter.isWasher = document.querySelector('#filter-washer').checked;
    filter.isElevator = document.querySelector('#filter-elevator').checked;
    filter.isConditioner = document.querySelector('#filter-conditioner').checked;
    handleFilterReady(filter)
  };

  let elementsArray = document.querySelectorAll(".map__filter");

  elementsArray.forEach(function (elem) {
    elem.addEventListener("change", handleFilterChange);
  });

  let elementsArray2 = document.querySelectorAll(".map__checkbox");

  elementsArray2.forEach(function (elem) {
    elem.addEventListener("click", handleFilterChange);
  });
}
*/

export { initFilter, filterOffers };
