(function () {
  function initPricesCarousel() {
    if (typeof Swiper === "undefined") {
      return;
    }

    var pricesCarousel = document.querySelector(".prices-carousel");
    var pricesSwiperEl = document.querySelector(".prices-swiper");

    if (!pricesSwiperEl || !pricesCarousel) {
      return;
    }

    var counterCurrent = pricesCarousel.querySelector(".prices-carousel__current");
    var counterTotal = pricesCarousel.querySelector(".prices-carousel__total");
    var slideCount = pricesSwiperEl.querySelectorAll(".swiper-slide").length;

    if (counterTotal) {
      counterTotal.textContent = slideCount;
    }

    function updateCounter(swiper) {
      if (counterCurrent) {
        counterCurrent.textContent = swiper.realIndex + 1;
      }
    }

    new Swiper(pricesSwiperEl, {
      slidesPerView: 1,
      loop: slideCount > 1,
      speed: 500,
      spaceBetween: 16,
      grabCursor: true,
      watchOverflow: true,
      navigation: {
        nextEl: ".prices-carousel__arrow--next",
        prevEl: ".prices-carousel__arrow--prev",
      },
      pagination: {
        el: pricesCarousel.querySelector(".prices-carousel__dots"),
        clickable: true,
      },
      on: {
        init: updateCounter,
        slideChange: updateCounter,
      },
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initPricesCarousel);
  } else {
    initPricesCarousel();
  }
})();
