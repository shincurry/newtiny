import Vue from 'vue'
import App from './App.vue'
import store from './store'

// import vant ui framework
import Vant from 'vant'
import 'vant/lib/vant-css/index.css'
Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
