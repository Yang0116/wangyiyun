<template>
  <div class="login">
    <h1>登陆</h1>
    <van-form>
      <div class="from-grop">
        <van-field
          v-model="phoneNumber"
          name="phoneNumber"
          label="手机号码"
          placeholder="手机号码"
          :rules="[{ required: true, message: '请填写手机号码' }]"
        />
      </div>
      <div class="from-grop">
        <van-field
          v-model="password"
          type="password"
          name="password"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
      </div>
      <div style="margin: 16px">
        <van-button
          round
          block
          color="#d81e06"
          @click="loginRequest"
          native-type="submit"
          >登录</van-button
        >
      </div>
    </van-form>
    <router-link to="/register"
      ><p class="goRegister">还没有账号？去注册</p></router-link
    >
  </div>
</template>

<script>
import httpRequest from "../request/index";
export default {
  name: "login",
  data() {
    return {
      phoneNumber: "",
      password: "",
      userid: null,
    };
  },
  methods: {
    //登录接口
    loginRequest() {
      /*
        phone: 手机号码
        password: 密码
      */
      httpRequest({
        url: "api/login/cellphone",
        params: {
          // phone:this.phoneNumber,
          // password:this.password,
          password: 123456,
          phone: "13602695434",
        },
      })
        .then((data) => {
          let result = data.data;
          if (result.code == 200) {
            //登陆成功
            //用户信息列表
            let userList = result.account;
            this.$store.commit("setIslogin", true);
            this.$store.dispatch("setUserInfoList", userList.id);
            this.$toast.loading({
              message: "登录中...",
              forbidClick: true,
            });
            setTimeout(() => {
              this.$toast.success("登陆成功");
              setTimeout(()=>{},100)
              this.$router.push("/mymusic");
            }, 3000);
          } else if (result.code == 502) {
            this.$toast.fail(result.msg);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  destroyed() {
    this.$store.commit("setCopyrightShow", true);
    this.$store.commit("setPlayShow", true);
  },
  created() {
    this.$store.commit("setCopyrightShow", false);
    this.$store.commit("setActiveFlage", -1);
    this.$store.commit("setPlayShow", false);
  },
};
</script>

<style scoped>
.goRegister {
  text-align: center;
  font-size: 0.6rem;
  color: #d81e06;
  margin-top: 0.25rem;
}

.login h1 {
  margin: 0;
  font-size: 0.8rem;
  text-align: center;
  background: #d81e06;
  color: white;
  padding: 0.5rem 0;
}
</style>