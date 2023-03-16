const carouselList = document.querySelector('[data-element="slider"]');
const carouseItem = document.querySelectorAll('[data-element="slider-item"]');
const prevToggle = document.querySelector('[data-element="prev"]');
const nextToggle = document.querySelector('[data-element="next"]');

const getCarousel = () => {
  //let widthMobile = 226;
  let width = 620;
  let position = 0;
  let countItems = Object.keys(carouseItem).length;

  /*const breakpoint = window.matchMedia('(max-width:767px)');
  const breakpointChecker = () => {
    if (breakpoint.matches) {
      prevToggle.onclick = function () {
        position += widthMobile;
        position = Math.min(position, 0);
        carouselList.style.marginLeft = position + 'px';
      };

      nextToggle.onclick = function () {
        position -= widthMobile;
        position = Math.max(position, -widthMobile * (countItems - 1));
        carouselList.style.marginLeft = position + 'px';
      };

      swipedetect(carouselList, function (swipedir) {
        if (swipedir === 'left' || swipedir === 'right') {
          if (swipedir === 'left') {
            position -= widthMobile;
            position = Math.max(position, -widthMobile * (countItems - 1));
            carouselList.style.marginLeft = position + 'px';
          } else if (swipedir === 'right') {
            position += widthMobile;
            position = Math.min(position, 0);
            carouselList.style.marginLeft = position + 'px';
          }
        }
      });
    } else {
      prevToggle.onclick = function () {
        position += width;
        position = Math.min(position, 0);
        carouselList.style.marginLeft = position + 'px';
      };

      nextToggle.onclick = function () {
        position -= width;
        position = Math.max(position, -width * (countItems - 1));
        carouselList.style.marginLeft = position + 'px';
      };
    }
  };*/


  nextToggle.addEventListener('click', function () {
    position -= width;
    position = Math.max(position, -width * (countItems - 1));
    carouselList.style.marginLeft = position + 'px';
  });

  prevToggle.addEventListener('click', function () {
    position += width;
    position = Math.min(position, 0);
    carouselList.style.marginLeft = position + 'px';
  });

  //breakpoint.addListener(breakpointChecker);
  //breakpointChecker();
};

getCarousel();
