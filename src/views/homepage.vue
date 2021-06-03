<template>
  <div class="homepage">
    <div class="content">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item, i) in banner" :key="i">
            <a :href="item.link">
              <img :src="item.image" @load="load" title="大促销" alt="大促销" />
            </a>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
      <recommed :recommend="recommends" />
      <popular />
      <classifyControl @changeIndex="changeIndex" />
      <goodList :goodData='goodData' />
    </div>
  </div>
</template>

<script >
import classifyControl from "components/classifyControl/classifyControl";
import recommed from "components/recommed/recommed";
import popular from "components/popular";
import goodList from 'components/good/goodList'

import { getHomeData, getHomeGood} from "api/home.js";

import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
import Bscroll from "@better-scroll/core";

export default {
  created() {
    getHomeData().then((data) => {
      let { banner, recommend } = data;
      this.banner = banner.list;
      this.recommends = recommend.list;
    });
    this.getHomeGood()
  },
  mounted() {
    this.$bus.$on('load', () => {
     this.scroll.refresh()
    })
  },
  methods: {
    changeIndex(i) { //选择类型 流行 精选 新款
      this.i = i;
    },
    getHomeGood() {
      let type = this.goodType
      let page = ++this.goods[type].page
      console.log(type, page)
      getHomeGood(type, page).then( data => {
        let {list} = data 
        this.goods[type].page == page
        this.goods[type].list.push(...list)
        console.log(list)
      })
    },
    load() {
      this.scroll.refresh()
    }
  },
  data() {
    return {
      banner: {},
      recommends: [],
      title: ["pop", "new", "sell"],
      goods: {
        pop: {list: [], page: 0},
        new: {list: [], page: 0},
        sell: {list: [], page: 0}
      },
      i: 0
    };
  },
  computed: {
    goodData() {
      return this.goods[this.goodType].list
    },
    goodType() {
      return this.title[this.i]
    }
  },
  watch: {
    banner() {
      this.$nextTick(() => {
        if(!this.swiper) {
          this.swiper = new Swiper(".swiper-container", {
          loop: true,
          autoplay: true,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
        }); 
        }//利用nextTick延后创建swiper实例
        if(!this.scroll) {
          this.scroll = new Bscroll(".homepage", {
          scrollY: true,
          click: true,
        });
        }
      });
    },
  },
  activated() {
  },
  components: {
    classifyControl,
    recommed,
    popular,
    goodList,
  },
};
</script>

<style scoped>
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