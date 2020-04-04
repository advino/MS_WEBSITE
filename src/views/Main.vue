<template>
  <div class="main-container">
    <div class="bg" :class="{'image-hover': hover}" :style="{backgroundImage: changeBG}"> 

    </div>
    <div class="info-container">
        <div class="quarter">
            <h1 class="studio-title">Mixed Signals</h1>
            <span class="studio-blurb">
                Design and technology studio
            </span>
            <span class="studio-links" @click="showImage(0)" >
                {{option[0]}} →
            </span>
            <span class="studio-links" @click="showImage(1)" >
                {{option[1]}} →
            </span>
            <span class="studio-links" @click="showImage(2)" >
                {{option[2]}} →
            </span>
        </div>
        <div style="width: 5%; height: 100%;">

        </div>
        <div class="quarter">
            <h1 class="studio-title">About</h1>
            <span class="studio-about">
                The future of live events lies in the ability for the auidence to play a role in shaping the event's experience.
                <br />
                <br />
                We asked ourselves if there was a way that the vast expanse of data emitted at these events could create a feedback loop in which technology provided a medium by which the auidence could augment their experience rather than just document it.
            </span>
        </div>
        <div style="width: 5%; height: 100%;">

        </div>
        <div class="quarter">
            <span class="studio-events">
                <h1 class="studio-title">Events</h1>
                <div v-for="e in events" :key="e.info">
                    <Item :data="e"></Item>
                </div>
            </span>           
        </div>
        <div style="width: 5%; height: 100%;">

        </div>
        <div class="quarter">
            <h1 class="studio-title">Contact</h1>
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
                    copy: "A collaboration with Brooklyn based DJ collective, Short Circut. We demoed our updated experience to an auidence of over 300 people."
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
        font-family: Reader;
        color: white;
        background-color: black;
        overflow: scroll;
    }

    .bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        min-height: 100%;
        height: 100%;
        background-size: cover;
        background-position: center;
        filter: blur(25px);
        z-index: 0;
        transition: background-image linear .25s, filter .75s;
    }

    .info-container {
        position: relative;
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 100%;
        padding: 25px;
        z-index: 1;
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
        font-size: 20px;
        font-weight: 400;
    }

    .studio-blurb {
        display: inline-block;
        font-size: 20px;
        margin-bottom: 24px;
    }

    .studio-links {
        display: block;
        margin-bottom: 10px;
        font-size: 20px;
        text-decoration: underline;
        cursor: pointer;
    }

    .studio-about {
        font-size: 20px;
    }
</style>