<template>
  <div class="detailTop">
    <img @click="$router.back()" src="~assets/img/common/back.svg" alt="">
    <div @click="currentIndex = index" v-for="(item, index) in title"
    :class="{active: index == currentIndex}"
     :key="index">{{item}}</div>
  </div>
</template>

<script >
export default {
  props: {
    
  },
  data() {
    return {
      title: ['商品','参数','评论','推荐'],
      currentIndex: 0,
    }
  },
}
</script>

<style scoped>
.detailTop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 40px;
  line-height: 40px;
  box-shadow: 0  0 2px rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: space-around;
  font-size: 15px;
  z-index: 99;
  background-color: white;
}
img {
  width: 22px;
  margin: 0 10px;
}
.detailTop div {
  width: 15%;
}
.active {
  color: #FF5777;
}
</style>