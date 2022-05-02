<template>
  <div class="popup">
    <div class="modal-header">

    </div>
    <component class="modal-body" />
    <div class="modal-footer">

    </div>
  </div>
</template>

<script>
export default {
  name: "Modal-Component-Popup",
  props:{
    modalState:{
      type:Object,
      default:{}
    }
  },
  computed:{
    fullSize(){
      return ``
    },
    defaultSize(){
      return
      `top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 90%;
      height: 30vh;
      background: #fff;
      border-radius: 10px;`
    }
  },
  methods:{
    isFullSize(){
      if(this.modalState.isFull){
        return this.fullSize
      }
      return this.defaultSize
    }
  }
}
</script>

<style scoped>
.popup {
  position: absolute;
  z-index: 1;
}

</style>