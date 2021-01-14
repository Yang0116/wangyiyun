import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { Button, Form, Swipe, SwipeItem, Lazyload, Toast, Field } from 'vant';
import VueTouch from 'vue-touch' //移动端插件
// import Vuex from 'vuex';
import store from '../vuex/index';

Vue.use(VueTouch, { name: 'v-touch' })
Vue.config.productionTip = false;
// Vue.use(Vuex);
Vue.use(Button);
Vue.use(Toast);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Form);
Vue.use(Field);
Vue.use(Lazyload, {
    lazyComponent: true,
});


new Vue({
    router,
    render: h => h(App),
    store,
}).$mount('#app')