import { formUrl, offersUrl } from '../variables.js';

const sendData = (onSuccess, onFail, formElem) => {
  const options = {
    method: "POST",
    body: new FormData(formElem)
  }

  doFetch(formUrl, options)
    .then((json) => {
      onSuccess(json);
    })
    .catch((err) => {
      onFail(err);
    })
};

const getData = (onSuccess, onFail) => {
  doFetch(offersUrl)
    .then((json) => {
      onSuccess(json);
    })
    .catch((err) => {
      onFail(err);
    })
};

const doFetch = (url, options) =>
  fetch(url, options)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }

      throw new Error(`${response.status} ${response.statusText}`);
    });

export { sendData, getData };
