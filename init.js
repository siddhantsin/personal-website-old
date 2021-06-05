import * as THREE from "three";
import * as dat from "dat.gui";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export default function init() {
  // Global variables
  window.MOUSE_X = 0;
  window.MOUSE_Y = 0;
  window.TARGET_X = 0;
  window.TARGET_Y = 0;

  // Scene
  window.SCENE = new THREE.Scene();

  // Camera
  window.CAMERA = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  window.CAMERA.position.setZ(2);

  // Renderer
  window.RENDERER = new THREE.WebGLRenderer({
    canvas: document.querySelector("#bg"),
    alpha: true,
  });
  window.RENDERER.setPixelRatio(window.devicePixelRatio);
  window.RENDERER.setSize(window.innerWidth, window.innerHeight);

  // GUI folders
  if (process.env.NODE_ENV === "development") {
    window.GUI = new dat.GUI();
    window.WHITE_LIGHT = window.GUI.addFolder("White Light");
    window.PURPLE_LIGHT = window.GUI.addFolder("Purple Light");
    window.BLUE_LIGHT = window.GUI.addFolder("Blue Light");
    window.BALL_GUI = window.GUI.addFolder("Ball");
  }

  // Orbit Controls
  if (process.env.NODE_ENV === "development") {
    window.CONTROLS = new OrbitControls(
      window.CAMERA,
      window.RENDERER.domElement
    );
  }

  // Render the initial scene
  RENDERER.render(SCENE, CAMERA);
}
