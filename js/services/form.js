const form = document.querySelector('.ad-form');
const formElements = Array.from(form.querySelectorAll('fieldset'));
const filter = document.querySelector('.map__filters');
const filterSelectElements = Array.from(filter.querySelectorAll('select'));
const filterFieldsetElements = Array.from(filter.querySelectorAll('fieldset'));
const filterElements = filterSelectElements.concat(filterFieldsetElements);
const appartmentPrice = document.querySelector('#price');
const appartmentType = document.querySelector('#type');

const apartmentTypesMinPrice = {
  'bungalow': '0',
  'flat': '1000',
  'hotel': '3000',
  'house': '5000',
  'palace': '10000',
};

const onMinPriceChange = () => {
  const minPrice = apartmentTypesMinPrice[appartmentType.value];
  appartmentPrice.min = minPrice;
  appartmentPrice.placeholder = minPrice;
};
appartmentType.addEventListener('change', onMinPriceChange);

const activateForm = () => {
  onMinPriceChange();
  formElements.forEach((element) => {
    element.disabled = false;
  });
  filterElements.forEach((element) => {
    element.disabled = false;
  });
  form.classList.remove('ad-form--disabled');
  filter.classList.remove('map__filters--disabled');
};

const deactivateForm = () => {
  formElements.forEach((element) => {
    element.disabled = true;
  });
  filterElements.forEach((element) => {
    element.disabled = true;
  });
  form.classList.add('ad-form--disabled');
  filter.classList.add('map__filters--disabled');
};

const roomNumberSelect = form.querySelector('#room_number');
const capacitySelect = form.querySelector('#capacity');

const timein = form.querySelector('#timein');
const timeout = form.querySelector('#timeout');

timein.addEventListener('change', () => {
  timeout.value = timein.value;
});

timeout.addEventListener('change', () => {
  timein.value = timeout.value;
});

const capacityNotForGuests = capacitySelect.querySelector('option[value="0"]');
const capacity1Guests = capacitySelect.querySelector('option[value="1"]');
const capacity2Guests = capacitySelect.querySelector('option[value="2"]');
const capacity3Guests = capacitySelect.querySelector('option[value="3"]');

const disableCapacityOptions = () => {
  capacityNotForGuests.disabled = true;
  capacity1Guests.disabled = true;
  capacity2Guests.disabled = true;
  capacity3Guests.disabled = true;
};

const validation = {
  1: () => {
    capacity1Guests.disabled = false;
    capacity1Guests.selected = true;
  },
  2: () => {
    capacity1Guests.disabled = false;
    capacity2Guests.disabled = false;
    capacity1Guests.selected = true;
  },
  3: () => {
    capacity1Guests.disabled = false;
    capacity2Guests.disabled = false;
    capacity3Guests.disabled = false;
    capacity1Guests.selected = true;
  },
  100: () => {
    capacityNotForGuests.disabled = false;
    capacityNotForGuests.selected = true;
  },
};

const onGuestsValidate = () => {
  const selectedOption = roomNumberSelect.options[roomNumberSelect.selectedIndex];
  disableCapacityOptions();
  validation[selectedOption.value]();
};

roomNumberSelect.addEventListener('change', onGuestsValidate);

const setAddressValue = (coordinateObject) => {
  const address = document.querySelector('#address');
  address.value =
    `Широта: ${coordinateObject.lat.toFixed(5)}, долгота: ${coordinateObject.lng.toFixed(5)}`;
  address.setAttribute('readonly', 'readonly');
};

const resetForm = () => {
  onGuestsValidate();
  const avatarImage = document.querySelector('.ad-form-header__preview > img');
  if (avatarImage !== undefined && avatarImage.src.startsWith('blob:')) {
    avatarImage.src = 'img/muffin-grey.svg';
    avatarImage.width = 40;
    avatarImage.height = 44;
  }

  const photoImage = document.querySelector('.ad-form__photo > img');
  if (photoImage !== undefined) {
    photoImage.remove();
  }
};

export { activateForm, deactivateForm, onGuestsValidate, setAddressValue, resetForm };
