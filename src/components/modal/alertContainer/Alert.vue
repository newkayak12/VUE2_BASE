<template>
  <div class="alert">
    <div class="modal-header" v-if="modalState.isHeader">
      <h1 class="modal-title">{{modalState.modalTitle}}</h1>
      <img :src="xBtn" alt="" class="modal-close-btn" @click="fnClose">
    </div>
    <div class="modal-body">
      {{modalState.modalContent.data.contents}}
    </div>
    <div class="modal-footer" v-if="modalState.isFooter">
       <button @click="fnCallBackClose" :style="`background:${btnColor}`" >{{ modalState.modalContent.data.closeLetter }}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal-Component-Alert",
  beforeMount() {
    this.btnColor = this.$Constants.MAIN_THEME_COLOR.FIRST
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
      btnColor:'',
      xBtn:require('@/assets/static/necessaries/close-svgrepo-com.svg'),
    }
  },
  methods:{
    fnClose(){
      this.$ModalState.closeModal()
    },
    fnCallBackClose(){
      if(this.modalState.modalContent.alertCallBack){
        this.modalState.modalContent.alertCallBack()
      }
      this.$ModalState.closeModal()
    }
  }

}
</script>

<style scoped>
.alert {
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-height: 60vh;
  min-height: 20vh;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  background: #fff;
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
.modal-body{
  width: 100%;
  padding: 30px;
  max-height: calc(60vh - 100px);
  min-height: 20vh;
  overflow-y: scroll;
  background: white;
}
.modal-footer{
  height: 50px;
  background: white;
  border-radius: 0 0 10px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-footer button {
  background: none;
  border-radius: 0 0 10px 10px;
  outline: none;
  border: none;
  padding: 5px 20px;
  width: 100%;
  height: 50px;
  color: #fff;
}
</style>