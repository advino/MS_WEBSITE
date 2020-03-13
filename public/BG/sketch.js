const s = (p) => {
    let demo1Shader, img, fft, audio;
    let app, appToggle, canvas;

    let canvasReady = false;

    let on, off;
    let vol = 0;
    let volDelta = 0;

    let imageIdx = 1;

    p.preload = () => {

      imageIdx = Math.ceil(Math.random() * 4);


      audio = p.loadSound('BG/sounds/wav1_terekke.mp3')
      demo1Shader = p.loadShader('BG/shaders/base.vert', 'BG/shaders/main.frag')
      img = p.loadImage(`BG/backdrop${imageIdx}.jpg`);
    }
  
    p.setup = () => {

        p.pixelDensity(1);
        p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
  
        fft = new p5.FFT();
        p.shader(demo1Shader);
  
        demo1Shader.setUniform('u_resolution', [p.windowWidth, p.windowHeight]);
        demo1Shader.setUniform('u_texture', img);
        demo1Shader.setUniform('u_tResolution', [img.width, img.height]);
      
        appToggle = document.getElementById("bg");
        app = document.querySelector('.site-container');
        canvas = document.getElementById("canvas-container");
        on = document.getElementById('on');
        off = document.getElementById('off');

        appToggle.addEventListener('click', () => {
          toggleAudio();
        });

        canvasReady = true;
 
        p.masterVolume(0);
      }
  
    p.draw = () => {

      fft.analyze();
  
      const bass = fft.getEnergy("bass");
      const treble = fft.getEnergy("treble");
      const mid = fft.getEnergy("mid");
  
      const mapBass = p.map(bass, 0, 255, 10, 15.0);
      const mapTremble = p.map(treble, 0, 255, 0, 0.0);
      const mapMid = p.map(mid, 0, 255, 0.0, 0.1);
  
      demo1Shader.setUniform('u_time', p.frameCount / 20);
      demo1Shader.setUniform('u_bass', mapBass);
      demo1Shader.setUniform('u_tremble', mapTremble);
      demo1Shader.setUniform('u_mid', mapMid);
  
      p.rect(0,0, p.width, p.height);

      volDelta = p.lerp(volDelta, vol, .01);

      p.masterVolume(vol, .6);

      if(canvasReady) {
        canvas.classList.add('canvas-active');
        canvasReady = false;
      }
    }
  
    p.windowResized = () => {
      p.resizeCanvas(p.windowWidth, p.windowHeight);
      demo1Shader.setUniform('u_resolution', [p.windowWidth, p.windowHeight]);
    }
  
    toggleAudio = () => {

      if(!audio.isPlaying()) {
        audio.loop();
      }

      if(vol == .6) {
        vol = 0;
        // audio.pause();
        app.removeAttribute('id');
        on.style.display = 'block';
        off.style.display = 'none';
        console.log("Pause");
      } else {
        // audio.loop();
        vol = .6;
        app.setAttribute('id', 'app-passive');
        on.style.display = 'none';
        off.style.display = 'block';
        console.log("Play");
      }
    }
  };
  
  new p5(s, "canvas-container");