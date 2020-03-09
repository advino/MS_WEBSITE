<template>
  <div class="event-container">
      
    <span class="event-details">
        {{data.details}}
    </span>
    <h3 class="event-title">
       {{data.title}}
    </h3>
    <span class="event-blurb">
        {{data.blurb}}
    </span>
  </div>
</template>

<script>
export default {
    components: {},
    props: ['data'],
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

    .event-container {
        width: 100%;
        height: auto;   
        padding: 15px;
        padding-left: 25px;

        color: white;
        font-family: Reader;
    }

    .event-title {
        display: block;
        width: 100%;
        height: auto;
        margin: 0;
        margin-bottom: 10px;
        font-size: 22px;
    }

    .event-details {
        display: block;
        width: 100%;
        height: auto;
        margin-bottom: 10px;
        font-size: 14px;
    }

    .event-blurb {
        display: block;
        width: 100%;
        height: auto;
        margin-bottom: 20px;
    }


</style>