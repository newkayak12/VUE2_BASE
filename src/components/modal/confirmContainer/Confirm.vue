<template>
  <div :class="confirm">
    <div class="modal-header" v-if="modalState.isHeader">
      <h1 class="modal-title">{{modalState.modalTitle}}</h1>
      <img :src="xBtn" alt="" class="modal-close-btn" @click="fnClose" v-if="modalState.isClose">
    </div>
    <div :class="bodyClass">
      {{modalState.modalContent.data.contents}}
    </div>
    <div class="modal-footer" v-if="modalState.isFooter">
      <button @click="fnNegativeCallBackClose" :style="`background:${negativeBtn}`">{{ modalState.modalContent.data.negativeCloseLetter }}</button>
      <button @click="fnPositiveCallBackClose" :style="`background:${positiveBtn}`">{{ modalState.modalContent.data.positiveCloseLetter }}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal-Component-Confirm",
  beforeMount() {
    document.body.style.overflow='hidden'
    this.positiveBtn = this.$Constants.MAIN_THEME_COLOR.FIRST
    this.negativeBtn = this.$Constants.MAIN_THEME_COLOR.SECOND
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
      xBtn:require('@/assets/static/necessaries/close-svgrepo-com.svg'),
      backBtn:require('@/assets/static/necessaries/back-svgrepo-com.svg'),
      positiveBtn:'',
      negativeBtn:''
    }
  },
  computed:{
    confirm(){
      if(this.modalState.isFull){
        return 'confirmFull'
      }
      return 'confirm'
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
    fnPositiveCallBackClose(){
      if(this.modalState.modalContent.confirmPositiveCallBack){
        this.modalState.modalContent.confirmPositiveCallBack()
      }
      this.$ModalState.closeModal()
    },
    fnNegativeCallBackClose(){
      if(this.modalState.modalContent.confirmNegativeCallBack){
        this.modalState.modalContent.confirmNegativeCallBack()
      }
      this.$ModalState.closeModal()
    }
  }
}
</script>

<style scoped>
.confirm {
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
.confirmFull {
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
.modal-back-btn{
  position: fixed;
  top:13px;
  left:1.2rem;
  width: 1rem;
  height: 1rem;
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
.full-modal-body{
  width: 100%;
  padding: 30px;
  height: calc(100vh - 100px);
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
.modal-footer button:nth-child(1) {
  background: none;
  border-right: #ffffff 1px solid;
  border-radius: 0 0 0 10px;
  outline: none;
  border: none;
  padding: 5px 20px;
  width: 100%;
  height: 50px;
  color: #fff;
}
.modal-footer button:nth-child(2) {
  background: none;
  border-left: #ffffff  1px solid;
  border-radius: 0 0 10px 0;
  outline: none;
  border: none;
  padding: 5px 20px;
  width: 100%;
  height: 50px;
  color: #fff;
}

</style>