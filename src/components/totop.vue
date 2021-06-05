<template>
  <transition name="move">
  <div class="totop ">
    <i class="iconfont icon-jiantou"></i>
  </div>
  </transition>
</template>

<script >
export default {
}
</script>

<style scoped>
.totop {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: white;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  right: 10px;
  bottom: 80px;
}
.totop i {
  font-size: 25px;
}
.move-enter,.move-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
.move-enter-active,.move-leave-active {
  transition: all 0.7s;
}
</style>