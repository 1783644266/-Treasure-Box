<template>
  <div class="detail">
    <detailTop />
    <div class="wrapper">
      <div class="content">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div
              class="swiper-slide"
              v-for="(item, index) in imgs"
              :key="index"
            >
              <img :src="item" alt="">
            </div>
          </div>
          <div class="swiper-pagination"></div>
        </div> 
        <detailInfo :good="good"/>
        <detailShopInfo :info="shopInfo"/>
      </div>
    </div>
    <detailBottom />
  </div>
</template>

<script >
import detailBottom from "components/detail/detailBottom";
import detailTop from "components/detail/detailTop";
import detailInfo from "./detailChild/detailInfo";
import detailShopInfo from "./detailChild/detailShopInfo";

import { getGoodDetail, Goods, Shop, GoodsParam} from "api/detail";

import Bscroll from "@better-scroll/core";
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";

export default {
  name: 'detail',
  created() {
    let iid = this.$route.params.iid;
    getGoodDetail(iid).then((data) => {
      console.log(data);
      this.imgs = data.itemInfo.topImages;
      this.good = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      this.shopInfo = new Shop(data.shopInfo);
      this.detailInfo = data.detailInfo;
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
      this.commentInfo = data.rate.list;
    });
  },
  data() {
    return {
      imgs: [],
      good: {},
      shopInfo: {},
    };
  },
  watch: {
    imgs(value) {
      if(value.length > 1) {
        this.$nextTick(() => {
        this.swiper = new Swiper(".swiper-container", {
          loop: true,
          autoplay: true,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
        });
      });
      }
      //只有一张就不创建swiper
      this.scroll = new Bscroll('.wrapper', {

      })
    },
  },
  components: {
    detailBottom,
    detailTop,
    detailInfo,
    detailShopInfo,
  },
};
</script>

<style scoped>
.wrapper {
  position: absolute;
  top: 40px;
  bottom: 0;
  left: 0;
  right: 0;
}
.swiper-container {
  width: 100%;
  height: 300px;
}
.swiper-slide img {
  width: 100%;
}
.content {
  height: 1000px;
}
</style>