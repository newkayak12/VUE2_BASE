<template>
  <div>
    <button @click="modal">modal</button>
  </div>
</template>

<script>
export default {
  name: "main-index",
  methods:{
    modal(){
      // this.$ModalState.alert("hi", "hi", true, true, "hi", null);
      this.$ModalState.confirm("hi", "hi", true, true, false, 'po', 'ne', null, null)
    }
  }
}
</script>

<style scoped>

</style>