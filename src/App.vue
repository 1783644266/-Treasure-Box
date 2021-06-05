<template>
  <div id="app">
    
    <keep-alive exclude="detail,userLogin">
      <router-view class="view"/>
    </keep-alive>
    
    <tabbar :title='title' v-show="$route.meta.title"/>
  </div>
</template>

<script>
import tabbar from 'components/tabbar/tabbar'

export default {
  created() {
    let user = JSON.parse(window.localStorage.getItem("userInfo") || "{}")
    if(user.password) {
      this.$store.dispatch("saveUser", user)
    }
  },
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
