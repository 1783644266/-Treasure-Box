<template>
  <div class="scroll">
    <div class="content">
      <div class="good" @click="$router.push('/detail/'+item.iid)" v-for="(item, i) in cardList" :key="i">
        <img  :class="[item.pitchOn ? 'on' : 'off']"
        @click.stop="change(item.iid)" src="~assets/img/cart/tick.svg" alt="" />
        <img class="goodImg" :src="item.image" alt="" />
        <div class="info">
          <p>{{ item.title }}</p>
          <p class="desc">商品描述：{{ item.desc }}</p>
          <div class="wrapper">
            <span class="price">{{ item.price }}</span>
            <span class="right">x{{ item.count }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script >
import Bscroll from "better-scroll";

import { mapState } from "vuex";
export default {
  
  computed: {
    ...mapState(["cardList"]),
  },
  methods: {
    change(iid) {
      this.$store.dispatch("changeGoodState", iid)
    }
  },
  activated() {
    if (!this.scroll) {
          this.scroll = new Bscroll(".scroll", {
          scrollY: true,
          click: true,
        });
      }
    else {
      this.scroll.refresh()
      }
  },
};
</script>

<style scoped>
.good {
  width: 100%;
  height: 150px;
  padding: 10px 0;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.goodImg {
  width: 20%;
  border-radius: 20px;
}
.info {
  width: 65%;
  height: 80%;
}
.info p {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.desc {
  font-size: 14px;
  color: #666;
  margin: 15px 0;
}
.price {
  font-size: 22px;
  color: #ff8457;
}

.wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.off, .on{
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 50%;
}
.off {
  background-color: #eee;
}
.on {
  background-color: deeppink;
}
</style>