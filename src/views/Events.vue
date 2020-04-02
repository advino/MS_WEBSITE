<template>
  <div class="events-container">
      <div class="event-row">
          <div v-for="e in events" :key="e.title">
              <EventItem :data="e"></EventItem>
          </div>
      </div>
  </div>
</template>

<script>
    import EventItem from '@/components/EventItem';

export default {
    components: {EventItem},
    props: [],
    data() {
        return {
            events: [
                {
                    info: "Online // April 2020",
                    title: "Mixed Signals Listening Party",
                    copy: "Coming Soon!"
                },
                {
                    info: "Brooklyn, NYC // Feb 2020",
                    title: "Short Circut",
                    copy: "A collaboration with Brooklyn based DJ collective, Short Circut. We demoed our updated experience to an auidence of over 300 people."
                },
                {
                    info: "Providence, RI // May 2019",
                    title: "Rave in the Commons",
                    copy: "Mixed Signals first event. An interactive experience featuring DJ Brutalist Ikea, DJ Daddy Long Legs, and DJ Mister World Wides."
                }
            ]
        }
    }
}
</script>

<style>
    .events-container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        min-height: 100%;
        height: 100%;
        background-size: cover;
        background-position: center;
        background-image: url('~@/assets/backdrop3.jpg');
        scroll-snap-align: start;
        scroll-snap-stop: always;
        font-family: Reader;
    }

    .event-row {
        display: flex;
        justify-content: flex-start;
    }
</style>