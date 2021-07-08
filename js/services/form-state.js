const disabledForm = function () {
  const form = document.querySelector('.ad-form');
  form.classList.add('ad-form--disabled');
  const formElements = Array.from(form.querySelectorAll('fieldset'));

  for (let index = 0; index < formElements.length; index++) {
    const element = formElements[index];
    element.disabled = true;
  }

  const filter = document.querySelector('.map__filters');
  filter.classList.add('map__filters--disabled');
  const filterSelectElements = Array.from(filter.querySelectorAll('select'));
  const filterFieldsetElements = Array.from(filter.querySelectorAll('fieldset'));
  const filterElements = filterSelectElements.concat(filterFieldsetElements);
  for (let index = 0; index < filterElements.length; index++) {
    const element = filterElements[index];
    element.disabled = true;
  }
}

export { disabledForm }
