const s = (p) => {
    let demo1Shader, img, fft, audio;
  
    let app;

    p.preload = () => {
      audio = p.loadSound('BG/sounds/wav1_terekke.mp3')
      demo1Shader = p.loadShader('BG/shaders/base.vert', 'BG/shaders/main.frag')
      img = p.loadImage('BG/backdrop.jpg');

    }
  
    p.setup = () => {

  
        p.pixelDensity(1);
        p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
  
        fft = new p5.FFT()
        p.shader(demo1Shader);
  
        demo1Shader.setUniform('u_resolution', [p.windowWidth, p.windowHeight]);
        demo1Shader.setUniform('u_texture', img);
        demo1Shader.setUniform('u_tResolution', [img.width, img.height]);
      
        app = document.querySelector(".site-container");
        console.log(app); 
  
    }
  
    p.draw = () => {
      fft.analyze()
  
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
    }
  
    p.windowResized = () => {
      p.resizeCanvas(p.windowWidth, p.windowHeight);
      demo1Shader.setUniform('u_resolution', [p.windowWidth, p.windowHeight]);
    }
  
    toggleAudio = () => {
      if(audio.isPlaying()) {
        audio.pause();
        app.removeAttribute('id');
        console.log("Pause");
      } else {
        audio.loop();
        app.setAttribute('id', 'app-passive');
        console.log("Play");
      }
    }
    
    window.addEventListener('click', () => {
      toggleAudio();
    });

    
  };
  
  new p5(s, "canvas-container");