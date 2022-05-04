<template>
  <div class="footerLayout">
    <div>
      FOOTER
    </div>
  </div>
</template>

<script>
export default {
  name: "footerLayout"
}
</script>

<style scoped>
.footerLayout{
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 50px;
  padding:1rem;
  z-index: 1;
  background-color: white;
  border-top: 2px solid rgba(238, 238, 238, 0.74);
}
</style>