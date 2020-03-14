<template>
  <div class="site-container">
    <Home></Home>
  </div>  
</template>

<script>
  import Home from '@/views/Home.vue';

export default {
  components: {Home},
  props: [],
  data() {
    return {

    }
  }
}
</script>

<style>

  * {
    box-sizing: border-box;
  }
  
  html{
    width: 100vw;
    height: 100vh;
    background-color: #000000;
  }
    
  body {
    width: 100vw;
    height: 100vh;
    padding: 0;
    margin: 0;
  }

  .site-container {
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    z-index: 10;
    opacity: 1;

    transition: opacity .6s;
  }

</style>