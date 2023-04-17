const basketLink = document.querySelectorAll('.goods__btn-buy');
const basketPopup = document.querySelector('.modal-basket');
const basketClose = basketPopup.querySelector('.modal-close-basket');

for (var i = 0; i < basketLink.length; i++) {
    basketLink[i].addEventListener('click', function(evt) {
        evt.preventDefault();
        basketPopup.classList.add('modal-show');
    });
}
basketClose.addEventListener('click', function(evt) {
    evt.preventDefault();
    basketPopup.classList.remove('modal-show');
});

window.addEventListener('keydown', function(evt) {
    if (evt.keyCode === 27) {
        if (basketPopup.classList.contains('modal-show')) {
            evt.preventDefault();
            basketPopup.classList.remove('modal-show');
        }
    }
});
