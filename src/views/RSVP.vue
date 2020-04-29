<template>
  <div class="rsvp-container" :class="{'rsvp-active': state}">
    <div class="rsvp-grid">
        <div class="back-container">
                <span @click="closeWindow" style="color: white; font-size: 32px; cursor: pointer;" class="material-icons">
                    arrow_back
            </span>
        </div>
        <div class="half">
            <img class="vlp-img" src="~@/assets/VirtualListeningParty.png">

            <span class="studio-about">
                This is a space to be connected. Not just through music but through a shared experience during a time when each of us is isolated from the other. 
                <br>
                <br>
                Set times will start promptly at 10:00PM EST and the livestream will end at 1:00AM EST. Visuals are done in collaboration with @oyl3.
                <br>
                <br>
                To stay updated on event details and to recieve a link to join the party, register with your name and email.
                <br>
                <br>
                Your name and email WILL NOT be used for anything other than sending you details on the event and links the actual experience. 
                Before the event we will send out an email asking if you'd like to stay informed of future events, you can accept or deny continued correspondance at any time.
            </span>
            <img class="vlp-set" src="~@/assets/SetTimes2.png">        
        </div> 
        <div class="half">
            <span class="studio-title">
                Register
            </span>

            <div class="rsvp-form">
                <span class="studio-about">
                    Name
                </span>
                <input placeholder="Your name" class="rsvp-input" type="text" ref="name">
            </div>

            <div class="rsvp-form">
                <span class="studio-about">
                    Email
                </span>
                <input placeholder="your-email@example.com" class="rsvp-input" type="text" ref="email">
            </div>

            <div>
                <button @click="sendInfo" style="border-color: white; color: white;" class="about-button">SEND</button>
            </div>
        </div>
    </div>
  </div>
</template>

<script>

    import {db} from '@/fb/index';

    export default {
        components: {},
        props: ['state'],
        data() {
            return {
            
            }
        },
        firebase: {
            mailing: db.collection('mailing')
        },
        methods: {
            sendInfo() {
                let name = this.$refs.name;
                let email = this.$refs.email;
                let eArr = email.value.split('@');
                // alert(eArr);
                if(name.value.length > 0 && eArr.length > 1) {
                    db.collection('mailing').add({name: name.value, email: email.value});
                    name.value = '';
                    email.value = '';
                    this.$emit('sent');
                }
            },
            closeWindow() {

                this.$emit('sent');
            }
        }
}
</script>

<style>
    .rsvp-container {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        padding: 20px;
        opacity: 0;
        background-color: #000;
        color: #fff;
        font-family: Maison Neue;

        transition: opacity .25s;
        pointer-events: none;
    }

    .rsvp-grid {
        display: flex; 
        justify-content: flex-start; 
        width: 100%; 
        height: 100%;
    }

    .rsvp-active {
        opacity: 1;
        pointer-events: auto;
    }

    .rsvp-passive {
        opacity: 0;
        background-color: #000;
    }

    .rsvp-form {
        width: 100%;
        height: auto;
    }

    .rsvp-input {
        width: 70%;
        height: auto;
        padding: 15px;
        background-color: transparent;
        border: solid white 1px;
        border-radius: 10px;
        outline: none;

        color: white;
        font-size: 18px;
    }

    .back-container {
        width: 8%;
        height: auto;
        margin-bottom: 20px;
    }

    .vlp-img {
        width: 300px;
        height: auto;
        margin-bottom: 20px;
    }

    .vlp-set {
        width: 60%;
    }

    @media (min-width: 320px) and (max-width: 425px) {
        .rsvp-grid {
            flex-direction: column;
            overflow-y: scroll;
        }

        .half {
            width: 100%;
            height: auto;
            margin-bottom: 40px;
        }

        .vlp-img {
            display: block;
            width: 250px;
            margin: auto;
            margin-bottom: 32px;
        }

        .vlp-set {
            width: 100%;
            height: auto;
        }

        .rsvp-input {
            width: 100%;
            height: auto;
            padding: 12px;
            border-radius: 5px;
        }

        .rsvp-form {
            margin-bottom: 20px;
        }

        .studio-about {
            margin-bottom: 10px;
        }
    }

</style>