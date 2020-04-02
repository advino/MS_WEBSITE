<template>
  <div class="item-container">
      <h5>{{ data.info }}</h5>
      <h2>{{ data.title }}</h2>
      <p>
          {{ data.copy }}
      </p>
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
    .item-container {
        max-width: 400px;
        margin-right: 50px;
        color: white;

    }
</style>