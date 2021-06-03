<template>
  <div class="goodList">
    <listLtem v-for="(item, index) in goodData" :good='item' :key="index"/>
  </div>
</template>

<script >
import listLtem from './listLtem'

export default {
  props: {
    goodData: Array
  },
  data() {
    return {

    }
  },
  components: {
    listLtem,
  }
}
</script>

<style scoped>
.goodList {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>