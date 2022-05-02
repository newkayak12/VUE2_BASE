<template>
  <div id="app">
    <transition name="spinner">
      <Spinner />
    </transition>
    <transition>
      <ModalState />
    </transition>

    <button @click="test">modal</button>
  </div>
</template>

<script>
import ModalState from "@/layouts/modal/ModalState";
import Spinner from "@/layouts/spinner/Spinner"
export default{
  components:{
    ModalState,
    Spinner
  },
  methods:{
    test(){
      this.$ModalState.alert("[공지]", '예진이는 귀엾스빈다. 고로 괴롭혀야합니다.', true, null, true )
    }
  }
}
</script>

<style lang="scss">
#app{
  position: relative;
}
.spinner {
  opacity: 1;
}
.spinner-enter-active, .spinner-leave-active  {
  transition: opacity 1s;
}
.spinner-enter, .spinner-leave-to {
  opacity: 0;
}
</style>
