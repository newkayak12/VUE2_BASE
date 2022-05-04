<template>
<div>
  {{ modalContent }}
</div>
</template>

<script>
export default {
  name: "Test-component",
  props:{
    modalContent:{
      type:Object
    }
  }
}
</script>

<style scoped>

</style>