const setFormState = function (formState) {

  const form = document.querySelector('.ad-form');
  const formElements = Array.from(form.querySelectorAll('fieldset'));
  const filter = document.querySelector('.map__filters');
  const filterSelectElements = Array.from(filter.querySelectorAll('select'));
  const filterFieldsetElements = Array.from(filter.querySelectorAll('fieldset'));
  const filterElements = filterSelectElements.concat(filterFieldsetElements);
  for (let index = 0; index < formElements.length; index++) {
    const element = formElements[index];
    element.disabled = formState;
  }

  for (let index = 0; index < filterElements.length; index++) {
    const element = filterElements[index];
    element.disabled = formState;
  }
  if (formState === true) {
    form.classList.add('ad-form--disabled');
    filter.classList.add('map__filters--disabled');
  } else {
    form.classList.remove('ad-form--disabled');
    filter.classList.remove('map__filters--disabled');
  }
};

export { setFormState };
