<template>
  <div class="about-container">
      <p class="about-text">
          The future of live event lies in the ability for the auidence to play a role in creating the experience they are in.
      </p>
  </div>
</template>

<script>
export default {
    components: {},
    props:[],
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

    .about-container {
        width: 100%;
        height: auto;
        margin-bottom: 120px;
        padding: 15px;
        color: white;
        font-family: Reader;
    }

    .about-text {
        width: 80%;
        height: auto;
        margin: auto;
        font-size: 48px;
    }

</style>