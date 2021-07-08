const disabledForm = function () {
  const form = document.querySelector('.ad-form');
  form.classList.add('ad-form--disabled');
  const formElements = Array.from(form.querySelectorAll('fieldset'));

  for (let index = 0; index < formElements.length; index++) {
    const element = formElements[index];
    element.disabled = true;
  }
}

export { disabledForm }
