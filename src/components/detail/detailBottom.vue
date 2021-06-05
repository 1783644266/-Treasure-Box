<template>
  <div class="detailBottom">
    <div class="item">
      <img src="~assets/img/detail/icon01.png" alt="">
      <span>客服</span>
    </div>
    <div class="item">
      <img src="~assets/img/detail/icon02.png" alt="">
      <span>店铺</span>
    </div>
    <div class="item">
      <img src="~assets/img/detail/icon03.png" alt="">
      <span>收藏</span>
    </div>
    <div class="addGood">加入购物车</div>
    <div class="buy">购买</div>
  </div>
</template>

<script >
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
.detailBottom {
  width: 100%;
  height: 60px;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  box-shadow: 0 -1px 1px rgba(0, 0, 0, 0.3);
  background-color: white;
}
.item {
  width: 15%;
  text-align: center;
  padding: 3px;
}
.item img{
  width: 22px;
  height: 22px;
  margin: 6px auto;
}
 .addGood, .buy {
  flex: 1;
}
.addGood {
  background-color: #F9CD0B;
  color: #666666;
}
.buy {
  background-color: #FF5777;
  color: white;
}
.addGood, .buy{
  line-height: 60px;
  text-align: center;
  font-size: 16px;
  font-weight: 700;
}
</style>