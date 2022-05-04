<template>
  <div :class="popup">
    <div class="modal-header" v-if="modalState.isHeader">
      <img :src="backBtn" alt="" class="modal-back-btn" @click="fnClose" v-if="modalState.isBack">
      <h1 class="modal-title">{{modalState.modalTitle}}</h1>
      <img :src="xBtn" alt="" class="modal-close-btn" @click="fnClose" v-if="modalState.isClose">
    </div>
    <component :is="modalState.modalName"
               :class="bodyClass" class="round-bottom"
               :modalContent="modalState.modalContent"
    />
  </div>
</template>

<script>
export default {
  name: "Modal-Component-Popup",
  beforeMount() {
    document.body.style.overflow='hidden'
  },
  beforeDestroy() {
    document.body.style.overflow=''
  },
  props:{
    modalState:{
      type:Object,
      default:{}
    }
  },
  data(){
    return {
      xBtn:require('@/assets/static/necessaries/x-symbol-svgrepo-com.svg'),
      backBtn:require('@/assets/static/necessaries/back-svgrepo-com.svg')
    }
  },
  computed:{
    popup(){
      if(this.modalState.isFull){
        return 'popupFull'
      }
      return 'popup'
    },
    bodyClass(){
      let result = ''

      if(this.modalState.isFull){
        result+=' full-modal-body'
      }else{
        result += ' modal-body'
      }

      if(!this.modalState.isHeader){
        result+= ' round-body'
      } else {
        result +=" "
      }
      return result
    },

  },
  methods:{
    fnClose(){
      this.$ModalState.closeModal()
    },
  }
}
</script>

<style scoped>
.popup {
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-height: 60vh;
  min-height: 20vh;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  background: #fff;
}
.popupFull {
  position: absolute;
  z-index: 1;
  top: 0%;
  left: 0%;
  height: 100%;
  width: 100%;
  /*max-height: 60vh;*/
  /*min-height: 20vh;*/
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  background: #fff;
}
.round-body{
  border-radius: 10px 10px 0 0;
}
.round-bottom{
  border-radius: 0 0 10px 10px;
}
.modal-header{
  background-color: white;
  width: 100%;
  height: 50px;
  padding: 1rem;
  border-radius: 10px 10px 0 0;
  border-bottom: 2px solid rgba(238, 238, 238, 0.74);
}
.modal-title{
  text-align: center;
}
.modal-close-btn{
  position: fixed;
  top:13px;
  right:1.2rem;
  width: 1rem;
  height: 1rem;
}
.modal-back-btn{
  position: fixed;
  top:14px;
  left:1.2rem;
  width: 1rem;
  height: 1rem;
}
.modal-body{
  width: 100%;
  padding: 30px;
  max-height: calc(60vh - 100px);
  min-height: 20vh;
  overflow-y: scroll;
  background: white;
}
.full-modal-body{
  width: 100%;
  padding: 30px;
  height: calc(100vh - 50px);
  overflow-y: scroll;
  background: white;
}

</style>