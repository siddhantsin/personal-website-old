import "./style.css";
import * as THREE from "three";
import init from "./init";

// Initialized CAMERA, RENDERER, SCENE
init();

const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshBasicMaterial({
  color: "orange",
  wireframe: true,
});
const torus = new THREE.Mesh(geometry, material);

SCENE.add(torus);

function animate() {
  requestAnimationFrame(animate);

  torus.rotation.y += 0.002;

  RENDERER.render(SCENE, CAMERA);
}

animate();
