const getData = (onSuccess, onError) => {
  const data = fetch('https://23.javascript.pages.academy/keksobooking/data')
    .then((response) => {
      if (response.ok) {
        return response;
      }
      console.log('Сервер недоступен. Повторите запрос', json)
    })
    .then((response) => response.json())
    .then((json) => {
      console.log(json)
      console.log(json.length)
      onSuccess(json);
    })
    .catch((err) => {
      onError(err);
    });

    return data;
};

export {getData};


