import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//css
import '@/assets/css/reset.css'
import '@/assets/css/main.scss'

//import Services
import ModalState from "@/common/service/ModalState";
import SpinnerState from "@/common/service/SpinnerState";
import ModalList from "@/common/service/ModalList";
import Constants from "@/common/constants/ConstantCode";
import UserSvc from '@/common/service/UserSvc'

//prototype
Vue.prototype.$UserSvc = UserSvc
Vue.prototype.$ModalState = new ModalState(store)
Vue.prototype.$SpinnerState = new SpinnerState(store)
Vue.prototype.$ModalList =  ModalList
Vue.prototype.$Constants = Constants

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
