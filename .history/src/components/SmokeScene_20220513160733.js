import * as THREE from 'three';
import Vue from "vue";

export default class SmokeScene extends  Vue
{
  constructor(p) {
    super()

    this.camera = null;
    this.clock = null;
    this.scene = null;
    this.renderer = null;
    this.geometry = null;
    this.material = null;
    this.mesh = null;
  }



   init() {
    //stats = new Stats();
    //stats.setMode(0);
    //stats.domElement.style.position = 'absolute';
//  stats.domElement.style.left = '0px';
    //stats.domElement.style.top = '0px';
    // $('body').append(stats.domElement);

    clock = new THREE.Clock();

    renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.z = 1000;
    scene.add(camera);


    let light = new THREE.DirectionalLight(0xffffff, 0.5);
    light.position.set(-1, 0, 1);
    scene.add(light);

    let smokeTexture = THREE.ImageUtils.loadTexture('https://s3-us-west-2.amazonaws.com/s.cdpn.io/95637/Smoke-Element.png');
    let smokeMaterial = new THREE.MeshLambertMaterial({
      color: 0x515351,
      opacity: 0.9,
      map: smokeTexture,
      transparent: true
    });
    let smokeGeo = new THREE.PlaneGeometry(300, 300);
    let smokeParticles = [];


    for (p = 0; p < 150; p++) {
      var particle = new THREE.Mesh(smokeGeo, smokeMaterial);
      particle.position.set(Math.random() * 500 - 250, Math.random() * 500 - 250, Math.random() * 1000 - 100);
      particle.rotation.z = Math.random() * 360;
      scene.add(particle);
      smokeParticles.push(particle);
    }

    //$('.newbody').append( renderer.domElement );

  }

  animate() {

    // note: three.js includes requestAnimationFrame shim
    stats.begin();
    delta = clock.getDelta();
    requestAnimationFrame(animate);
    evolveSmoke();
    render();
    stats.end();
  }

    evolveSmoke() {
    var sp = smokeParticles.length;
    while (sp--) {
      smokeParticles[sp].rotation.z += (delta * 0.2);
    }
  }

   render() {

    mesh.rotation.x += 0.005;
    mesh.rotation.y += 0.01;
    cubeSineDriver += .01;
    mesh.position.z = 100 + (Math.sin(cubeSineDriver) * 500);
    renderer.render(scene, camera);

  }
}