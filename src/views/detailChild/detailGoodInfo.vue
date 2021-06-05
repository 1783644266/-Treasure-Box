<template>
  <div class="detailGoodInfo" v-if="detailInfo.detailImage" >
    <div class="desc">{{detailInfo.desc}}</div>
    <div class="laz">{{detailInfo.detailImage[0].key}}</div>
    <div class="imgs" >
      <img :src="item" alt="" @load="load" v-for="(item, i) in detailInfo.detailImage[0].list" :key="i">
    </div>
  </div>
</template>

<script >
export default {
  props: ['detailInfo'],
  methods: {
    load() {
      if (++this.counter == this.imagesLength) {
          this.$emit('onloads');
        }
    },
  },
  watch: {
    detailInfo() {
      this.imagesLength = this.detailInfo.detailImage[0].list.length
    } //当接收到detailInfo再赋值imagesLength
  },
  data() {
			return {
				counter: 0,
        imagesLength: 0
      }
    },
}
</script>

<style scoped>
  .detailGoodInfo {
    width: 100%;
    padding-bottom: 10px;
    border-bottom: 5px solid #F2F5F8;
  }
  .desc {
    padding: 20px 15px;
    font-size: 14px;
    text-align: center;
    position: relative;
  }
  .desc::before, .desc::after {
    content: "";
    display: block;
    width: 100px;
    height: 1px;
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
  }
  .desc::before {
    top: 10px;
    left: 5px;
  }
  .desc::after {
    bottom: 10px;
    right: 5px;
  }
  .laz {
    width: 100%;
    line-height: 30px;
    text-align: center;
  }
  .imgs, img {
    width: 100%;
  }
</style>