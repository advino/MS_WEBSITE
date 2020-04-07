<template>
  <div class="main-container">
    
    <div class="info-container">
        <img src="~@/assets/jupiter.png" alt="" class="render">

        <div class="quarter">
            <h1 class="studio-title">Mixed Signals</h1>
            <span class="studio-blurb">
                Design and technology studio based in New York & San Francisco
            </span>
        </div>

        <div class="quarter">
            <h1 class="studio-title">About</h1>
            <span class="studio-about">
                The future of live events lies in the ability for the auidence to play a role in shaping the event's experience.
                <br />
                <br />
                We leverage the data created in live space to create tools the audience can use to contribute to their shared experience.
                <br />
                <br />
            </span>

            <h1 class="studio-title">Team</h1>
            <span style="display: block; width: 75%; font-size: 20px; margin-bottom: 15px; ">Danielle Moalem <br/> Creative Direction & Marketing</span>
            <span style="display: block; width: 75%; font-size: 20px; margin-bottom: 15px; ">Advait Kalakkad <br/> Product & UX</span>

        </div>

        <div class="quarter">
            <span class="studio-events">
                <h1 class="studio-title">Events</h1>
                <div v-for="e in events" :key="e.info">
                    <Item :data="e"></Item>
                </div>
            </span>           
        </div>

        <div class="quarter">
            <h1 class="studio-title">Contact</h1>
            <span class="studio-links">Instagram</span>
            <span class="studio-links">Email</span>
            <span class="studio-links">Press</span>
            <span class="studio-links">Twitter</span>


        </div>
    </div>
  </div>
</template>

<script>

    import Item from '@/components/Item';

export default {
    components: { Item },
    props: ['url'],
    data() {
        return {
            option: [
                "audio-visual tools",
                "live experiences",
                "digital communities"
            ],
            bgs: [
                require("@/assets/flowers_1.jpg"),
                require("@/assets/backdrop2.jpg"),
                require("@/assets/backdrop3.jpg")
            ],
            count: 0,
            hover: false,
            events: [
                {
                    info: "Online // April 2020",
                    title: "Mixed Signals Listening Party",
                    copy: "Coming Soon!"
                },
                {
                    info: "Brooklyn, NYC // Feb 2020",
                    title: "Short Circut",
                    copy: "A collaboration with Brooklyn based DJ collective. We demoed our updated experience to an auidence of over 300 people."
                },
                {
                    info: "Providence, RI // May 2019",
                    title: "Rave in the Commons",
                    copy: "Mixed Signals first event. An interactive experience featuring DJ Brutalist Ikea, DJ Daddy Long Legs, and DJ Mister World Wides."
                }
            ]
        }
    },
    computed: {
        changeBG() {
            return 'url(' + this.bgs[this.count] + ')';
        }
    },
    methods: {
        showImage(c) {
            this.count = c;

            this.toggleHover();
        },
        toggleHover() {
            this.hover = !this.hover;
        }
    }
}
</script>

<style>
    .main-container {
        position: relative;
        width: 100%;
        min-height: 100%;
        height: 100%;
        font-family: Maison Neue;
        color: black;
        background-color: lightgrey;
        overflow-y: hidden;
        scroll-snap-align: start;
        scroll-snap-stop: always;
        /* z-index: 3; */
    }

    .info-container {
        position: relative;
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 100%;
        padding: 10px;
        padding-top: 30px;
        z-index: 0;
        background-color: lightgray;

    }

    .quarter {
        width: 25%;
        height: 100%;
        z-index: 6;
    }

    .half {
        width: 50%;
        height: 100%;
    }

    .studio-title {
        margin: 0;
        margin-bottom: 20px;
        font-size: 36px;
        font-weight: 400;
        /* background-color: #000; */
         mix-blend-mode: difference;

    }

    .studio-blurb {
        display: inline-block;
        width: 75%;
        font-size: 20px;
        margin-bottom: 24px;
         mix-blend-mode: difference;

    }

    .studio-links {
        display: block;
        margin-bottom: 10px;
        font-size: 20px;
        text-decoration: underline;
        cursor: pointer;
        color: black;
         mix-blend-mode: difference;

    }

    .studio-about {
        display: inline-block;
        width: 75%;
        font-size: 20px;
        margin-bottom: 40px;;
    }

  @keyframes render-rotate {
    from {transform: rotate(0);}
    to {transform: rotate(360deg);}
  }


    .render {
        position: absolute;
        width: 1100px;
        height: auto;
        bottom: -100px;
        left: -200px;
        animation: render-rotate 40s linear infinite;
        z-index: 0;
    }
</style>