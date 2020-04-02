<template>
  <div class="site-container">

    <Main></Main>
    <About></About>
    <Events></Events>
  </div>  
</template>

<script>
  import Main from '@/views/Main';
  import About from '@/views/About';
  import Events from '@/views/Events';

  export default {
  
    components: { Main, About, Events },
    props: [],
    data() {
      return {

      }
    }
  }
</script>

<style>

  @font-face {
    font-family: Reader;
    src: url('~@/assets/Reader-Regular.otf');
  }

  @font-face {
    font-family: Voyage;
    src: url('~@/assets/Voyage-Regular.otf');
  }

  * {
    box-sizing: border-box;
    cursor: crosshair;
    text-decoration: none;
    user-select: none;
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
    background-color: #000000;

  }

  .site-container {
    width: 100%;
    min-height: 100%;
    height: 100%;
    overflow: scroll;
    scroll-snap-type: y mandatory;
    background-color: #000000;

  }
</style>