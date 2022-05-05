<template>
  <div class="headerLayout">
    <img :src="require('@/assets/static/necessaries/logo.png')" alt="" @click="fnGoHome" v-if="header.isLogo" class="logo-btn">
    <img :src="require('@/assets/static/necessaries/back-svgrepo-com.svg')" alt="" class="back-btn" @click="fnGoBack" v-if="header.isBack">
    <h2 class="title-layout">{{header.title}}</h2>
    <img :src="require('@/assets/static/necessaries/home-svgrepo-com.svg')" alt="" class="home-btn" @click="fnGoHome" v-if="header.isHome">
  </div>
</template>

<script>
export default {
  name: "HeaderLayout",
  computed:{
    header(){
      return this.$HeaderControl.getHeader();
    }
  },
  methods:{
    fnGoBack(){
      this.$router.go(-1)
    },
    fnGoHome(){
      this.$router.push('/')
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
  .back-btn{
    position: fixed;
    top:0.5rem;
    left:0.5rem;
    width: 1.6rem;
    height: 1.6rem;
  }
  .logo-btn{
    position: fixed;
    top:0.5rem;
    left:0.5rem;
    width: 2rem;
    height: 2rem;
  }
  .home-btn{
    position: fixed;
    top: 0.5rem;
    right: 0.5rem;
    width: 1.6rem;
    height: 1.6rem;
  }
  .title-layout{
    text-align: center;
  }

</style>