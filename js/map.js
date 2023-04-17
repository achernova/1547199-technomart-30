const openMap = document.querySelector('[data-element="map"]');
const mapPopup = document.querySelector('[data-element="modal-map"]');
const mapClose = mapPopup.querySelector('[data-element="close-window-map"]');
const modalOverlayMap = document.querySelector('.modal-overlay-map');

openMap.addEventListener('click', function (evt) {
  evt.preventDefault();
  mapPopup.classList.add('is-open');
  modalOverlayMap.classList.add('is-opened')
});

mapClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove('is-open');
  modalOverlayMap.classList.remove('is-opened')
});

modalOverlayMap.addEventListener('click', function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove('is-open');
  modalOverlayMap.classList.remove('is-opened')
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains('is-open')) {
      evt.preventDefault();
      mapPopup.classList.remove('in-open');
    }
  }
});
