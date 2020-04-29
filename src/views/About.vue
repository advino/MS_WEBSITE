<template>
    <div class="about-container">
        <div class="about-image">
            <img src="~@/assets/facelogo-03.png" alt="" class="ms-logo">
        </div>
        <div class="about-text">
            <div class="about-col">
                <h1 class="about-title">Mixed Signals</h1>
                <h1 class="about-body">
                   Design and technology studio creating <span class="">digital tools</span> for live experiences.
                </h1>

            </div>

            <div class="about-col">
                <h1 class="about-title">Coming Soon</h1>
                <h1 class="about-body">
                    Mixed Signals Virtual Listening Party
                    <br />
                    May 2, 2020 @ 10PM EST
                </h1>
                <div style="display: flex; justify-content: space-between; width: 100%; ">
                <button @click="relay" class='about-button'>RSVP HERE</button>

                <span style="display: block; block; font-size: 56px; color: black;" class="material-icons">
                    arrow_downward
                </span>
                </div>

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
            
        }
    },
    methods: {
        relay() {
            this.$emit('toggle');
        }
    }
}
</script>

<style>
    .about-container {
        width: 100%;
        min-height: 100%;
        height: 100%;
        padding: 10px;
        scroll-snap-align: start;
        scroll-snap-stop: always;
        z-index: 0;

    }

    .about-image {
        position: relative;
        width: 100%;
        height: 75%;
        margin: auto;
        margin-bottom: 30px;
        background-position: center;
        background-size: cover;
        background-image: url('~@/assets/2(smaller).gif');
    }

    .about-text {
        display: flex;
        flex: 2;
        width: 100%;
        height: 25%;
        justify-content: space-between;
    }

    .about-col {
        display: block;
        width: 100%;
        height: auto;
    }

    .about-title {
        display: block;
        margin: 0;
        margin-bottom: 10px;
        font-size: 64px;
        font-family: Maison Neue;
        font-weight: 400;
        letter-spacing: -2px;
        line-height: 76px;
        color: black;
    }

    .about-body {
        max-width: 70%;
        height: auto;
        display: block;
        margin: 0;
        margin-bottom: 20px;
        font-size: 36px;
        font-family: Maison Neue;
        font-weight: 400;
        letter-spacing: -1.0x;
        line-height: auto;
        color: black;
    }


    .about-button {
        display: block;
        width: 30%;
        height: auto;
        padding: 15px;
        background-color: transparent;
        border: solid black 2px;
        border-radius: 40px;
        font-family: Maison Neue;
        font-size: 28px;
        outline: none;
        cursor: pointer;
    }

    .ms-logo {
        position: absolute;
        width: 75px;
        height: auto;
        bottom: 20px;
        right: 20px;
    }

    @media (min-width: 320px) and (max-width: 425px)  {
        .about-image {
            height: 50%;
            margin-bottom: 10px;
        }
        .about-text {
            flex-direction: column;
            justify-content: flex-start;
            height: 40%;
        }

        .about-col {
            width: 100%;
            height: auto;
            margin-bottom: 5px;
        }

        .about-title {
            font-size: 30px;
            line-height: 36px;
            margin-bottom: 0px;
        }

        .about-body {
            max-width: 100%;
            font-size: 24px;
            margin-bottom: 12px;
        }

        .about-button {
            width: 50%;
            padding: 10px;
            font-size: 20px;
        }

        .ms-logo {
            width: 45px;
        }
    }

    @media (min-width: 426px) and (max-width: 768px) {
        .about-image {
            height: 60%;
            margin-bottom: 20px;
        }

        .about-text {
            flex-direction: row;
            height: 40%;
        }

        .about-col {
            width: 50%;
            height: 100%;
            margin-bottom: 0;
        }

        .about-title {
            font-size: 44px;
            line-height: 56px;
            margin-bottom: 10px;
        }

        .about-body {
            max-width: 90%;
            font-size: 28px;
        }

        .about-button {
            width: 50%;
            font-size: 24px;
        }

        .ms-logo {
            width: 56px;
        }
    }

    @media (min-width: 769px) and (max-width: 1024px) {
        .about-image {
            height: 60%;
            margin-bottom: 25px;
        }

        .about-text {
            flex-direction: row;
            height: 30%;
            margin-bottom: 0;
        }

        .about-col {
            width: 50%;
            height: 100%;
            margin-bottom: 0;
        }

        .about-title {
            font-size: 48px;
            line-height: 56px;
            margin-bottom: 10px;
        }

        .about-body {
            max-width: 90%;
            font-size: 32px;
        }  

        .about-button {
            width: 40%;
            font-size: 24px;
        }

        .ms-logo {
            width: 64px;
        }
    }

    @media (min-width: 1025px) and (max-width: 1440px) {
        .about-image {
            height: 65%;
            margin-bottom: 20px;
        }

        .about-text {
            flex-direction: row;
            height: 30%;
            margin-bottom: 0;
        }

        .about-col {
            width: 50%;
            height: 100%;
            margin-bottom: 0;
        }

        .about-title {
            font-size: 48px;
            line-height: 56px;
            margin-bottom: 5px;
        }

        .about-body {
            max-width: 90%;
            font-size: 32px;
            line-height: 40px;
        }

        .about-button {
            width: 30%;
            font-size: 24px;
        }

        .ms-logo {
            width: 75px;
        }
    }

    @media (min-width: 1441px) {
        .about-image {
            height: 70%;
            margin-bottom: 20px;
        }

        .about-text {
            flex-direction: row;
            height: 30%;
        }

        .about-col {
            width: 50%;
            height: 100%;
        }

        .about-title {
            font-size: 64px;
            line-height: 76px;
            margin-bottom: 5px;
        }

        .about-body {
            max-width: 90%;
            font-size: 36px;
            line-height: 44px;
        }

    }


</style>