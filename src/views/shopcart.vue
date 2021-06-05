<template>
  <div class="shopcart">
    <toptitle v-show="$route.meta.title" />
    <shopcartList class="shopcartList" />
    <div class="shopcartBottom">
      <div class="left" >
          <img
            @click.stop="allChange"
            :class="[allPitchOn ? 'on' : 'off']"
            src="~assets/img/cart/tick.svg"
            alt=""
          />
          全选
      </div>
      <div class="middle">总计: {{ totalPrice }}元</div>
      <div class="right">买单{{ totalAmount ? totalAmount : "" }}</div>
    </div>
  </div>
</template>

<script >
import toptitle from "components/toptitle/toptitle";
import shopcartList from "./shopcartChildren/shopcartList.vue";

import { mapGetters } from "vuex";

export default {
  methods: {
    allChange() {
      if(!this.totalKind) return
      this.$store.dispatch("allChange", !this.allPitchOn);
    },
  },
  computed: {
    ...mapGetters(["totalAmount", "totalPrice", "allPitchOn", 'totalKind']),
  },
  components: {
    toptitle,
    shopcartList,
  },
};
</script>

<style scoped>
.shopcartBottom {
  width: 100%;
  line-height: 40px;
  display: flex;
  background-color: #eeeeee;
  position: fixed;
  bottom: 60px;
  text-align: center;
}
.middle {
  flex: 1;
}
.right,
.left {
  width: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
}
.left {
  font-size: 16px;
 display: flex;
 align-content: space-around;
  
}
img {
  margin-top: -5px;
  margin-right: 10px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  background-color: #eee;
}
.right {
  background-color: coral;
  border: 1px solid rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  color: white;
  line-height: normal;
}
.shopcartList {
  position: absolute;
  top: 44px;
  bottom: 40px;
  left: 0;
  right: 0;
}
.off {
  background-color: #eee;
}
.on {
  background-color: deeppink;
}

</style>