const settings = {
  construction: {
    loop: false,
    slidesPerView: 1.2,
    // slidesPerGroup: 2,
    // slidesPerGroupSkip: 2,
    spaceBetween: 5,
    breakpoints: {
      460: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 2.5,
        spaceBetween: 10,
      },
      840: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1160: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
    },
  },
  electrical: {
    loop: false,
    slidesPerView: 1.2,
    spaceBetween: 5,
    breakpoints: {
      460: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 2.5,
        spaceBetween: 10,
      },
      840: {
        slidesPerView: 3,
        spaceBetween: 5,
      },
      1160: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
    },
  },
  feedbacks: {
    loop: true,
    centeredSlides: true,
    watchSlidesProgress: true,
    watchOverflow: true,
    slidesPerView: 1.2,
    spaceBetween: 5,
    breakpoints: {
      480: {
        slidesPerView: 1.5,
        spaceBetween: 0,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 2.5,
        spaceBetween: 10,
      },
      940: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
      1025: {
        slidesPerView: 3,
        spaceBetween: 5,
      },
      1280: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
    },
  },
  projects: {
    slidesPerView: 1,
    // loop: true,
    spaceBetween: 0,
    grid: {
      rows: 2,
    },
    breakpoints: {
      480: {
        slidesPerView: 1.5,
        spaceBetween: 0,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 2.5,
        spaceBetween: 10,
      },
      940: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
      1025: {
        slidesPerView: 3,
        spaceBetween: 5,
      },
      1280: {
        slidesPerView: 3,
        spaceBetween: 10,
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