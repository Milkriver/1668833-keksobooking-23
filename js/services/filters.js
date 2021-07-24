const priceRanges = {
  low: [0, 10000],
  middle: [10000, 50000],
  high: [50000, 1000000],
};

const allSelectFilters = document.querySelectorAll('.map__filter');
const allCheckboxFilters = document.querySelectorAll('.map__checkbox');
const roomsElement = document.querySelector('#housing-rooms');
const guestsElement = document.querySelector('#housing-guests');
const typeElement = document.querySelector('#housing-type');
const priceElement = document.querySelector('#housing-price');
const featureElements = Array.from(document.querySelectorAll('.map__checkbox'));
let onFilterChange = null;

const isTypeMatch = (type) => {
  if (typeElement.value !== 'any' && type !== typeElement.value) {
    return false;
  }

  return true;
};

const isPriceMatch = (price) => {
  if (priceElement.value !== 'any') {
    const [from, to] = priceRanges[priceElement.value];
    if (price < from || price > to) {
      return false;
    }
  }

  return true;
};

const isFeatureMatches = (features) => featureElements.every((featureElement) => {
  if (featureElement.checked && (!features || !features.includes(featureElement.value))) {
    return false;
  }
  return true;
});

const isRoomMatch = (rooms) => {
  if (roomsElement.value !== 'any' && rooms !== Number(roomsElement.value)) {
    return false;
  }

  return true;
};

const isGuestMatch = (guests) => {
  if (guestsElement.value !== 'any' && guests !== Number(guestsElement.value)) {
    return false;
  }

  return true;
};

const filterOffers = (offers) => offers.filter(({ offer }) => {
  const { type, price, features, rooms, guests } = offer;
  return isTypeMatch(type)
    && isPriceMatch(price)
    && isFeatureMatches(features)
    && isRoomMatch(rooms)
    && isGuestMatch(guests);
});

const initFilter = (onFilterExternalChange) => {
  allSelectFilters.forEach((elem) => {
    elem.addEventListener('change', onFilterExternalChange);
  });
  allCheckboxFilters.forEach((elem) => {
    elem.addEventListener('change', onFilterExternalChange);
  });
  onFilterChange = onFilterExternalChange;
};

const resetFilter = () => {
  allSelectFilters.forEach((elem) => {
    elem.value = 'any';
  });
  allCheckboxFilters.forEach((elem) => {
    elem.checked = false;
  });

  if (onFilterChange) {
    onFilterChange();
  }
};

export { initFilter, filterOffers, resetFilter };
