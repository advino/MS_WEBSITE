<template>
  <div class="site-container">
    <Navigation></Navigation>
    <router-view>

    </router-view>
  </div>  
</template>

<script>
  import Navigation from '@/components/Navigation.vue';

  export default {
  
    components: { Navigation },
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

  a {
    text-decoration: none;
    color: white;
  }
  
  html{

    min-height: 100%;
    width: 100%;
    height: 100%;
    background-color: #000000;
  }
    
  body {
    width: 100%;
    min-height: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
  }

  .site-container {
    width: 100%;
    min-height: 100%;
    height: 100%;
    overflow-y: scroll;
    z-index: 10;
    opacity: 1;
    padding: 10px;
    transition: opacity .6s;

   
  }
</style>