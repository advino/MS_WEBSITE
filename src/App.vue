<template>
  <div class="site-container">
    <Description></Description>
    <div style="width: 100%; height: 370px;">

    </div>
    <div class="event-list">
      <div v-for="e in events" :key="e.title" style="width: 25%;">
        <Event :data="e"></Event>
      </div>
    </div>

    <!-- <button id="bg">

    </button> -->
  </div>  
</template>

<script>
  import Description from '@/components/Description.vue';
  import Event from '@/components/Event.vue';

export default {
  components: {Description, Event},
  props: [],
  data() {
    return {
      events: [
        {
          details: "TBD",
          title: "Coming Soon",
          blurb: "Stay tuned for our next event"
        },
        {
          details: "June, 2020 // Spain",
          title: "Sonar",
          blurb: "A collaboration with Soundcloud and Sonar Music Festival. An interactive experience for vistors to engage with musicians attending the festival."
        },
        {
          details: "March, 2020 // London",
          title: "AVA",
          blurb: "A collaboration with Soundcloud and AVA. An interactive experience for vistors to engage with musicians attending the festival."
        },
        {
          details: "February, 2020 // Brooklyn, NY",
          title: "Short Circut",
          blurb: "A collaboration with Brooklyn based DJ collective, Short Circut. We demoed our updated experience to an auidence of over 300 people."
        },
        {
          details: "May, 2019 // Providence, RI",
          title: "Rave in the Commons",
          blurb: "Mixed Signals first event. An interactive experience featuring DJ Brutalist Ikea, DJ Daddy Long Legs, and DJ Mister World Wides"
        }
      ]
    }
  }
}
</script>

<style>
  
  * {
    box-sizing: border-box;
  }
  
  html{
    width: 100vw;
    height: 100vh;
    background-color: #0e0e0e;
  }
    
  body {
    width: 100vw;
    height: 100vh;
    padding: 0;
    margin: 0;
  }

  .site-container {
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    overflow-y: scroll;
    z-index: 10;
    opacity: 1;
    transition: opacity .6s;
  }

  .event-list {
    display: flex;
    width: 100%;
    height: auto;
    flex-direction: row;
    flex-wrap: wrap;
  }

  #bg {
    display: block;
    position: fixed;
    top: 5%;
    right: 5%;
    width: 25px;
    height: 25px;
    border-style: solid; 
    border-radius: 100px;
    border-color: white;
    padding: 10px;
    background-color: none;

  }

</style>