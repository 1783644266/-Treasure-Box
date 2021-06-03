<template>
  <div class="tabbar">
    <tabbarItem v-for="(item, index) in title" :url='url[index]' :index='index' :title='item' :key="index">
    
        <!-- <img src="~assets/img/tabbar/home_active.svg" alt="" /> -->
    </tabbarItem>
  </div>
</template>

<script >
import tabbarItem from './tabbarItem'
export default {
  props: ['title'],
  data() {
    return {
      url: ['homepage', 'category', 'shopcart', 'profile']
    }
  },
  components: {
    tabbarItem
  }
}
</script>

<style scoped>
.tabbar {
  width: 100%;
  height: 60px;
  position: fixed;
  bottom: 0;
  left: 0;
  box-shadow: 0 -1px 1px rgba(0, 0, 0, 0.1);
  display: flex;

}
</style>