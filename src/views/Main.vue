<template>
  <div class="main-container">
    
    <div class="info-container">
        <!-- <img  v-if="hover" src="~@/assets/jupiter.png" alt="" class="render"> -->

        <div class="quarter">
            <h1 class="studio-title">Mixed Signals</h1>
            <span class="studio-about">
                Design and technology studio based in New York & San Francisco.
            </span>
        </div>

        <div class="quarter">
            <h1 class="studio-title">About</h1>
            <span class="studio-about">
                The future of live events lies in the ability for the auidence to play a role in shaping the event's experience.
                <br />
                <br />
                We leverage the data created in live spaces to develop tools audiences can use to contribute to their shared experience.
                <br />
                <br />
            </span>

            <h1 class="studio-title">Team</h1>
            <span class="studio-about">Danielle Moalem <br/> Creative Direction & Partnerships</span>
            <br />

            <br />
            <span class="studio-about">Advait Kalakkad <br/> Product & UX</span>
        </div>

        <div class="quarter">
            <span class="studio-events">
                <h1 class="studio-title">Events</h1>
                <div v-for="e in events" :key="e.info">
                    <Item @hovered="toggleHover" :data="e"></Item>
                </div>
            </span>           
        </div>

        <div class="quarter">
            <h1 class="studio-title">Contact</h1>
            <span class="studio-links">Email</span>
            <span class="studio-links"><a target="_blank" href="https://twitter.com/MixedSignals_19"> Archive</a> </span>
        </div>

    </div>
    <div class="legal-container">
        <span>Copyright © 2020 Mixed Signals LLC, All rights reserved.</span>
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
                    copy: "Coming Soon."
                },
                {
                    info: "Brooklyn, NYC // Feb 2020",
                    title: "Short Circuit",
                    copy: "A collaboration with Brooklyn based DJ collective. We demoed our updated experience to an audience of over 300 people."
                },
                {
                    info: "Providence, RI // May 2019",
                    title: "Rave in the Commons",
                    copy: "Mixed Signals first event. An interactive experience featuring DJ Brutalist Ikea, DJ Daddy Long Legs, and DJ Mister Worldwides."
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
    }

    .info-container {
        position: relative;
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 95%;
        padding: 10px;
        padding-top: 30px;
        background-color: lightgrey;

    }

    .legal-container {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        height: 5%;
        padding: 10px;
        background-color: black;
        color: white;
        font-family: Maison Neue;
        font-size: 18px;
    }

    .quarter {
        width: 25%;
        height: 100%;
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

    }

    .studio-links {
        display: block;
        margin-bottom: 10px;
        font-size: 20px;
        text-decoration: underline;
        cursor: pointer;
        color: black;

    }

    .studio-about {
        display: inline-block;
        width: 75%;
        font-size: 20px;
    }

    .render {
        position: absolute;
        width: 600px;
        height: auto;
        top: 50%;
        left: 50%;
        animation: render-rotate 40s linear infinite;
        z-index: 100;
        transform: translate(-50%, -50%);
    }


    @media (min-width: 320px) and (max-width: 425px) {

        .main-container {
            height: auto;
            overflow-y: scroll;
        }

        .info-container {
            flex-direction: column;
            justify-content: flex-start;
            
        }

        .quarter {
            width: 100%;
            height: auto;
            margin-bottom: 25px;
        }
        
        .studio-title {
            font-size: 24px;
            line-height: 32px;
            margin-bottom: 10px;
        }

        .studio-about {
            width: 100%;
            font-size: 18px;
        }
    }

    @media (min-width: 426px) and (max-width: 768px) {
        .main-container {
            min-height: 100%;
            overflow-y: scroll;
        }

        .info-container {
            flex-direction: row;
            justify-content: flex-start;
            flex-wrap: wrap;
        }

        .quarter {
            width: 50%;
            height: auto;
            margin-bottom: 30px;
        }

        .studio-title {
            font-size: 32px;
            margin-bottom: 10px;
        }

        .studio-about {
            width: 90%;

        }
    }
</style>