import Vue from 'vue'
import VueRouter from 'vue-router'
import spinnerState from "@/common/service/SpinnerState";
import modalState from "@/common/service/ModalState";
import HeaderControl from "@/common/service/HeaderControl";
import store from "../store";;
const spinner = new SpinnerState(store)
const headerControl = new HeaderControl(store)

/**
 * meta (헤더 설정)
 * title:타이틀 (중간)
 * isLogo:로고노출 (좌측 상단)
 * isBack:뒤로 가기 (좌측 상단)
 * isHome:홈으로 가기 (우측 상단)
 */

Vue.use(VueRouter)

//page
import Main from '@/views/main/index'
import SpinnerState from "@/common/service/SpinnerState";

const routes = [
  {
    path: '/',
    component:Main,
    meta:{title:'HOME', isLogo:true, isBack:false, isHome:false}

  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior:((to, from, savedPosition) => {
    if(savedPosition){
      return savedPosition
    }
    return {x:0,y:0}
  }),
})
router.beforeEach((to, from, next) =>{
  spinner.activeSpinner(false)
  const header = to.meta
  headerControl.setHeader(header.title, header.isLogo, header.isBack, header.isHome)

  next()
  setTimeout(() => {spinner.deActiveSpinner()}, 1000)

})
export default router
