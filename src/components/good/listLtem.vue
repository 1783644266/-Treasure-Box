<template>
  <div class="listLtem">
    <img :src="good.show.img" @load="load" alt="">
    <div class="info">
      <p>{{good.title}}</p>
      <span class="price">{{good.price}}</span><span></span>
    </div>
  </div>
</template>

<script >
export default {
  props: {
    good: Object
  },
  data() {
    return {

    }
  },
  methods: {
    load() {
      this.$bus.$emit('load')
    }
  }
}
</script>

<style scoped>
.listLtem {
  width: 48%;
  position: relative;
  padding-bottom: 40px;
  
}
.info {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 3px;
  overflow: hidden;
  text-align: center;
}
img {
  width: 100%;
  border-radius: 8px;
}
p {
  font-size: 14px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.price {
  font-size: 13px;
  color:darkmagenta;
}
</style>