<template>
  <div class="item-container">
      <h5>{{ data.info }}</h5>
      <h2 class="event-title">{{ data.title }}</h2>
      <p>
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
        width: 100%;
        color: white;
        margin-bottom: 60px;
    }

    .event-title {
        text-decoration: underline;
    }

    .event-title:after {
        content: ' ↗';
    }
</style>