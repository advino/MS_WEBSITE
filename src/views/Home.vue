<template>
  <div class="home-container">
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

  .home-container {
      width: 100%;
      min-height: 100%;
      height: 100%;
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
    height: 50%;
  }

  @media (min-width: 320px) and (max-width: 425px) {
    .description-title {
      font-size: 24px;
    }

    .description-text {
      width: 100%;
      font-size: 20px;
    }

    #spacer {
      height: 30%;
    }

    .event-unit {
      width: 100%;
    }
  }

  @media (min-width: 426px) and (max-width: 768px) {
    .description-title {
      font-size: 36px;
    }

    .description-text {
      width: 100%;
      font-size: 24px;
    }

    #spacer {
      height: 50%;      
    }

    .event-unit {
      width: 100%;
    }
  }

  @media (min-width: 1024px) and (max-width: 1300px) {
    #spacer {
      height: 40%;
    }
  }

</style>