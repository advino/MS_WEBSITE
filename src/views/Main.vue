<template>
  <div class="main-container">
    <div class="bg" :class="{'image-hover': hover}" :style="{backgroundImage: changeBG}"> 

    </div>
    <div style="position: relative; width: 95%; margin: auto; margin-bottom: 60px; padding: 30px; padding-top: 70px; z-index: 1;">
        <span :class="{'text-hover': hover}" class="main-text">
            Mixed Signals is a design and technology studio
        </span>
        <span :class="{'text-hover': hover && count !== 0}" class="main-text" @mouseover="showImage(0)" @mouseout="toggleHover">
            {{ option[0] }},
        </span>
        <span :class="{'text-hover': hover && count !== 1}" class="main-text" @mouseover="showImage(1)" @mouseout="toggleHover">
            {{ option[1] }},
        </span>
        <span :class="{'text-hover': hover && count !== 2}" class="main-text" @mouseover="showImage(2)" @mouseout="toggleHover">
            {{ option[2] }}
        </span>
    </div>
    <!-- <img  class="about-image" style="" :src="bgs[count].toString()"> -->
    <!-- <img v-if="count == 1 && hover" class="about-image" style="" src="~@/assets/backdrop2.jpg"> -->
    <!-- <img v-if="count == 2 && hover" class="about-image" style="" src="~@/assets/backdrop3.jpg"> -->
  </div>
</template>

<script>
export default {
    component: {},
    props: ['url'],
    data() {
        return {
            option: [
                "creating audio-visual tools",
                "hosting live experiences",
                "building digital communities"
            ],
            bgs: [
                require("@/assets/flowers_1.jpg"),
                require("@/assets/backdrop2.jpg"),
                require("@/assets/backdrop3.jpg")
            ],
            count: 0,
            hover: false
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
        scroll-snap-align: start;
        scroll-snap-stop: always;
        font-family: Reader;
        border-bottom-style: solid;
        background-color: black;
        overflow: scroll;
    }

    .mission {
        padding: 20px;
        font-size: 120px;
        border: solid black;
        border-radius: 100px;
    }

    .bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        /* background-color: black; */
        background-size: cover;
        background-position: center;
        background-image: url('~@/assets/cds_2.jpg');
        filter: blur(50px);
        z-index: 0;

        transition: background-image .75s, filter .75s;
    }


    .about-image {
        position: absolute;
        max-width: 700px;
        height: auto;
        top: 50%;
        left: 60%;
        z-index: 3;
    }

    .main-text {
        display: block; 
        margin: auto; 
        text-align: left; 
        color: white; 
        font-size: 140px; 
        opacity: 1; 
        transition: opacity .75s;
    }

    .image-hover {
        filter: blur(0);
    }

    .text-hover {
        opacity: .1;
    }
</style>