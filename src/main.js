import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import { Header, Swipe, SwipeItem } from 'mint-ui'
import app from './App.vue'
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
import router from './router'
import './mock'


Vue.config.devtools = true
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

var vm = new Vue({
    el: '#app',
    router,
    render: c => c(app)
})