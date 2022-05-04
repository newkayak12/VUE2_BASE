<template>
  <div v-if="modalState.isPopUp||modalState.isConfirm||modalState.isAlert" class="dimmer">
    <Popup
        v-if="modalState.isPopUp"
        :modalState="modalState"
    />
    <Confirm
        v-if="modalState.isConfirm"
        :modalState="modalState"
    />
    <Alert
        v-if="modalState.isAlert"
        :modalState="modalState"
    />
  </div>
</template>

<script>
import Popup from "@/components/modal/popupContainer/Popup";
import Confirm from "@/components/modal/confirmContainer/Confirm";
import Alert from "@/components/modal/alertContainer/Alert";
export default {
  name: "ModalState",
  components:{
    Popup,
    Confirm,
    Alert
  },
  computed:{
    modalState(){
      return this.$store.getters['layout/getModalState']
    }
  }
}
</script>

<style scoped>
.dimmer {
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.2);
}

</style>