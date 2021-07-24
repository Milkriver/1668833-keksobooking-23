import { KEYBOARD_KEYS } from '../variables.js';
import { renderFail, renderSuccess } from './render.js';

const showDialog = (dialogElement) => {
  const onDialogClose = (evt) => {
    if (evt.type === 'click' || (evt.type === 'keydown' && evt.key === KEYBOARD_KEYS.Esc)) {
      dialogElement.remove();
      document.removeEventListener('keydown', onDialogClose);
    }
  };
  document.addEventListener('keydown', onDialogClose);
  dialogElement.addEventListener('click', onDialogClose);
  document.querySelector('body').append(dialogElement);
};

const showSuccessDialog = () => {
  const successElement = renderSuccess();
  showDialog(successElement);
};

const showErrorDialog = (message) => {
  const failElement = renderFail(message);
  showDialog(failElement);
};

export { showSuccessDialog, showErrorDialog };
