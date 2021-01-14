import Vue from 'vue';
import axios from 'axios';
axios.defaults.timeout = 10000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
Vue.prototype.$http = axios;
export default function(param) {
    return Vue.prototype.$http({
        ...param,
    })
}