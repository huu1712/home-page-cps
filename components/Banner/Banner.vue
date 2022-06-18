<template>
  <div id="banner">
    <div class="banner--container">
      <div class="category--banner">
        <ul class="category--banner__list">
          <li class="category--banner__link">
            <i class="category--icon" :style="{ backgroundImage: `url(${backgroundUrl})` }"></i>
            <a href="">Điện thoại</a>
            <div class="icon--right">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path
                  d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"></path>
              </svg>
            </div>
          </li>
          <li class="category--banner__link">
            <i class="category--icon" :style="{ backgroundImage: `url(${backgroundUrl1})` }"></i>
            <a href="">Laptop</a>
            <div class="icon--right">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path
                  d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"></path>
              </svg>
            </div>
          </li>
          <li class="category--banner__link">
            <i class="category--icon" :style="{ backgroundImage: `url(${backgroundUrl2})` }"></i>
            <a href="">Máy tính bảng</a>
            <div class="icon--right">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path
                  d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"></path>
              </svg>
            </div>
          </li>
          <li class="category--banner__link">
            <i class="category--icon" :style="{ backgroundImage: `url(${backgroundUrl3})` }"></i>
            <a href="">Âm thanh</a>
            <div class="icon--right">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path
                  d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"></path>
              </svg>
            </div>
          </li>
          <li class="category--banner__link">
            <i class="category--icon" :style="{ backgroundImage: `url(${backgroundUrl4})` }"></i>
            <a href="">Đồng hồ</a>
            <div class="icon--right">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path
                  d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"></path>
              </svg>
            </div>
          </li>
          <li class="category--banner__link">
            <i class="category--icon" :style="{ backgroundImage: `url(${backgroundUrl5})` }"></i>
            <a href="">Nhà thông minh</a>
            <div class="icon--right">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path
                  d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"></path>
              </svg>
            </div>
          </li>
          <li class="category--banner__link">
            <i class="category--icon" :style="{ backgroundImage: `url(${backgroundUrl6})` }"></i>
            <a href="">Phụ kiện</a>
            <div class="icon--right">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path
                  d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"></path>
              </svg>
            </div>
          </li>
          <li class="category--banner__link">
            <i class="category--icon" :style="{ backgroundImage: `url(${backgroundUrl7})` }"></i>
            <a href="">PC - Màn hình</a>
            <div class="icon--right">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path
                  d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"></path>
              </svg>
            </div>
          </li>
          <li class="category--banner__link">
            <i class="category--icon" :style="{ backgroundImage: `url(${backgroundUrl5})` }"></i>
            <a href="">Tivi</a>
            <div class="icon--right">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path
                  d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"></path>
              </svg>
            </div>
          </li>
          <li class="category--banner__link">
            <i class="category--icon" :style="{ backgroundImage: `url(${backgroundUrl8})` }"></i>
            <a href="">Thu cũ</a>
            <div class="icon--right">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path
                  d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"></path>
              </svg>
            </div>
          </li>
          <li class="category--banner__link">
            <i class="category--icon" :style="{ backgroundImage: `url(${backgroundUrl9})` }"></i>
            <a href="">Hàng cũ</a>
            <div class="icon--right">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path
                  d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"></path>
              </svg>
            </div>
          </li>
          <li class="category--banner__link">
            <i class="category--icon" :style="{ backgroundImage: `url(${backgroundUrl10})` }"></i>
            <a href="">Khuyến mãi</a>
            <div class="icon--right">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path
                  d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"></path>
              </svg>
            </div>
          </li>
        </ul>
      </div>
        <div class="main-banner__wrapper slider--banner">
          <div class="swiper mySwiper2">
            <div class="main-banner__slidding swiper-wrapper">
              <div class="main-banner__slidding-item swiper-slide">
                <img src="https://github.com/huu1712/page-cps/blob/main/assets/image/banner1.jpg?raw=true" alt="" />
              </div>
              <div class="main-banner__slidding-item swiper-slide">
                <img src="https://github.com/huu1712/page-cps/blob/main/assets/image/banner2.jpg?raw=true" alt="" />
              </div>
              <div class="main-banner__slidding-item swiper-slide">
                <img src="https://github.com/huu1712/page-cps/blob/main/assets/image/banner3.jpg?raw=true" alt="" />
              </div>
              <div class="main-banner__slidding-item swiper-slide">
                <img src="https://github.com/huu1712/page-cps/blob/main/assets/image/banner4.jpg?raw=true" alt="" />
              </div>
              <div class="main-banner__slidding-item swiper-slide">
                <img src="https://github.com/huu1712/page-cps/blob/main/assets/image/banner5.jpg?raw=true" alt="" />
              </div>
              <div class="main-banner__slidding-item swiper-slide">
                <img src="https://github.com/huu1712/page-cps/blob/main/assets/image/banner6.jpg?raw=true" alt="" />
              </div>
            </div>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
          </div>
          <div thumbsSlider="" class="swiper mySwiper main-banner__navigation">
            <div class="swiper-wrapper">
              <div class="main-banner__navigation-item swiper-slide active">
                <p>GALAXY TAB S7 PLUS<br />Sale sập sàn</p>
              </div>
              <div class="main-banner__navigation-item swiper-slide">
                <p>IMAC M1 2021<br />Deal tốt chốt ngay</p>
              </div>
              <div class="main-banner__navigation-item swiper-slide">
                <p>TIVI XIAOMI 4K P1<br />Mở bán giá sốc</p>
              </div>
              <div class="main-banner__navigation-item swiper-slide">
                <p>SONY WH-1000XM5<br />Nhận ngay quà xịn</p>
              </div>
              <div class="main-banner__navigation-item swiper-slide">
                <p>HUAWEI FATHER'S DAY<br />Giá rẻ vô địch</p>
              </div>
              <div class="main-banner__navigation-item swiper-slide">
                <p>ĐỒ DÙNG THÔNG MINH<br />Giá sốc tận nóc</p>
              </div>
            </div>
          </div>
        </div>
      <div class="image--banner">
        <div>
          <a href="" class="right--banner">
            <img src="https://github.com/huu1712/page-cps/blob/main/assets/image/RB_galaxy-A73.jpg?raw=true" alt="">
          </a>
          <a href="" class="right--banner">
            <img src="https://github.com/huu1712/page-cps/blob/main/assets/image/2cd6effe925952070b48.jpg?raw=true" alt="">
          </a>
          <a href="" class="right--banner">
            <img src="https://github.com/huu1712/page-cps/blob/main/assets/image/5432f3948c334c6d1522.jpg?raw=true" alt="">
          </a>
        </div>
      </div>
    </div>
    <div class="horizontal--banner">
      <img src="https://raw.githubusercontent.com/huu1712/page-cps/main/assets/image/0677df74b2d3728d2bc2.jpg" alt="">
    </div>
  </div>
