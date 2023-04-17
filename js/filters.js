const details = document.querySelector('[data-element="form-filter"]');
const buttonDetails = document.querySelector('[data-element="show-form"]');


const getFilter = () => {
  buttonDetails.addEventListener('click', function () {
    if (details.classList.contains('is-closed')) {
      details.classList.remove('is-closed');
    } else {
      details.classList.add('is-closed');
    }
    buttonDetails.textContent = buttonDetails.textContent === 'Показать фильтр' ? 'Свернуть фильтр' : 'Показать фильтр';
  }, {passive: true});
};

getFilter();
