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
