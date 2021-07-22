const initFilter = (handleFilterReady) => {
  const handleFilterChange = () => {
    let filter = {};
    filter.type = document.querySelector('#housing-type').value;
    filter.price = document.querySelector('#housing-price').value;
    filter.rooms = document.querySelector('#housing-rooms').value;
    filter.guests = document.querySelector('#housing-guests').value;
    filter.isWifi = document.querySelector('#filter-wifi').checked;
    filter.isDishwasher = document.querySelector('#filter-dishwasher').checked;
    filter.isParking = document.querySelector('#filter-parking').checked;
    filter.isWasher = document.querySelector('#filter-washer').checked;
    filter.isElevator = document.querySelector('#filter-elevator').checked;
    filter.isConditioner = document.querySelector('#filter-conditioner').checked;
    handleFilterReady(filter)
  };

  let elementsArray = document.querySelectorAll(".map__filter");

  elementsArray.forEach(function (elem) {
    elem.addEventListener("change", handleFilterChange);
  });

  let elementsArray2 = document.querySelectorAll(".map__checkbox");

  elementsArray2.forEach(function (elem) {
    elem.addEventListener("click", handleFilterChange);
  });


}

export { initFilter };
