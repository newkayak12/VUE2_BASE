import Vue from 'vue'
import Vuex from 'vuex'

//vue Store
import layouts from './layouts'
import user from './User'


Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    layouts,
    user
  }
})
