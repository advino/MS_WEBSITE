<template>
    <div class="about-container">
        <div class="about-image">
            <img src="~@/assets/facelogo-03.png" alt="" class="ms-logo">
        </div>
        <div class="about-text">
            <div class="about-col">
                <h1 class="about-title">Mixed Signals</h1>
                <h1 class="about-body">
                    DESIGN AND TECHNOLOGY STUDIO CREATING <span class="">DIGITAL TOOLS</span> FOR LIVE EXPERIENCES
                </h1>

            </div>

            <div class="about-col">
                <h1 class="about-title">Coming Soon</h1>
                <h1 class="about-body">
                    MIXED SIGNALS ONLINE
                    <br />
                    APRIL 18th @ 10PM

                </h1>
            </div>
            
        </div>
        
    </div>
</template>

<script>
export default {

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
        background-image: url('~@/assets/backdrop2.jpg');
    }

    .about-text {
        display: flex;
        width: 100%;
        height: 25%;
        justify-content: space-between;
    }

    .about-col {
        display: inline-block;
        width: 50%;
        height: 100%;
    }

    .about-title {
        display: block;
        margin: 0;
        margin-bottom: 20px;
        font-size: 56px;
        font-family: Maison Neue;
        font-weight: 400;
        letter-spacing: -2px;
        line-height: 64px;
        color: black;
    }

    .about-body {
        max-width: 70%;
        height: 100%;
        display: block;
        margin: 0;
        font-size: 36px;
        font-family: Maison Neue;
        font-weight: 400;
        letter-spacing: -1.0x;
        line-height: auto;
        color: black;
    }
    .about-highlight {
        
        padding: 5px;
        padding-left: 10px;
        padding-right: 10px;
        padding-top: 10px;
        background-color: black;
        border: solid black 2px;
        border-radius: 100px;
        line-height: 0;;
        color: white;
    }

    .ms-logo {
        position: absolute;
        width: 75px;
        height: auto;
        bottom: 20px;
        right: 20px;
    }


</style>