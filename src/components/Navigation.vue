<template>
  <div class="navigation-container">
      <div>
        <div v-for="l in links" :key="l.name" style="display: inline-block; width: 10%; margin-right: 30px;">
          <router-link :to="l.route">
            <h4 class="nav-item">
                {{ l.name }}
            </h4>
          </router-link>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    components: {}, 
    props: [],
    data() {
        return {
            links : [
                {
                    route: '/',
                    name: "HOME"
                },
                {
                    route: '/about',
                    name: "ABOUT"
                }
            ]
        }
    }
}
</script>

<style>
    .navigation-container {
        width: 100%;
        height: auto;
        padding: 10px;
        color: white;
        font-family: Reader;
        font-size: 18px;
        text-decoration: none;
        margin-top: 10px;
    }

    .nav-item {
        width: auto;
        height: auto;
        margin: 0;
    }


</style>