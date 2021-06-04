<template>
  <div class="homepage">
    <toptitle v-show="$route.meta.title" />
    <classifyControl
      :class="{ classify: isShow }"
      ref="classifyControl1"
      @changeIndex="changeIndex"
      v-show="isShow"
    />
    <div class="content">
      <div class="as">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item, i) in banner" :key="i">
              <a :href="item.link">
                <img
                  :src="item.image"
                  @load="load"
                  title="大促销"
                  alt="大促销"
                />
              </a>
            </div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
        <recommed :recommend="recommends" />
        <popular />
        <classifyControl ref="classifyControl2" @changeIndex="changeIndex" />
        <goodList :goodData="goodData" />
      </div>
    </div>
    <totop v-show="scrollY > 1000" @click.native="goTop" />
  </div>
</template>

<script >
import classifyControl from "components/classifyControl/classifyControl";
import recommed from "components/recommed/recommed";
import popular from "components/popular";
import goodList from "components/good/goodList";
import toptitle from "components/toptitle/toptitle";
import totop from "components/totop";

import { getHomeData, getHomeGood } from "api/home";
import { debounce } from "api/utils";

import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
import Bscroll from "@better-scroll/core";
import Pullup from "@better-scroll/pull-up";

Bscroll.use(Pullup);

export default {
  created() {
    getHomeData().then((data) => {
      let { banner, recommend } = data;
      this.banner = banner.list;
      this.recommends = recommend.list;
    });
    getHomeGood("pop").then((data) => {
      let { list } = data;
      this.addGood("pop", list);
    });
    getHomeGood("new").then((data) => {
      let { list } = data;
      this.addGood("new", list);
    });
    getHomeGood("sell").then((data) => {
      let { list } = data;
      this.addGood("sell", list);
    });
  },
  mounted() {
    this.s = debounce(this.load);
    this.$bus.$on("load", () => {
      this.s();
    });
  },
  methods: {
    goTop() {
      this.scroll.scrollTo(0, 0, 1000);
    },
    addGood(type, list) {
      this.goods[type].page++;
      this.goods[type].list.push(...list);
    },
    changeIndex(i) {
      //选择类型 流行 精选 新款
      this.i = i;
      this.$refs.classifyControl1.currentInd = i;
      this.$refs.classifyControl2.currentInd = i;
    },
    getHomeGood() {
      let type = this.goodType;
      let page = this.goods[type].page;
      console.log(type, page);
      getHomeGood(type, page).then((data) => {
        let { list } = data;
        this.goods[type].page++;
        this.goods[type].list.push(...list);
        console.log(list);
      });
    }, // 下来加载一页数据
    load() {
      this.scroll.refresh();
    },
  },
  data() {
    return {
      banner: {},
      recommends: [],
      title: ["pop", "new", "sell"],
      goods: {
        pop: { list: [], page: 0 },
        new: { list: [], page: 0 },
        sell: { list: [], page: 0 },
      },
      i: 0,
      y: 0, //分类选择器距离顶部的距离
      scrollY: 0,
    };
  },
  computed: {
    goodData() {
      return this.goods[this.goodType].list;
    },
    goodType() {
      return this.title[this.i];
    },
    isShow() {
      return this.scrollY >= this.y;
    },
  },
  watch: {
    banner() {
      this.$nextTick(() => {
        if (!this.swiper) {
          this.swiper = new Swiper(".swiper-container", {
            loop: true,
            autoplay: true,
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
          });
        } //利用nextTick延后创建swiper实例
        if (!this.scroll) {
          this.scroll = new Bscroll(".content", {
            scrollY: true,
            click: true,
            pullUpLoad: true,
            probeType: 3,
          });
          this.scroll.on("scroll", (p) => {
            this.scrollY = -p.y;
          });
          this.scroll.on("pullingUp", () => {
            this.getHomeGood();
            this.scroll.finishPullUp();
          });
          this.y =
            this.$refs.classifyControl2.$el.getBoundingClientRect().y - 44;
        } /* 创建scroll实例 */
      });
    },
  },
  activated() {},
  components: {
    classifyControl,
    recommed,
    popular,
    goodList,
    toptitle,
    totop,
  },
};
</script>

<style scoped>
.classify {
  position: fixed;
  top: 44px;
  z-index: 99;
}

.content {
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 0;
}

.homepage {
  overflow: hidden;
}
.swiper-container {
  width: 100%;
  height: 188px;
}
.swiper-slide a,
img {
  display: block;
  width: 100%;
  height: 100%;
}
</style>