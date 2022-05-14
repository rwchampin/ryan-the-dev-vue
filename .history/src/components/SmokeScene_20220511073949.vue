<template></template>
<script setup>
import * as THREE from 'three';
var camera, scene, renderer,
    geometry,delta, textGeo, textMaterial,light,text, textTexture, material,cubeSineDriver,smokeTexture, smokeGeo, smokeMaterial, smokeParticles, mesh;

init();
animate();

function init() {



    renderer = new THREE.WebGLRenderer({alpha: true});
    renderer.setSize( window.innerWidth, window.innerHeight );

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
    camera.position.set(0,0,0)
    scene.add( camera );



    THREE.ImageUtils.crossOrigin = ''; //Need this to pull in crossdomain images from AWS



    light = new THREE.DirectionalLight(0xff0000,1);
    light.position.set(0,50,0);
    scene.add(light);

    smokeTexture = new THREE.TextureLoader().load('https://s3-us-west-2.amazonaws.com/s.cdpn.io/95637/Smoke-Element.png');
    smokeMender() {

    renderer.render( scene, camera );

}
</script>
    smokeMaterial = new THREE.MeshLambertMaterial({color: 0x515351, opacity: 0.9, map: smokeTexture, transparent: true});
    smokeGeo = new THREE.PlaneGeometry(300,300);
    smokeParticles = [];


    for (let p = 0; p < 850; p++) {
        var particle = new THREE.Mesh(smokeGeo,smokeMaterial);
        particle.position.set(window.innerWidth * .5, window.innerHeight * .5, 0);
        particle.rotation.z = Math.random() * 360;
        scene.add(particle);
        smokeParticles.push(particle);
    }

   document.body.append( renderer.domElement );

}

function animate() {

    // note: three.js includes requestAnimationFrame shim


    requestAnimationFrame( animate );
    evolveSmoke();
    render();

}

const sizes = {x: window.innerWidth, y: window.innerHeight, halfHeight: window.innerHeight * .5, halfWidth: window.innerWidth * .5};

function evolveSmoke() {
    var sp = smokeParticles.length;
    while(sp--) {

const radian = (Math.PI * 2 ) / 30;
smokeParticles[sp].position.x = Math.cos(radian * sp) * sizes.x;
smokeParticles[sp].position.y = Math.sin(radian * sp) * sizes.y;
        smokeParticles[sp].rotation.z += (delta * 0.2);
    }
}

