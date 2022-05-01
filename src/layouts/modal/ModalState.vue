<template>
  <div style="position: relative; width: 100%; height: 100vh;">
    <div class="dimmer"></div>
    <div class="confirm"></div>
    <div class="alert"></div>
    <div class="pop"></div>
  </div>
</template>

<script>
export default {
  name: "ModalState"
}
</script>

<style scoped>
.dimmer {
  position: absolute;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
}
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