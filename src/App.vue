<template>
  <div id="app">
    
    <keep-alive exclude="detail">
      <router-view class="view"/>
    </keep-alive>
    
    <tabbar :title='title' v-show="$route.meta.title"/>
  </div>
</template>

<script>
import tabbar from 'components/tabbar/tabbar'

export default {
  data() {
    return {
      title: ['主页','分类','购物车','我的'],
    }
  },
  components: {
    tabbar,
    
  }
}
</script>

<style>
.view {
  position: absolute;
  top: 0;
  bottom: 60px;
  left: 0;
  right: 0;
}
</style>
