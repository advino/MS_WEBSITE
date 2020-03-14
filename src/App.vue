<template>
  <div class="site-container">
    <Description></Description>
    <div id="spacer">

    </div>
    <div class="event-list">
      <div class="event-unit" v-for="e in events" :key="e.title">
        <Event :data="e"></Event>
      </div>
    </div>
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
    background-color: #000000;
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

  .event-unit {
    width: 25%;
  }


  #spacer {
    width: 100%; 
    height: 60%;
  }

  @media (min-width: 200px) and (max-width: 599px) {
    .event-unit {
      width: 100%;
    }

    .description-title {
      font-size: 28px;
    }

    .description-text {
      font-size: 20px;
      width: 100%;
    }

    #spacer {
      height: 30%;
    }
  }

  @media (min-width: 600px) and (max-width: 800px) {

    .event-unit {
      width: 33%;
    }
  }

  @media (min-width: 700px) and (max-width: 900px) {
    #spacer {
      height: 60%;
    }
  } 

  @media (min-width: 1000px) and (max-width: 1100px) {
    #spacer {
      height: 60%;
    }
  }

  @media (min-width: 1200px) {
    #spacer {
      height: 65%;
    }
  }

  @media (min-width: 600px) and (max-width: 800px) {
        .description-title {
            font-size: 32px;
        }

        .description-text {
            font-size: 24px;
            width: 60%;
        }
    }

</style>