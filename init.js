import * as THREE from "three";
import * as dat from "dat.gui";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

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
  window.CAMERA.position.setX(30);
  window.CAMERA.position.setY(30);

  // Renderer
  window.RENDERER = new THREE.WebGLRenderer({
    canvas: document.querySelector("#bg"),
  });
  window.RENDERER.setPixelRatio(window.devicePixelRatio);
  window.RENDERER.setSize(window.innerWidth, window.innerHeight);

  // GUI
  window.GUI = new dat.GUI();

  // Orbit Controls
  window.CONTROLS = new OrbitControls(
    window.CAMERA,
    window.RENDERER.domElement
  );

  // Render the initial scene
  RENDERER.render(SCENE, CAMERA);
}
