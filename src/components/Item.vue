<template>
  <div class="item-container">
      <h5 class="event-info">{{ data.info }}</h5>
      <h2 @mouseover="toggleHovered" @mouseout="toggleHovered" class="event-title">{{ data.title }} ↗</h2>
      <p class="event-description">
          {{ data.copy }}
      </p>
  </div>
</template>

<script>
export default {
    name: 'Item',
    components: {},
    props: ['data'],
    data() {
        return {

        }
    },
    methods: {
        toggleHovered() {
            this.$emit('hovered');
        }
    }
}
</script>

<style>
    .item-container {
        width: 80%;
        color: black;
        margin-bottom: 60px;
    }

    .event-info {
        font-size: 16px;
        margin: 0;
        margin-bottom: 10px;
        font-weight: 700;
    }

    .event-title {
        margin: 0;
        margin-bottom: 10px;
        font-size: 20px;
        font-weight: 400;
        text-decoration: underline;
    }

    .event-description {
        margin: 0;
        font-size: 20px;
    }


    @media (min-width: 320px) and (max-width: 425px) {
        .item-container {
            width: 100%;
            margin-bottom: 30px;
        }

        .event-info {
            font-size: 14px;
            margin-bottom: 10px;
        }

        .event-title {
            font-size: 18px;
            margin-bottom: 10px;
        }
        
        .event-description {
            font-size: 18px
        }
    }
</style>