<template>
  <div class="tabbarItem">
    <div to="" class="aa" @click="goto">
        <img :src="computed" />
      <span :class="{on:isOn}">{{ title }}</span>
    </div>
  </div>
</template>

<script >
export default {
  props: {
    title: String,
    index: Number,
    url: String
  },
  data() {
    return {
     
    };
  },
  computed: {
    computed() {
      // 动态绑定src 用require 
      return this.isOn? require(`assets/img/tabbar/${this.url}_active.svg`) :require(`assets/img/tabbar/${this.url}.svg`)
    },
    isOn() {
      return this.$route.path.indexOf(this.url)!=-1
    }
  },
  methods: {
    goto() {
      this.$router.push('/'+ this.url)
    }
  }
};
</script>

<style scoped>
.tabbarItem {
  width: 25%;
  display: flex;
}
.aa {
  width: 100%;
  height: 100%;
  display: block;
  background-color: #EBE7E7;
  text-align: center;
  font-weight: 800;
}
.aa img {
  width: 30px;
  margin: 5px auto 0;
}
.on {
  color: #FF5777;
}
</style>