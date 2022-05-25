<template>
  <div id="app">
    <transition name="spinner">
      <Spinner />
    </transition>
    <transition name="modal">
      <ModalState />
    </transition>
    <div class="contentsLayout">
      <HeaderLayout/>
      <ContentsLayout/>
      <FooterLayout/>
    </div>
  </div>
</template>

<script>
import ModalState from "@/layouts/modal/ModalState";
import Spinner from "@/layouts/spinner/Spinner"
import HeaderLayout from "@/layouts/design/HeaderLayout"
import ContentsLayout from "@/layouts/design/ContentsLayout"
import FooterLayout from "@/layouts/design/FooterLayout"
export default{
  components:{
    ModalState,
    Spinner,
    HeaderLayout,
    ContentsLayout,
    FooterLayout
  }
}
</script>

<style lang="scss">
#app{
  position: relative;
}
.contentsLayout{
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

.modal {
  opacity: 1;
}
.modal-enter-active, .modal-leave-active  {
  transition: opacity 0.4s;
}
.modal-enter, .modal-leave-to {
  opacity: 0;
}
//.modal-enter-active, .modal-leave-active  {
//  transition: all 0.5s ease-out;
//}
//.modal-enter-to, .modal-leave-to {
//  transform:translateY(0px);
//}
//.modal-enter, .modal-leave {
//  transform:translateY(400px);
//}
</style>
