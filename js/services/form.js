const form = document.querySelector('.ad-form');
const formElements = Array.from(form.querySelectorAll('fieldset'));
const filter = document.querySelector('.map__filters');
const filterSelectElements = Array.from(filter.querySelectorAll('select'));
const filterFieldsetElements = Array.from(filter.querySelectorAll('fieldset'));
const filterElements = filterSelectElements.concat(filterFieldsetElements);

const activateForm = () => {
  formElements.forEach((element) => {
    element.disabled = false;
  });
  filterElements.forEach((element) => {
    element.disabled = false;
  });
  form.classList.remove('ad-form--disabled');
  filter.classList.remove('map__filters--disabled');
}

const deactivateForm = () => {
  formElements.forEach((element) => {
    element.disabled = true;
  });
  filterElements.forEach((element) => {
    element.disabled = true;
  });
  form.classList.add('ad-form--disabled');
  filter.classList.add('map__filters--disabled');
}

export { activateForm, deactivateForm };
