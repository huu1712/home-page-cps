<template>
  <div id="page-cps">
    <Header></Header>
    <Banner></Banner>
    <FeaturedProduct></FeaturedProduct>
    <Accessory></Accessory>
    <Footer></Footer>
  </div>
</template>

<script>

import Header from "@/layouts/Header/Header";
import Banner from "@/components/Banner/Banner";
import FeaturedProduct from "@/components/Featured-product/Featured-product";
import Accessory from "~/components/Accessory/Accessory.vue";
import Footer from "~/layouts/Footer/Footer.vue";
import {scroll, sliderr} from '~/assets/index'




export default {
  name: 'IndexPage',
  mounted() {
    this.$nextTick(()=>{
      this.scroll()
    })
  },
  methods: {
    scroll,
  },
  data() {
    return {}
  },
  components: {
    Header,
    Banner,
    FeaturedProduct,
    Accessory,
    Footer

  }
}
</script>
<style >
html,
body {
  margin: 0 !important;
}

ul,
li {
  list-style: none;
}

a {
  text-decoration: none;
}

.fixed{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
}
</style>
