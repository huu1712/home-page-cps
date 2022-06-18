<template>
  <div id="container">
    <header id="header" class="header">
      <div class="cps--container">
        <ul class="header--list">
          <li class="header--list__link">
            <a href="">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="269.231"
                   height="50" viewBox="0 0 269.231 50">
                <defs>
                  <pattern id="patternLogo" preserveAspectRatio="xMidYMid slice" width="100%" height="100%"
                           viewBox="0 0 530 95">
                    <image width="530" height="95"
                           xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAhIAAABfCAYAAAC9ZC4kAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6REQzNUE1OThENjI3MTFFQUJDOTI5NjNDMjAyQkNFMkQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6REQzNUE1OTlENjI3MTFFQUJDOTI5NjNDMjAyQkNFMkQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpERDM1QTU5NkQ2MjcxMUVBQkM5Mjk2M0MyMDJCQ0UyRCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpERDM1QTU5N0Q2MjcxMUVBQkM5Mjk2M0MyMDJCQ0UyRCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PtMJt2kAAAPtSURBVHja7Nzbbts6FEDB0ND//zL7mhg1oqoSuS8zjwdBj8SbV4RYY875BQBwxcsQAABCAgAQEgCAkAAAhAQAgJAAAB5wGIJyznyfdwT4N7vPg/GCOGdid/91HnkiYWPZhHvG17gCJXgiAYDfuv3Sc5knEgCAkAAAhAQAICQAACEBACAkAAAhAQAICQCgBi+kAoCfMr95dvmLtzyRAACEBAAgJAAAIQEACAkAACEBAAgJAEBIAABCAgBo7uk3W+54O9hIeu3Dcty2ZnaN/yx6b7PovM3C69F5l/M+QryB86h8c8muezaPihno/z8Kj+0oNn9P39s0Z/Zb8JDZ/nl7FFqYla57NtpgM/A1jaLjPYrO393zNt2X/SYmfvd6YDH4IDOmVe5vFh73WXh8ZpDxibgenXeEDQkRYXOJnV73JgLNmXmLY+vTHN/awIFB1bmb1iViIkdIeBrhWn1wujdjIZCczU1j4uh2wwGu28F9fQxGwY1v7p7/APVHfM67p/dE6zV2JFuUFaJn+FAz/o0Owifmzrzlm7Pq89Y6JlaGxAg26RGue3w5FLuP/9i4trPO3RPzNjff45Pz5rwTE4/yx5Z54sf4u7+z/+YIMHaj+Nq4e4w7zFkHLX8xfFmgPiyxtjCuxu6262wXE55IAMT5IBQpseb66pOiVjEhJADgXFSICSEBAMuCokVMCAkAuBYUZ6JiVg8MIbGfr38C5I+KKzFR4vw/rAEf8gDOu1uC4rdwGN9+dr79bNo/tPVEAgDuj4px4mfeQyNlzAkJAHg2KD693v1vsZEuKIQEAKyLijMxkSoohAQArA2KM//tPSjCRoWQAICYgfEpKoQEAHApJsIFha9/3jOpAM47Vgvx1VFPJAAgd9BtfUIhJAAgf0x87YoJIQEAdWJCSAAAeWJiVUh4hzsAFIwJTyQEEIDzTkykCIlpc2Fuja25syeo5bVhkUZYqMPman9YmtOc42zunHcEs+uFVDPQpsmyuTq+LMaBZh7pOWdejpXIq/GEW6hYK/XHwtwZh6shJYAXhgQ4gI2J6wQh0XLDOmgAAcgnnkosDAkxQcVD19rIOT7mznknJpKGROYNbHNhPdQYK3NnjMTEYsfDC3Um3VwWjcOVXPvd/DnvVsSEdbYwJLJv7syLZRQaC+sn17XYNzmvxYejmAgdEgBQLSb4xtc/AQAhAQAICQBASAAAQgIAQEgAAEICABASAICQAACa82ZLAPjJa7D/gScSAICQAACEBAAgJAAAIQEAICQAACEBAAgJAKAGL6QCoINpCIQEdXhrHLDyvBERQgIA/PISkb+RAACEBAAgJAAAIQEAdPBHgAEAruC43nH9c2MAAAAASUVORK5CYII="></image>
                  </pattern>
                </defs>
                <rect id="header__logo--bg" width="269.231" height="50" fill="url(#patternLogo)"></rect>
              </svg>
            </a>
          </li>
          <li class="header--list__link">
            <a href="" class="header--item category">
              <div class="category--icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26.99 26.99">
                  <defs>
                    <style>.cls-1 {
                      fill: none;
                      stroke: #fff;
                      stroke-linecap: round;
                      stroke-linejoin: round;
                      stroke-width: 1.8px;
                    }</style>
                  </defs>
                  <g id="Layer_2" data-name="Layer 2">
                    <g id="Layer_1-2" data-name="Layer 1">
                      <line x1="7.06" y1="7.52" x2="19.92" y2="7.52" class="cls-1"></line>
                      <line x1="7.06" y1="13.49" x2="19.92" y2="13.49" class="cls-1"></line>
                      <line x1="7.06" y1="19.47" x2="11.95" y2="19.47" class="cls-1"></line>
                      <rect x="0.9" y="0.9" width="25.19" height="25.19" rx="4.71" class="cls-1"></rect>
                    </g>
                  </g>
                </svg>
              </div>
              <div class="category--content">
                <p>Danh mục</p>
              </div>
            </a>
          </li>
          <li class="header--list__link">
            <a href="" class="header--item location--box">
              <div class="location--icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.22 30.36" width="25" height="25">
                  <defs></defs>
                  <g id="Layer_2" data-name="Layer 2">
                    <g id="Layer_1-2" data-name="Layer 1">
                      <path
                        d="M11.61.9A10.77,10.77,0,0,0,.9,11.69C.9,20.14,10.6,28.87,11,29.23a.87.87,0,0,0,1.18,0c.42-.36,10.12-9.09,10.12-17.54A10.77,10.77,0,0,0,11.61.9Z"
                        class="cls-1"></path>
                      <path d="M11.61,16.35a4.74,4.74,0,1,1,4.74-4.74,4.75,4.75,0,0,1-4.74,4.74Z" class="cls-1"></path>
                    </g>
                  </g>
                </svg>
              </div>
              <div class="location--content">
                <p>Xem giá tại</p>
                <p>
                  <span>Miền nam</span>
                  <svg fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="10" height="10">
                    <path
                      d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z"></path>
                  </svg>
                </p>
              </div>
            </a>
          </li>
          <li class="header--list__link search">
            <form class="search--form">
              <div class="group--search">
                <div class="button--search">
                  <button type="submit">
                    <div>
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" role="img"
                           xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-search">
                        <path fill="currentColor"
                              d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                      </svg>
                    </div>
                  </button>
                </div>
                <input type="text" placeholder="Bạn cần tìm gì?">
              </div>
            </form>
          </li>
          <li class="header--list__link">
            <a href="" class="header--item phone--box">
              <div class="phone--icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30.83 30.94" width="24" height="24">
                  <defs>
                    <style>.cls-1 {
                      fill: none;
                      stroke: #fff;
                      stroke-linecap: round;
                      stroke-linejoin: round;
                      stroke-width: 1.8px;
                    }</style>
                  </defs>
                  <g id="Layer_2" data-name="Layer 2">
                    <g id="Layer_1-2" data-name="Layer 1">
                      <path
                        d="M6.78,20.27a31,31,0,0,0,10.29,8.06A15.91,15.91,0,0,0,22.82,30h.41a4.77,4.77,0,0,0,3.7-1.59,0,0,0,0,0,0,0,14.62,14.62,0,0,1,1.17-1.2c.28-.28.57-.56.85-.85A2.91,2.91,0,0,0,29,22L25.33,18.4a2.94,2.94,0,0,0-2.13-1,3.07,3.07,0,0,0-2.15,1l-2.16,2.17c-.2-.12-.4-.22-.6-.32a6.74,6.74,0,0,1-.66-.36,22.82,22.82,0,0,1-5.47-5A13.11,13.11,0,0,1,10.32,12c.56-.52,1.09-1.05,1.61-1.58l.55-.56a3.07,3.07,0,0,0,1-2.17,3.08,3.08,0,0,0-1-2.18l-1.8-1.8L10.07,3c-.4-.41-.82-.83-1.23-1.21A3,3,0,0,0,6.72.9a3.07,3.07,0,0,0-2.15.94L2.31,4.09a4.64,4.64,0,0,0-1.38,3,11.09,11.09,0,0,0,.84,4.83,28.11,28.11,0,0,0,5,8.37Z"
                        class="cls-1"></path>
                    </g>
                  </g>
                </svg>
              </div>
              <div class="phone--content">
                <p>
                  Gọi mua hàng
                  <br>
                  1800 2097
                </p>
              </div>
            </a>
          </li>
          <li class="header--list__link">
            <a href="" class="header--item phone--box">
              <div class="phone--icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.22 30.36" width="25" height="25">
                  <defs>
                    <style>.cls-1 {
                      fill: none;
                      stroke: #fff;
                      stroke-linecap: round;
                      stroke-linejoin: round;
                      stroke-width: 1.8px;
                    }</style>
                  </defs>
                  <g id="Layer_2" data-name="Layer 2">
                    <g id="Layer_1-2" data-name="Layer 1">
                      <path
                        d="M11.61.9A10.77,10.77,0,0,0,.9,11.69C.9,20.14,10.6,28.87,11,29.23a.87.87,0,0,0,1.18,0c.42-.36,10.12-9.09,10.12-17.54A10.77,10.77,0,0,0,11.61.9Z"
                        class="cls-1"></path>
                      <path d="M11.61,16.35a4.74,4.74,0,1,1,4.74-4.74,4.75,4.75,0,0,1-4.74,4.74Z" class="cls-1"></path>
                    </g>
                  </g>
                </svg>
              </div>
              <div class="phone--content">
                <p>
                  Cửa hàng
                  <br>
                  gần bạn
                </p>
              </div>
            </a>
          </li>
          <li class="header--list__link">
            <a href="" class="header--item phone--box">
              <div class="phone--icon bill">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44.22 25.85" height="24">
                  <defs>
                    <style>.cls-1, .cls-2, .cls-3 {
                      fill: none;
                      stroke: #fff;
                      stroke-linecap: round;
                      stroke-linejoin: round;
                    }

                    .cls-1 {
                      stroke-width: 1.66px;
                    }

                    .cls-2 {
                      stroke-width: 1.66px;
                    }

                    .cls-3 {
                      stroke-width: 1.8px;
                    }</style>
                  </defs>
                  <g id="Layer_2" data-name="Layer 2">
                    <g id="Layer_1-2" data-name="Layer 1">
                      <circle cx="7.66" cy="22.02" r="3" class="cls-1"></circle>
                      <circle cx="24.79" cy="22.02" r="3" class="cls-2"></circle>
                      <path d="M28.61,22h4.13a1.44,1.44,0,0,0,1.44-1.44v-6" class="cls-3"></path>
                      <path d="M27.12.9H14.82a1.44,1.44,0,0,0-1.44,1.44V20.58A1.44,1.44,0,0,0,14.82,22h6.29"
                            class="cls-3"></path>
                      <path
                        d="M10.27,5.92H6.75A2.65,2.65,0,0,0,4.54,7.11L1.33,12A2.64,2.64,0,0,0,.9,13.47v6.46A2.1,2.1,0,0,0,3,22h.75"
                        class="cls-3"></path>
                      <path d="M34.18,3.47V2.34A1.44,1.44,0,0,0,32.74.9H25.08" class="cls-3"></path>
                      <line x1="43.32" y1="6.97" x2="32.57" y2="6.97" class="cls-3"></line>
                      <line x1="40.5" y1="11.05" x2="32.57" y2="11.05" class="cls-3"></line>
                      <line x1="42.09" y1="16.33" x2="38.07" y2="16.33" class="cls-3"></line>
                    </g>
                  </g>
                </svg>
              </div>
              <div class="phone--content">
                <p>
                  Tra cứu
                  <br>
                  đơn hàng
                </p>
              </div>
            </a>
          </li>
          <li class="header--list__link">
            <a href="" class="header--item phone--box">
              <div class="phone--icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.95 35.07" width="25" height="25">
                  <defs>
                    <style>.cls-1 {
                      fill: none;
                      stroke: #fff;
                      stroke-linecap: round;
                      stroke-linejoin: round;
                      stroke-width: 1.8px;
                    }</style>
                  </defs>
                  <g id="Layer_2" data-name="Layer 2">
                    <g id="Layer_1-2" data-name="Layer 1">
                      <path d="M10,10.54V5.35A4.44,4.44,0,0,1,14.47.9h0a4.45,4.45,0,0,1,4.45,4.45v5.19"
                            class="cls-1"></path>
                      <path
                        d="M23.47,34.17h-18A4.58,4.58,0,0,1,.91,29.24L2.5,8.78A1.44,1.44,0,0,1,3.94,7.46H25a1.43,1.43,0,0,1,1.43,1.32L28,29.24A4.57,4.57,0,0,1,23.47,34.17Z"
                        class="cls-1"></path>
                    </g>
                  </g>
                </svg>
              </div>
              <div class="phone--content">
                <p>
                  Giỏ &nbsp
                  <br>
                  hàng
                </p>
              </div>
            </a>
          </li>
          <li class="header--list__link">
            <a href="" class="header--item phone--box s-member">
              <div class="phone--icon">
                <svg id="icon-smember" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 560" width="20">
                  <defs>
                    <style>#icon-smember .cls-1 {
                      fill: none;
                      stroke: #fff;
                      stroke-width: 30px;
                    }</style>
                  </defs>
                  <title>Asset 1</title>
                  <g id="Layer_2" data-name="Layer 2">
                    <g id="Layer_1-2" data-name="Layer 1">
                      <circle cx="280" cy="280" r="265" class="cls-1"></circle>
                      <circle cx="280" cy="210" r="115" class="cls-1"></circle>
                      <path d="M86.82,461.4C124.71,354.71,241.91,298.93,348.6,336.82A205,205,0,0,1,473.18,461.4"
                            class="cls-1"></path>
                    </g>
                  </g>
                </svg>
              </div>
              <div class="phone--content">
                <p>
                  Smember
                </p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>
@import "@/layouts/Header/Header.css";
</style>
