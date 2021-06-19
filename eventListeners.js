import { updateBall } from "./models/ball";
import * as THREE from "three";
import { putPhone } from "./models/phone";

export default function initEventListeners() {
  window.addEventListener("resize", onWindowResize, false);
  window.addEventListener("mousemove", onMouseMove);
  window.addEventListener("scroll", onMouseScroll);
}

function onWindowResize() {
  window.CAMERA.aspect = window.innerWidth / window.innerHeight;
  window.CAMERA.updateProjectionMatrix();
  window.RENDERER.setSize(window.innerWidth, window.innerHeight);
  window.RENDERER2.setSize(window.innerWidth, window.innerHeight);
}

function onMouseMove(e) {
  window.MOUSE_X = e.clientX - window.innerWidth / 2;
  window.MOUSE_Y = e.clientY - window.innerHeight / 2;
}

function onMouseScroll(e) {
  updateBall();
  if (window.scrollY >  (3 / 4) * window.innerHeight && !window.PHONE_RENDERED) {
    window.PHONE_RENDERED = true;
    putPhone();
  }
}
