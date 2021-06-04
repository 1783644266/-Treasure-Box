<template>
  <div class="detailInfo">
    <div class="desc">{{good.title}}</div>
    <div class="pricewrapper">
      <span class="price">{{good.newPrice}}</span>
      <span class="oldprice">{{good.oldPrice}}</span>
      <span class="discount">{{good.discount}}</span>
    </div>
    <div class="info-other">
      <span v-for="(item, i) in good.columns" :key="i">{{item}}</span>
    </div>
    <div class="service">
      <span v-for="(item, i) in good.services" :key="i">
        <img v-if="item.icon" :src="item.icon" alt="">
        {{item.name}}</span>
    </div>
  </div>
</template>

<script >
export default {
  props: ['good'],
  data() {
    return {

    }
  },
}
</script>

<style scoped>
.detailInfo {
  margin-top: 10px;
  width: 100%;
  padding: 0 5px;
  border-bottom: 5px solid #F2F5F8;
}
.pricewrapper {
  margin-top: 5px;
}
.price {
  color: #FF578F;
  font-size: 25px;
}
.oldprice {
  margin: 0 5px;
  font-size: 15px;
  color: #999;
  text-decoration: line-through;
}
.discount {
  padding: 2px 8px;
  font-size: 12px;
  color: white;
  background-color: #FF578F;
  border-radius: 10px;
  position: relative;
  top: -5px;
}
.info-other,.service {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  
}
.info-other {
  margin: 10px 0 2px;
  color: #999;
}
.service {
  line-height: 61px;
  
}
.service img {
  display:  inline-block;
  vertical-align: middle;
  width: 12px;
}
</style>