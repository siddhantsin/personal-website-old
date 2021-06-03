export default function initEventListeners() {
  window.addEventListener("resize", onWindowResize, false);
}

function onWindowResize() {
  window.CAMERA.aspect = window.innerWidth / window.innerHeight;
  window.CAMERA.updateProjectionMatrix();
  window.RENDERER.setSize(window.innerWidth, window.innerHeight);
}
