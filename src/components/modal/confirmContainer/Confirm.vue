<template>
  <div class="confirm">
    <div class="modal-header">

    </div>
    <component class="modal-body" />
    <div class="modal-footer">

    </div>
  </div>
</template>

<script>
export default {
  name: "Modal-Component-Confirm",
  props:{
    modalState:{
      type:Object,
      default:{}
    }
  }
}
</script>

<style scoped>
.confirm {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  height: 30vh;
  background: #fff;
  border-radius: 10px;
  z-index: 1;
}

</style>