</template>

<script>
import {sliderr} from '~/assets/index'



export default {
  data() {
    return {
       backgroundUrl : 'https://raw.githubusercontent.com/huu1712/page-cps/6b918957d84a988e4dc4b64566dd48c595c4b94e/assets/image/icon-cps-3.svg',
       backgroundUrl1 : 'https://raw.githubusercontent.com/huu1712/page-cps/6b918957d84a988e4dc4b64566dd48c595c4b94e/assets/image/icon-cps-380.svg',
       backgroundUrl2 : 'https://raw.githubusercontent.com/huu1712/page-cps/6b918957d84a988e4dc4b64566dd48c595c4b94e/assets/image/icon-cps-4.svg',
       backgroundUrl3 : 'https://raw.githubusercontent.com/huu1712/page-cps/6b918957d84a988e4dc4b64566dd48c595c4b94e/assets/image/icon-cps-220.svg',
       backgroundUrl4 : 'https://raw.githubusercontent.com/huu1712/page-cps/6b918957d84a988e4dc4b64566dd48c595c4b94e/assets/image/icon-cps-610.svg',
       backgroundUrl5 : 'https://raw.githubusercontent.com/huu1712/page-cps/6b918957d84a988e4dc4b64566dd48c595c4b94e/assets/image/icon-cps-1124.svg',
       backgroundUrl6 : 'https://raw.githubusercontent.com/huu1712/page-cps/6b918957d84a988e4dc4b64566dd48c595c4b94e/assets/image/icon-cps-30.svg',
       backgroundUrl7 : 'https://raw.githubusercontent.com/huu1712/page-cps/6b918957d84a988e4dc4b64566dd48c595c4b94e/assets/image/icon_cpu.svg',
       backgroundUrl8 : 'https://raw.githubusercontent.com/huu1712/page-cps/6b918957d84a988e4dc4b64566dd48c595c4b94e/assets/image/icon-cps-tcdm.svg',
       backgroundUrl9 : 'https://raw.githubusercontent.com/huu1712/page-cps/6b918957d84a988e4dc4b64566dd48c595c4b94e/assets/image/icon-cps-29.svg',
       backgroundUrl10 : 'https://raw.githubusercontent.com/huu1712/page-cps/6b918957d84a988e4dc4b64566dd48c595c4b94e/assets/image/icon-cps-promotion.svg',
    }
  },
  name: "Banner",
  mounted() {
    this.$nextTick(()=>{
      this.sliderr()
    })
  },
  methods: {
    sliderr,
  },
}

</script>

<style scoped>
@import "@/components/Banner/Banner.css";
</style>
