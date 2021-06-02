import * as THREE from "three";

export default function init() {
  // Scene
  window.SCENE = new THREE.Scene();

  // Camera
  window.CAMERA = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  window.CAMERA.position.setZ(30);

  // Renderer
  window.RENDERER = new THREE.WebGLRenderer({
    canvas: document.querySelector("#bg"),
  });
  window.RENDERER.setPixelRatio(window.devicePixelRatio);
  window.RENDERER.setSize(window.innerWidth, window.innerHeight);

  // Render the initial scene
  RENDERER.render(SCENE, CAMERA);

  window.addEventListener("resize", onWindowResize, false);
}

function onWindowResize() {
  window.CAMERA.aspect = window.innerWidth / window.innerHeight;
  window.CAMERA.updateProjectionMatrix();
  window.RENDERER.setSize(window.innerWidth, window.innerHeight);
}
