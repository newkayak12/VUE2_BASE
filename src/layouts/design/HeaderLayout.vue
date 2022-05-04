<template>
  <div class="headerLayout">
      <div>
        {{ header }}
      </div>
  </div>
</template>

<script>
export default {
  name: "HeaderLayout",
  computed:{
    header(){
      return this.$HeaderControl.getHeader();
    }
  }
}
</script>

<style scoped>
  .headerLayout{
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 50px;
    padding:1rem;
    z-index: 1;
    background-color: white;
    border-bottom: 2px solid rgba(238, 238, 238, 0.74);
  }

</style>