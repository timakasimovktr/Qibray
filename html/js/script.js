// (function(){
//   'use strict';

//   class Menu {
//     constructor(settings) {
//       this.nodeMenu = settings.nodeMenu;
//       settings.nodeMenuButton.addEventListener('click', this.toggle.bind(this));
//     }

//     toggle() {
//       return this.nodeMenu.classList.toggle('js-menu_activated');
//     }
//   }

//   let nodeMenu = document.querySelector('body');

//   new Menu({
//     nodeMenu: nodeMenu,
//     nodeMenuButton: nodeMenu.querySelector('.js-menu__toggle')
//   });
// })();

const swiper = new Swiper(".swiper-container", {
  // Optional parameters
  // cssMode: true,
  spaceBetween: 100,
  loop: true,
  effect: "fade",
  speed: 2000,
  // autoplay: {
  //   delay: 8000,
  //   disableOnInteraction: false,
  // },
  direction: "horizontal",

  // If we need pagination

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

(function () {
  const LANG_KEY = "qibray-lang";
  let currentLang = localStorage.getItem(LANG_KEY) || "ru";

  function applyLang(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    localStorage.setItem(LANG_KEY, lang);

    document.querySelectorAll("[data-ru][data-uz]").forEach(function (el) {
      el.textContent = el.getAttribute("data-" + lang);
    });

    var langBtn = document.querySelector(".lang");
    if (langBtn) {
      langBtn.textContent = langBtn.getAttribute("data-" + lang) || lang;
      langBtn.classList.toggle("is-active", lang === "ru");
    }
  }

  var langBtn = document.querySelector(".lang");
  if (langBtn) {
    langBtn.addEventListener("click", function (e) {
      e.preventDefault();
      applyLang(currentLang === "ru" ? "uz" : "ru");
    });
  }

  applyLang(currentLang);

  var pricesSwiperEl = document.querySelector(".prices-swiper");
  if (pricesSwiperEl && typeof Swiper !== "undefined") {
    var counterCurrent = document.querySelector(".prices-carousel__current");
    var counterTotal = document.querySelector(".prices-carousel__total");
    var slideCount = pricesSwiperEl.querySelectorAll(".swiper-slide").length;

    if (counterTotal) {
      counterTotal.textContent = slideCount;
    }

    new Swiper(".prices-swiper", {
      loop: slideCount > 1,
      speed: 600,
      spaceBetween: 24,
      navigation: {
        nextEl: ".prices-carousel__arrow--next",
        prevEl: ".prices-carousel__arrow--prev",
      },
      pagination: {
        el: ".prices-carousel__dots",
        clickable: true,
      },
      on: {
        init: function () {
          if (counterCurrent) {
            counterCurrent.textContent = this.realIndex + 1;
          }
        },
        slideChange: function () {
          if (counterCurrent) {
            counterCurrent.textContent = this.realIndex + 1;
          }
        },
      },
    });
  }
})();

$(".galery_item", this).click(function () {
  var src = jQuery(".galery_item", this).children("img").attr("src");
  console.log(src);
});

Fancybox.bind('[data-fancybox="gallery"]', {
  Thumbs: {
    Carousel: {
      fill: false,
      center: true,
    },
  },
});


// Initialise Carousel
const mainCarousel = new Carousel(document.querySelector("#mainCarousel"), {
  Dots: false,
});

// Thumbnails
const thumbCarousel = new Carousel(document.querySelector("#thumbCarousel"), {
  Sync: {
    target: mainCarousel,
    friction: 0,
  },
  Dots: false,
  Navigation: false,
  center: true,
  slidesPerPage: 1,
  infinite: false,
});

// Customize Fancybox
Fancybox.bind('[data-fancybox="gallery"]', {
  Carousel: {
    on: {
      change: (that) => {
        mainCarousel.slideTo(mainCarousel.findPageForSlide(that.page), {
          friction: 0,
        });
      },
    },
  },
});

// $(".hamburger__button").click(function () {
//   $(this).css("margin-bottom", "100px");
// })




