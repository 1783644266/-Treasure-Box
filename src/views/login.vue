<template>
  <div class="login">
    <div class="back">
      <img @click="$router.back()" src="~assets/img/common/back.svg" alt="" />
    </div>
    <h2>百宝箱</h2>
    <div class="info">
      <form @submit.prevent="login">
        <div class="username">
          <input type="text"  placeholder="用户名" v-model="username" />
        </div>
        <div class="password">
          <input type="password"  placeholder="密码" v-model="password" />
        </div>
        <div class="message">
          <p>
            &nbsp;&nbsp;温馨提示：用户名是abc,密码为123，点击体验<span
              >全新版本</span
            >
          </p>
        </div>
        <button>即刻体验</button>
      </form>
    </div>
  </div>
</template>

<script >
import { Toast } from "mint-ui";

export default {
  name: "userLogin",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      let { username, password } = this;
      if (!username || !password) {
        Toast({
          message: "用户名或密码不能为空",
          position: "middle",
          duration: 1000,
        });
        return
      }
      if(username != 'abc' || password != '123') {
        Toast({
          message: "用户名或密码不正确",
          position: "middle",
          duration: 1000,
        });
        return
      }
      let user = {username, password}
      this.$store.dispatch("saveUser", user).then(() => {
        Toast({
          message: "欢迎登陆",
          position: "middle",
          duration: 500,
        });
        this.$router.replace('/')
      })
    },
  },
};
</script>

<style scoped>
button {
  width: 100%;
  height: 40px;
  font-size: 18px;
  margin-top: 20px;
  border-radius: 10px;
}
.back {
  padding: 15px;
}
h2 {
  color: coral;
  margin: 40px 0 20px;
  text-align: center;
  font-size: 30px;
}
.info {
  width: 70%;
  height: 400px;
  margin: 0 auto;
}
input {
  width: 100%;
  height: 48px;
  margin: 10px 0;
  font-size: 20px;
  padding: 0 10px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 20px;
}
input:focus {
  border-color: #ff7f50;
}
.message {
  margin: 10px 0;
  font-size: 16px;
}
.message span {
  color: red;
  font-size: 20px;
}
</style>