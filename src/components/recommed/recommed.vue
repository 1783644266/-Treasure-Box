<template>
  <div class="recommed">
    <a :href="i.link" v-for="(i, index) in recommend" :key="index">
      <img :src="i.image" alt="">
      <span>{{i.title}}</span>
    </a>
  </div>
</template>

<script >
export default {
  props: {
    recommend: Array
  },
  data() {
    return {

    }
  },
}
</script>

<style scoped>
.recommed {
  width: 100%;
  display: flex;
  border-bottom: 10px solid #EEEEEE;
}
.recommed a {
  display: block;
  width: 25%;
  height: 100%;
  text-align: center;
}
a img {
  width: 70px;
  margin: 3px auto;
}
</style>