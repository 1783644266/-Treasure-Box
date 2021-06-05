<template>
  <div class="profile">
    <toptitle />
    <div class="top">
      <a
        href="javascript:;"
        @click="$router.push(!user.username ? '/login' : '')"
      >
        <i class="iconfont icon-yonghu aa"></i>
        <div class="user-info">
          <p>{{ user.username ? "欢迎回来" : "登陆/注册" }}</p>
        </div>
        <i v-show="!user.username" class="iconfont icon-icondayu arrows"></i>
      </a>
    </div>
    <div class="middle">我的订单 <i class="iconfont icon-icondayu"></i></div>
    <div class="middle">积分商城 <i class="iconfont icon-icondayu"></i></div>
    <div class="middle">商户入驻 <i class="iconfont icon-icondayu"></i></div>
    <div class="middle">服务中心 <i class="iconfont icon-icondayu"></i></div>
    <mt-button class="out" @click="out" v-show="user.username" type="danger"
      >退出登陆</mt-button
    >
  </div>
</template>

<script >
import { TOTOP } from "api/mixin";
import { mapState } from "vuex";
import { MessageBox, Toast } from "mint-ui";

export default {
  mixins: [TOTOP],
  computed: {
    ...mapState(["user"]),
  },
  methods: {
    out() {
      MessageBox.confirm("确定退出登陆?").then(
        (action) => {
          window.localStorage.removeItem("userInfo");
          this.$store.commit("deleteUserInfo");
          Toast({
            message: "已登出",
            position: "middle",
            duration: 1000,
          });
        },
        () => {}
      );
    },
  },
};
</script>

<style scoped>
.profile {
  background-color: #f5f5f5;
}
.top {
  width: 100%;
  padding: 40px 10px 10px;
  background-color: #ff5777;
  margin-bottom: 10px;
}
.top a {
  display: block;
  padding: 15px 10px;
  overflow: hidden;
}
.aa {
  font-size: 50px;
  border: 1px solid rgba(129, 35, 35, 0.5);
  border-radius: 50%;
  float: left;
  position: relative;
}
.user-info {
  float: left;
  font-size: 20px;
  line-height: 20px;
  color: white;
  margin: 20px 0 0 20px;
}
.arrows {
  font-size: 35px;
  color: white;
  float: right;
  transform: translateY(30%);
}
.middle {
  width: 100%;
  line-height: 40px;
  padding: 0 20px;
  font-size: 18px;
  background-color: white;
  margin: 0 0 10px;
}
.middle i {
  display: inline;
  color: black;
  line-height: 40px;
  font-size: 20px;
  float: right;
}
.out {
  width: 100%;
  margin-top: 50px;
}
</style>