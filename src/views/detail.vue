<template>
  <div class="detail">
    <detailTop @changeIndex="changeIndex" ref="detailTop" />
    <div class="wrapper">
      <div class="content">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div
              class="swiper-slide"
              v-for="(item, index) in imgs"
              :key="index"
            >
              <img :src="item" alt="" />
            </div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
        <detailInfo :good="good" />
        <detailShopInfo :info="shopInfo" />
        <detailGoodInfo @onloads="affirm" :detailInfo="detailInfo" />
        <detailParams ref="detailParams" :paramInfo="paramInfo" />
        <detailRating ref="detailRating" :commentInfo="commentInfo" />
        <goodList ref="goodList" :goodData="goodData" />
      </div>
    </div>
    <detailBottom @add="add" />
    <totop @click.native="gotop" v-show="isShow" />
  </div>
</template>

<script >
import detailBottom from "components/detail/detailBottom";
import detailTop from "components/detail/detailTop";
import detailInfo from "./detailChild/detailInfo";
import detailShopInfo from "./detailChild/detailShopInfo";
import detailGoodInfo from "./detailChild/detailGoodInfo";
import detailParams from "./detailChild/detailParams";
import detailRating from "./detailChild/detailRating";
import goodList from "components/good/goodList";

import {
  getGoodDetail,
  getRecomment,
  Goods,
  Shop,
  GoodsParam,
} from "api/detail";
import { TOTOP } from "api/mixin";
import { debounce } from "api/utils";

import Bscroll from "better-scroll";
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
import { Toast } from "mint-ui";

export default {
  name: "detail",
  mixins: [TOTOP],
  created() {
    this.iid = this.$route.params.iid;
    getGoodDetail(this.iid).then((data) => {
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
    getRecomment().then((data) => {
      this.goodData = data;
    });
  },
  mounted() {
    this.s = debounce(this.load);
    this.$bus.$on("load", () => {
      this.s();
    });
  },
  methods: {
    changeIndex(i = 0) {
      this.scroll.scrollTo(0, -this.yarr[i], 300);
    },
    affirm() {
      this.yarr[1] = this.$refs.detailParams.$el.offsetTop;
      this.yarr[2] = this.$refs.detailRating.$el.offsetTop;
      this.yarr[3] = this.$refs.goodList.$el.offsetTop;
      
    },
    add() {
      let prod = {};
      prod.image = this.good.topImages[0];
      prod.title = this.good.title;
      prod.desc = this.good.desc;
      prod.price = this.good.realPrice;
      prod.iid = this.iid;
      this.$store.dispatch("addCardList", prod).then(() => {
        Toast({
          message: "已加入购物车",
          position: "middle",
          duration: 1000,
        });
      });
    },
  },
  data() {
    return {
      imgs: [],
      good: {},
      shopInfo: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      goodData: [],
      sss() {},
      y: 0,
      yarr: [0],
    };
  },
  computed: {
    isShow() {
      return this.y > 1000;
    },
    realyIndex() {
      if (this.y <= 0) return 0;
      if (this.y >= this.yarr[this.yarr.length - 1])
        return this.yarr.length - 1;
      return this.yarr.findIndex((e, index) => {
        return this.y >= e && this.y < this.yarr[index + 1];
      });
    },
  },
  watch: {
    imgs(value) {
      if (value.length > 1) {
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

      this.scroll = new Bscroll(".wrapper", {
        scrollY: true,
        click: true,
        probeType: 3,
      });
      this.scroll.on("scroll", (position) => {
        this.y = -position.y;
      });
    },
    realyIndex(val) {
      this.$refs.detailTop.currentIndex = val;
    },
  },

  components: {
    detailBottom,
    detailTop,
    detailInfo,
    detailShopInfo,
    detailGoodInfo,
    detailParams,
    detailRating,
    goodList,
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
</style>