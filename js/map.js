const mapLink = document.querySelector('.contacts__map');
const mapPopup = document.querySelector('.modal-map');
const mapClose = mapPopup.querySelector('.modal-map__close-map');

mapLink.addEventListener('click', function(evt) {
  evt.preventDefault();
  mapPopup.classList.add('is-open');
});

mapClose.addEventListener('click', function(evt) {
  evt.preventDefault();
  mapPopup.classList.remove('is-open');
});

window.addEventListener('keydown', function(evt) {
    if (evt.keyCode === 27) {
      if (mapPopup.classList.contains('is-open')) {
          evt.preventDefault();
          mapPopup.classList.remove('is-open');
      }
    }
});
