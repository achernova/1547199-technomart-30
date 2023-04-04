const formLink = document.querySelector('[data-element="form"]');
const formPopup = document.querySelector('[data-element="modal-window"]');
const formClose = formPopup.querySelector('[data-element="close-window"]');
const modalOverlay = document.querySelector('.modal-overlay');

formLink.addEventListener('click', function (evt) {
  evt.preventDefault();
  formPopup.classList.add('is-open');
  modalOverlay.classList.add('is-opened')
});

formClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  formPopup.classList.remove('is-open');
  modalOverlay.classList.remove('is-opened')
});

modalOverlay.addEventListener('click', function (evt) {
  evt.preventDefault();
  formPopup.classList.remove('is-open');
  modalOverlay.classList.remove('is-opened')
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (formPopup.classList.contains('is-open')) {
      evt.preventDefault();
      formPopup.classList.remove('in-open');
    }
  }
});




