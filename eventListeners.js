import { updateBall } from "./models/ball";

export default function initEventListeners() {
  window.addEventListener("resize", onWindowResize, false);
  window.addEventListener("mousemove", onMouseMove);
  window.addEventListener("scroll", onMouseScroll);
}

function onWindowResize() {
  window.CAMERA.aspect = window.innerWidth / window.innerHeight;
  window.CAMERA.updateProjectionMatrix();
  window.RENDERER.setSize(window.innerWidth, window.innerHeight);
}

function onMouseMove(e) {
  window.MOUSE_X = e.clientX - window.innerWidth / 2;
  window.MOUSE_X = e.clientY - window.innerHeight / 2;
}

function onMouseScroll(e) {
  updateBall();
}
