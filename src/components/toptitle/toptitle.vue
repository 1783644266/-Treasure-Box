<template>
  <div class="toptitle">
    <div v-if="$route.meta.title">{{$route.meta.title}}</div>
    <slot name="right"></slot>
  </div>
</template>

<script >
export default {

}
</script>

<style scoped>
.toptitle {
  position: fixed;
  top: 0;
  height: 44px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #FF5777;
  color: white;
  font-size: 20px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
  z-index: 99;
}

</style>