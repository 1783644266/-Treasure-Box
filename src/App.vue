<template>
  <div id="app">
    <toptitle :title='title' v-show="$route.meta.title"/>
    <keep-alive>
      <router-view class="view"/>
    </keep-alive>
    
    <tabbar :title='title' v-show="$route.meta.title"/>
  </div>
</template>

<script>
import tabbar from 'components/tabbar/tabbar'
import toptitle from 'components/toptitle/toptitle'
export default {
  data() {
    return {
      title: ['主页','分类','购物车','我的'],
    }
  },
  components: {
    tabbar,
    toptitle
  }
}
</script>

<style>
.view {
  position: absolute;
  top: 44px;
  bottom: 60px;
  left: 0;
  right: 0;
}
</style>
