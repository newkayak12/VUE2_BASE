<template>
  <div>
<!--    spinner -->
  </div>
</template>

<script>
export default {
  name: "Spinner",
  computed:{
    spinner(){
      return this.$store.getters('layout/getSpinner')
    }
  }
}
</script>

<style scoped>

</style>