<template>
  <div class="detailShopInfo">
    <div class="top">
      <img :src="info.logo" alt="" />
      <span>{{ info.name }}</span>
    </div>
    <div class="middle">
      <div class="left">
        <div>
          <p>{{ info.sells | format }}</p>
          <p>{{ info.goodsCount }}</p>
        </div>
        <div>
          <p class="a">总销量</p>
          <p class="a">全部宝贝</p>
        </div>
      </div>
      <div class="right">
        <div v-for="(item, index) in info.score" :key="index">
          <span>{{ item.name }}</span>
          <span :class="[item.isBetter? 'on':'off']" class="right-middle">{{item.score}}</span>
          <span :class="[item.isBetter? 'onn':'offf']">{{item.isBetter? "高" : "低"}}</span>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="enter">进店看看</div>
    </div>
  </div>
</template>

<script >
export default {
  props: ["info"],
  data() {
    return {};
  },
  computed: {
    
  },
  filters: {
    format(value) {
      if (value < 10000) return value;
      return (value / 10000).toFixed(1) + "万";
    },
  },
};
</script>

<style scoped>
.detailShopInfo {
  padding: 15px 8px;
  border-bottom: 3px solid #eee;
}
.on {
  color: red;
}
.off {
  color: green;
}
.onn {
  background-color: red;
  color: white;
}
.offf {
  background-color: green;
  color: white;
}
.top {
  padding: 10px 5px;
  display: flex;
  align-items: center;
  color: #666;
}
.top img {
  width: 60px;
  border-radius: 50%;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.5);
  display: inline-block;
  margin-right: 20px;
}
.a {
  font-size: 12px;
}
.middle {
  display: flex;
  align-items: center;
}
.left {
  width: 50%;
  display: flex;
  flex-wrap: wrap;
  border-right: 1px solid #eee;
}
.left div {
  width: 100%;
  padding: 0 10%;
  font-size: 20px;
  
}
.left div p {
  display: inline-block;
  width: 50%;
  text-align: center;
}

.right {
  width: 50%;
  height: 90px;
  padding: 0  10px 0 20px;
  font-size: 14px;
  font-weight: 400;
  display: flex;
  align-content: space-around;
  flex-wrap: wrap;
}
.right div {
  width: 100%;
}
.right-middle {
  display: inline-block;
  width: 40%;
  text-align: center;
}
.bottom {
  width: 100%;
  margin: 10px 0;
}
.enter {
  width: 130px;
  height: 30px;
  background-color: #F2F5F8;
  text-align: center;
  line-height: 30px;
  border-radius: 15px;
  margin: 0 auto;
}
</style>