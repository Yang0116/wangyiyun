<template>
  <div class="register">
    <h1>注册</h1>
    <van-form submit-on-enter>
      <van-field
        v-model="nickname"
        name="nickname"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[
          {
            pattern: passwordPattern,
            message: '请填写正确格式密码(6到20位 数字与字母组合)',
          },
        ]"
      />
      <van-field
        v-model="againPassword"
        type="password"
        name="againPassword"
        label="再次输入密码"
        placeholder="再次输入密码"
        :rules="[
          { validator: againPasswordChange, message: '两次密码必须一致' },
        ]"
      />
      <van-field
        v-model="phone"
        name="phone"
        label="手机号码"
        placeholder="手机号码"
        :rules="[{ validator: phoneChange, message: '请填写正确的手机号码' }]"
      />
      <div class="catcha-group">
        <div class="catcha-input">
          <van-field
            v-model="captcha"
            type="text"
            name="captcha"
            label="验证码"
            placeholder="验证码"
            :rules="[{ validator: captchaChange, message: '验证码错误' }]"
          />
        </div>
        <van-button
          native-type="button"
          :disabled="captchaButton"
          @click="getCaptcha"
          >发送验证码</van-button
        >
      </div>
      <div style="margin: 16px">
        <van-button round block color="#d81e06" @click="registerRequest"
          >注册</van-button
        >
      </div>
    </van-form>
    <router-link to="/login"
      ><p class="toLogin">已有账号 马上登陆</p></router-link
    >
  </div>
</template>

<script>
import httpRequest from "../request/index";
export default {
  name: "register",
  data() {
    return {
      captcha: null,
      captchaButton: true,
      againPassword: null,
      phone: null,
      nickname: null,
      password: null,
      passwodMessage: "请填写密码",
      passwordPattern: /^(\w){6,20}$/,
      phonePattern: /^1[0-9]{10}$/,
    };
  },
  methods: {
    //注册
    registerRequest() {
      /* captcha: 验证码
    phone : 手机号码
    password: 密码
    nickname: 昵称 */
      httpRequest({
        url: "api/register/cellphone",
        params: {
          captcha: this.captcha,
          phone: this.phone,
          password: this.password,
          nickname: this.nickname,
        }
      }).then((data) => {
            if(data.status == 200){
              this.$toast.success('注册成功');
              this.$router.push("/login")
            }
            else if(data.status == 250){
              this.$toast.fail('注册异常，检查此手机号是否绑定网易云账号');
              this.$router.push("/login")
            }
          })
          .catch((err) => {
            this.$toast.fail(err.response.data.message);
          });
    },
    //获取验证码
    getCaptcha(phone) {
      httpRequest({
        url: "api/captcha/sent?phone=" + this.phone,
      })
        .then((data) => {
        })
        .catch((error) => {
          this.$toast.fail(err.response.data.message);
        });
    },
    //验证手机号是否注册
    isHavePone(phone) {
      httpRequest({
        url: "api/cellphone/existence/check?phone=" + phone,
      })
        .then((data) => {
          console.log(data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    //再次输入密码校验
    againPasswordChange(val) {
      return val == this.password ? true : false;
    },
    //验证手机号码格式
    phoneChange(val) {
      // console.log(this.phonePattern.test(val));
      if (this.phonePattern.test(val)) {
        this.captchaButton = false;
        return true;
      } else {
        this.captchaButton = true;
        return false;
      }
    },
    //验证验证请求
    captchaChange() {
      return new Promise((resolve, reject) => {
        httpRequest({
          url: "api/captcha/verify",
          params: {
            phone: this.phone,
            captcha: this.captcha,
          },
        })
          .then((data) => {
            resolve(true)
          })
          .catch((error) => {
            resolve(false)
          });
      });
    },
    //注册
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
.register h1 {
  margin: 0;
  font-size: 0.8rem;
  text-align: center;
  background: #d81e06;
  color: white;
  padding: 0.5rem 0;
}

.toLogin {
  font-size: 0.6rem;
  color: #d81e06;
  text-align: center;
  margin-top: 0.25rem;
}

.catcha-group {
  display: flex;
}

.catcha-input {
  width: 70%;
}
</style>