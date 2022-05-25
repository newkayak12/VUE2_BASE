import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//css
import '@/assets/css/reset.css'
import '@/assets/css/main.scss'

//import prototype
import ModalState from "@/common/service/common/ModalState";
import SpinnerState from "@/common/service/common/SpinnerState";
import ModalList from "@/common/service/common/ModalList";
import Constants from "@/common/constants/ConstantCode";
import HeaderControl from "@/common/service/common/HeaderControl";
import FooterControl from "@/common/service/common/FooterControl"

//prototype
Vue.prototype.$ModalState = new ModalState(store)
Vue.prototype.$SpinnerState = new SpinnerState(store)
Vue.prototype.$HeaderControl = new HeaderControl(store)
Vue.prototype.$FooterControl =  FooterControl
Vue.prototype.$ModalList =  ModalList
Vue.prototype.$Constants = Constants


//import Svc
import UserSvc from '@/common/service/UserSvc'
//Svc
Vue.prototype.$UserSvc = UserSvc

//Library
import dayjs from 'vue-dayjs'
import vuelidate from 'vuelidate'
import {ObserveVisibility} from 'vue-observe-visibility'
import _ from 'lodash'

//Use
Vue.use(dayjs)
Vue.use(vuelidate)
Vue.directive('observe', ObserveVisibility)
Vue.use(_)
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
























console.info(" * * * * * * * * * * * * * * * * * * * * * * * *  ")
console.info("*   ______                 _              _      *")
console.info("*   | ___ \\               (_)            | |     *")
console.info("*   | |_/ / _ __   ___     _   ___   ___ | |_    *")
console.info("*   |  __/ | '__| / _ \\   | | / _ \\ / __|| __|   *")
console.info("*   | |    | |   | (_) |  | ||  __/| (__ | |_    *")
console.info("*   \\_|    |_|    \\___/   | | \\___| \\___| \\__|   *")
console.info("*                        _/ |                     * * * * * * *")
console.info("*   ______              |__/    _   _                  _____   *")
console.info("*   | ___ \\                    | | | |                / __  \\   *")
console.info("*   | |_/ /  __ _  ___   ___   | | | | _   _   ___    `' / /'   *")
console.info("*   | ___ \\ / _` |/ __| / _ \\  | | | || | | | / _ \\     / /   *")
console.info("*   | |_/ /| (_| |\\__ \\|  __/  \\ \\_/ /| |_| ||  __/   ./ /___   *")
console.info("*   \\____/  \\__,_||___/ \\___|   \\___/  \\__,_| \\___|   \\_____/   *")
console.info(" * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *  ")


