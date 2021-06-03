<template>
  <div class="classifyControl">
    <a href="javascript:;" :class="{active: index == currentInd}" @click="changeIndex(index)" v-for="(i, index) in title" :key="index">
      {{i}}
    </a>
  </div>
</template>

<script >
export default {
  data() {
    return {
      title: ['流行','新款','精选'],
      currentInd: 0 
    }
  },
  methods: {
    changeIndex(i) {
      this.currentInd = i
      this.$emit('changeIndex',i)
    }
  }
}
</script>

<style scoped>
.classifyControl {
  height: 40px;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.classifyControl a {
  display: block;
  padding: 5px;
  box-sizing: border-box;
  border-bottom: 1px solid transparent;
}
.classifyControl .active {
  color: blue;
  border-bottom: 1px solid blue;
}
</style>