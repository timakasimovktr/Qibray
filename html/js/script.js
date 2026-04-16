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
