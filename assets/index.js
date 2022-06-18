import Swiper from 'swiper/swiper-bundle.js';

export function sliderr(){
  const swiper = new Swiper(".mySwiper", {
    loop: true,
    slidesPerView: 5,
    spaceBetween: 10,
    freeMode: true,
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
  });
  const swiper2 = new Swiper(".mySwiper2", {
    loop: true,
    slidesPerView: 1,
    slidesPerGroup: 1,
    loopFillGroupWithBlank: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    thumbs: {
      swiper: swiper,
    },
  });

  return {swiper, swiper2}
}


export function scroll() {
  let scrollpos = window.scrollY
  const header = document.getElementById("header")
  const header_height = header.offsetHeight


  const add_class_on_scroll = () => header.classList.add("fixed")
  const remove_class_on_scroll = () => header.classList.remove("fixed")


  window.addEventListener('scroll', function() {
    scrollpos = window.scrollY

    if (scrollpos >= header_height) { add_class_on_scroll() }
    else { remove_class_on_scroll() }


  })




};
