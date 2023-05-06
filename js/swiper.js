const settings = {
  default: {
    slidesPerView: 1.2,
    // loop: true,
    spaceBetween: 15,
    breakpoints: {
      480: {
        slidesPerView: 1.5,
        spaceBetween: 20,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2.5,
        spaceBetween: 10,
      },
      1025: {
        slidesPerView: 3,
        spaceBetween: 25,
      },
      1100: {
        slidesPerView: 3.5,
        spaceBetween: 15,
      },
     
    },
  },
};

document.querySelectorAll(".swiper").forEach((swiperSlider) => {
  const settingsKey = swiperSlider.getAttribute("data-swiper");
  const parentElement = swiperSlider.hasAttribute("data-swiper-parent")
    ? document.querySelector(swiperSlider.getAttribute("data-swiper-parent"))
    : swiperSlider.parentElement;
  const prev = parentElement.querySelector(".swiper-arrow-prev");
  const next = parentElement.querySelector(".swiper-arrow-next");
  const dots = parentElement.querySelector(".swiper-dots");

  console.log("parentElement");
  console.log(parentElement);
  new Swiper(swiperSlider, {
    ...settings[settingsKey],
    // // If we need pagination
    // pagination: {
    //   el: ".swiper-pagination",
    // },

    // // Navigation arrows
    navigation:
      next && prev
        ? {
            nextEl: next,
            prevEl: prev,
          }
        : {},

    pagination: dots
      ? {
          el: dots,
          clickable: true,
        }
      : {},
  });
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  grid: {
    rows: 2,
  },
  spaceBetween: 30,
});
