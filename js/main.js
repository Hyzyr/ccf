var menu = document.getElementById("menu");
var menuBtn = document.getElementById("menuBtn");
const header = document.getElementById("header");
var body = document.body;

const closeMenu = () => {
  menu.classList.remove("active");
  menuBtn.classList.remove("active");
  body.classList.remove("active");
  header.classList.remove("active");
};

menuBtn.onclick = function () {
  menu.classList.toggle("active");
  menuBtn.classList.toggle("active");
  body.classList.toggle("active");
  header.classList.toggle("active");
};
window.onclick = function (event) {
  if (event.target == menu) {
    closeMenu();
  }
};

// if (header)
//   window.addEventListener("scroll", () => {
//     if (document.documentElement.scrollTop > 400) {
//       header.classList.add("sticky");
//     } else {
//       header.classList.remove("sticky");
//     }
//   });
///
///
/// slick slider

///
///
/// tabEvents
const toggleBody = (isClosed) => {
  if (isClosed) {
    document.body.classList.add("active");
    if (menu) closeMenu();
  } else {
    document.body.classList.remove("active");
  }
};

///
///
/// tabEvents
const tabs = ({ selector, onChange }) => {
  const tabItems = document.querySelectorAll(selector);
  tabItems.forEach((eventBtn) => {
    const tab = document.querySelector(eventBtn.getAttribute("data-tab"));

    eventBtn.onclick = (e) => {
      if (!eventBtn.classList.contains("active") && onChange)
        onChange(eventBtn);
      tabItems.forEach((item) => {
        item.classList.remove("active");

        if (tab) {
          const itemTab = document.querySelector(
            eventBtn.getAttribute("data-tab")
          );
          itemTab.classList.remove("active");
        }
      });

      eventBtn.classList.add("active");
      if (tab) tab.classList.add("active");
    };
  });
};

tabs({
  selector: `#sliderTabs  .tabs__item`,
  onChange: (tabItem) => {
    const swiper = document.querySelector(`#slider`);
    const sliderItems = swiper.querySelectorAll(`.slider__item`);
    const filter = tabItem.getAttribute("data-filter");
    swiper.swiper.destroy(true);

    sliderItems.forEach((sliderItem) => {
      const itemCategory = sliderItem.getAttribute("data-filter");
      let isActive = filter === "Todos" || itemCategory === filter;
      if (!isActive) sliderItem.setAttribute("hidden", "");
      else sliderItem.removeAttribute("hidden");
    });

    initSwiper(swiper);
    swiper.swiper.slideTo(0);
  },
});

tabs({
  selector: ".footer__tab-title",
  onChange: (tabItem) => {
    document.querySelectorAll(".footer__tab").forEach((item) => {
      item.classList.remove("active");
      if (item.contains(tabItem)) item.classList.add("active");
    });
  },
});
