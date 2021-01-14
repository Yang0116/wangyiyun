<template>
  <div class="mymusic">
       <v-touch   @swipeleft="swiperLeft">
           <div class="user-login">
               <div class="login-first">
                   <div class="user-img">
                        <img src="~@/assets/img/user.jpg"  alt="" srcset="">
                   </div>
                    <span class="login-context username" v-if="islogin" >{{nickname}}</span>
                </div>
               <div class="login-contextF">
                    <p class="login-context" v-if="!(islogin)">登录立享手机电脑多端同步</p>
               </div>
               <div>
                    <div class="login-btn" v-if="!(islogin)"><a href="/login">立即登录</a></div>
                    <div class="login-btn" v-else @click="logout">点击退出</div>
               </div>
           </div>
           <div class="mnavbar">
            <m-navbar/>
           </div>
       </v-touch>
        <div class="msing">
            <m-sings></m-sings>    
        </div>
  </div>
</template>

<script>
import MSings from './MSings.vue';
import MNavbar from './navbar/MNavbar.vue';
import httpRequest from "../request/index"
export default {
  components: { MNavbar, MSings },
    name:"mymusic",
    data(){
        return {
            singListEle:document.querySelector('.sing-list'),
            userInfoList:[],
        }
    },
     computed:{
        islogin(){
            return this.$store.getters.getIslogin;
        },
        nickname(){
            return this.userInfoList == null ? '' : this.userInfoList.profile.nickname;
        }
    },
    methods:{
        swiperLeft(e){
            this.$router.push({'path':"/musichall"})
        },
        logout(){
            //登出
            this.$store.commit("setIslogin",false);
            this.$store.commit("setUserInfoList",null);
            httpRequest({
                url:"/api/logout",
            }).then((data) => {
                let result = data.data;
                sessionStorage.clear();
                this.$toast.success("退出成功");
                this.$router.go("/mymusic") 
            }).catch((err) => {
                console.log(err)
            });
        },  
      
    },
    created(){
        // console.log(this.userInfo.userInfoList);
        if(this.islogin){
            this.userInfoList = this.$store.getters.getUserInfoList;
        }
    }
}
</script>

<style scoped>
.user-login{
   display: flex;
   width: 100%; 
   height: 3rem;
   justify-content: space-around;
   align-items: center;
   background: black;
   color: #fdfdfd;
   font-size: .55rem;
   padding: .75rem 0;
}

.login-contextF{
    text-align: left;
    width: 33%;
}

.user-img{
    width: 2.25rem;
    height: 2.25rem;
    border-radius: 50%;
    overflow: hidden;
}

.login-first{
    display: flex;
    align-items: center;
}

.login-first span{
    margin-left: .25rem;
}


.user-img img{
    width: 100%;
}

.login-btn{
    border: 1px #fdfdfd solid;
    border-radius: .5rem;
    padding: .1rem .2rem;
    font-size: .55rem;
}

.login-btn a{
    color: #ededed;
}

.msing{
    position: relative;
    z-index: 5;
    top: -0.5rem;   
}

.mnavbar{
    position: relative;
    z-index: 4;
}


</style>