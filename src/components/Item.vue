<template>
  <div class="item-container">
      <h5 class="event-info">{{ data.info }}</h5>
      <h2 class="event-title">{{ data.title }} ↗</h2>
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
        font-weight: 400;
    }

    .event-title {
        margin: 0;
        margin-bottom: 10px;
        font-size: 20px;
        font-weight: 400;
        color: black;
        text-decoration: underline;
    }

    .event-description {
        margin: 0;
        color: black;
        font-size: 20px;
    }
</style>