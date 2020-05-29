<template>
  <div class="rsvp-container" :class="{'rsvp-active': state}">
    <div class="rsvp-grid">
        <div class="back-container">
                <span @click="closeWindow" style="color: white; font-size: 32px; cursor: pointer;" class="material-icons">
                    arrow_back
            </span>
        </div>
        <div class="half">
            <span class="studio-title">
                Stay in touch!
            </span>
            <span class="studio-about">
                Sign up with your name and email address to stay tuned for news about the studio and upcoming events!
            </span>
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
                <button @click="sendInfo" style="border-color: white; color: white;" class="about-button">SUBMIT</button>
            </div>
        </div>
    </div>

    <div class="rsvp-confirmation" :class="{'success-active': success}">
        <div class="rsvp-text">
            <h1 class="confirmation-title">
                You've been added!
            </h1>
            <p class="confirmation-text">
                Thank you for signing up, we are excited to have you join the party! 
                <br>
                <br>
                You'll receive receive a confirmation email shortly!
                <br>
                <br>
                
            </p>
            <button @click="closeWindow" style="border-color: white; color: white;" class="about-button">
                EXIT
            </button>
        </div>
    </div>

  </div>
</template>

<script>

    import { db } from '@/fb/index';

    export default {
        components: {},
        props: ['state'],
        data() {
            return {
                success: false
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
                    this.sendSuccess();
                }                
            },
            sendSuccess() {
                this.success = true;
            },

            closeWindow() {
                this.success = false;
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
        margin-bottom: 30px;
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
        margin-top: 20px;
    }

    .rsvp-confirmation {
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        padding: 20px;
        background-color: black;
        color: white;
        font-family: Maison Neue;
        z-index: 11;
        opacity: 0;
        transition: opacity .25s;
        pointer-events: none;
    }

    .success-active {
        opacity: 1;
        pointer-events: auto;
    }

    .success-passive {
        opacity: 0;
    }

    .rsvp-text {
        width: 40%;
    }

    .confirmation-title {
        font-size: 48px;
        line-height: 56px;;
    }

    .confirmation-text {
        font-size: 32px;
        line-height: 48px;;
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

        .rsvp-confirmation {
            align-items: start;
        }

        .rsvp-text {
            width: 100%;
        }

        .confirmation-title {
            font-size: 28px; 
            line-height: 40px;;
        }

        .confirmation-text {
            font-size: 20px;
            line-height: 28px;;
        }
    }

</style>