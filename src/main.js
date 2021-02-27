import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
// import { Header, Swipe, SwipeItem, Button, Lazyload } from 'mint-ui'
import MintUI from 'mint-ui'
import VuePreview from 'vue-preview'
import moment from 'moment'
import app from './App.vue'
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
import 'mint-ui/lib/style.css'
import router from './router'
import './mock'

Vue.use(VuePreview)
Vue.use(MintUI)
Vue.use(VueRouter)
Vue.use(VueResource)
// Vue.use(Lazyload)

Vue.config.devtools = true
Vue.http.options.root = 'http://vue-shopping-mall/data/'
Vue.http.options.emulateJSON = true

// Vue.component(Header.name, Header)
// Vue.component(Swipe.name, Swipe)
// Vue.component(SwipeItem.name, SwipeItem)
// Vue.component(Button.name, Button)

Vue.filter('dateFormat', function (dateStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
    return moment(dateStr).format(pattern)
})

var vm = new Vue({
    el: '#app',
    router,
    render: c => c(app)
})