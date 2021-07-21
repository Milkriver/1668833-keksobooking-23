const initFilter = () => {
  let filter = {};

  const handleFilterChange = () => {
    filter.type = document.querySelector('#housing-type').value;
    filter.price = document.querySelector('#housing-price').value;
    filter.rooms = document.querySelector('#housing-rooms').value;
    filter.guests = document.querySelector('#housing-guests').value;
    filter.isWifi = document.querySelector('#filter-wifi').checked;
    console.log(filter)
  };

  let elementsArray = document.querySelectorAll(".map__filter");

  elementsArray.forEach(function (elem) {
    elem.addEventListener("change", handleFilterChange);
  });

  let elementsArray2 = document.querySelectorAll(".map__checkbox");

  elementsArray2.forEach(function (elem) {
    elem.addEventListener("click", handleFilterChange);
  });

  return filter;
}

export { initFilter };
