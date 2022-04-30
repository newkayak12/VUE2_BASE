import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//css
import '@/assets/css/reset.css'
import '@/assets/css/main.scss'

//import Services
import User from '@/common/service/UserSvc'

//prototype
Vue.prototype.$User = User

//Library
import moment from 'moment'
import vuelidate from 'vuelidate'
import VueObserveVisibility from 'vue-observe-visibility'
//Use
Vue.use(moment)
Vue.use(vuelidate)
Vue.use(VueObserveVisibility)

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
