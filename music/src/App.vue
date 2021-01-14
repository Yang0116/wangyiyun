<template>
  <div id="app">
    <hader></hader>
    <router-view></router-view>
    <c-footer></c-footer>
    <play></play>
  </div>
</template>
<script>
import CFooter from './components/common/CFooter.vue';
import Hader from "./components/common/hader.vue";
import Play from './components/common/play.vue';
export default {
  components: {
    Hader,
    CFooter,
    Play,
  },
  methods: {
    windosSize(doc,win) {
      let docEl = doc.documentElement,  //getElementById("luckDraw")
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function() {
            let clientWidth = window.innerWidth;
            let width;
            //if (!clientWidth) return;
            if(clientWidth < 320){
               width = 320; 
            }else if(clientWidth<600){
                 width = clientWidth;
            }
            else{
               width = 600;
            }
            docEl.style.fontSize = 20 * (width / 320) + 'px';
            //宽与高度
            //document.body.style.height = clientWidth * (900 / 1440) + "px"
        };
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);

    }
  },
  created() {
    this.windosSize(document,window);
     //在页面加载时读取sessionStorage里的状态信息
    if (sessionStorage.getItem("state") ) {
        this.$store.replaceState(Object.assign({}, this.$store.state,JSON.parse(sessionStorage.getItem("state"))))
    } 

    //在页面刷新时将vuex里的信息保存到sessionStorage里
    window.addEventListener("beforeunload",()=>{
        sessionStorage.setItem("state",JSON.stringify(this.$store.state))
    })
  },
};
</script>
<style >
@import url("//at.alicdn.com/t/font_2317356_tre0z9smdgp.css");
@import url("~@/assets/normalize.css");

a {
  color: #666666;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.redColor{
  color: #d81e06 !important;
}

body{
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}

.blackColor{
  color: black;
}
</style>
