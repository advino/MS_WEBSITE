<template>
  <div class="description-container">
      <h1 class="description-title">MIXED SIGNALS</h1>
      <span class="description-text">
        Mixed Signals is a design and technology studio 
        building real-time tools to augment live events 
        across digital and physical spaces.
      </span>
  </div>
</template>

<script>
export default {
    components: {},
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
        font-family: Fat;
        src: url('~@/assets/1.otf');
    }

    .description-container {
        width: 100%;
        height: auto;
        padding: 15px;
        padding-left: 25px;
        overflow-y: scroll;
    }

    .description-title {
        width: 100%;
        margin: 0;
        margin-bottom: 10px;
        font-size: 48px;
        color: #fff;
        font-family: Fat;
    }

    .description-text {
        display: block;
        width: 50%;
        font-size: 28px;
        color: #fff;
        font-family: Reader;
    }
</style>