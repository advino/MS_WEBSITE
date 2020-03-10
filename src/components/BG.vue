<template>
  <div id="canvas-container">

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
    mounted() {

        const sketch = p => {

            let demo1Shader, img, fft, audio;

            p.preload = () => {
                audio = p.loadSound('~@/assets/sounds/wav1_terekke.mp3');
                demo1Shader = p.loadShader('~@/shaders/base.vert', '~@/shaders/main.frag');
                img = p.loadImage('~@/assets/backdrop.jpg');
            }

            p.setup = () => {
                
                p.pixelDensity(1);
                p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);

                fft = new P5.FFT();
                p.shader(demo1Shader);



                demo1Shader.setUniform('u_resolution', [p.windowWidth, p.windowHeight])
                demo1Shader.setUniform('u_texture', img)
                demo1Shader.setUniform('u_tResolution', [img.width, img.height])

                toggleAudio();
            }

            p.draw = () => {
                fft.analyze()

                const bass = fft.getEnergy("bass")
                const treble = fft.getEnergy("treble")
                const mid = fft.getEnergy("mid")

                const mapBass = p.map(bass, 0, 255, 10, 15.0)
                const mapTremble = p.map(treble, 0, 255, 0, 0.0)
                const mapMid = p.map(mid, 0, 255, 0.0, 0.1)

                demo1Shader.setUniform('u_time', p.frameCount / 20)
                demo1Shader.setUniform('u_bass', mapBass)
                demo1Shader.setUniform('u_tremble', mapTremble)
                demo1Shader.setUniform('u_mid', mapMid)

                p.rect(0,0, p.width, p.height)
            }

            p.windowResized = () => {
                p.resizeCanvas(p.windowWidth, p.windowHeight)
                demo1Shader.setUniform('u_resolution', [p.windowWidth, p.windowHeight])
            }

            let toggleAudio = () => {
                if (audio.isPlaying()) {
                    audio.pause()
                } else {
                    audio.loop()
                }
            }
        }

        new P5(sketch, "canvas-container");
    }
}
</script>

<style>
    #canvas-container {
        position: fixed;
        width: 100%;
        height: auto;
        left: 0;
        top: 0;
        z-index: 0;
    }
</style>