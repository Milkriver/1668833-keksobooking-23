const priceRanges = {
  low: [0, 10000],
  middle: [10000, 50000],
  high: [50000, 1000000],
};

const allSelectFilters = document.querySelectorAll('.map__filter');
const allCheckboxFilters = document.querySelectorAll('.map__checkbox');
const rooms = document.querySelector('#housing-rooms');
const guests = document.querySelector('#housing-guests');
const type = document.querySelector('#housing-type');
const price = document.querySelector('#housing-price');
const offerFeatures = Array.from(document.querySelectorAll('.map__checkbox'));

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

  const isEveryFeatureMatches = offerFeatures.every(offerFeature => {
    if (offerFeature.checked && (!offer.features || !offer.features.includes(offerFeature.value))) {
      return false;
    }
    return true;
  });

  if(!isEveryFeatureMatches) {
    return false;
  }

  if (rooms.value !== 'any' && offer.rooms !== Number(rooms.value)) {
    return false;
  }
  if (guests.value !== 'any' && offer.guests !== Number(guests.value)) {
    return false;
  }
  return true;
});

const initFilter = (onFilterChange) => {
  allSelectFilters.forEach((elem) => {
    elem.addEventListener('change', onFilterChange);
  });
  allCheckboxFilters.forEach((elem) => {
    elem.addEventListener('change', onFilterChange);
  });
};

export { initFilter, filterOffers };
