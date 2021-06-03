import * as THREE from "three";

export default function putLight() {
  // Lights
  const pointLight = new THREE.PointLight(0xffffff);
  pointLight.position.set(5, 5, 5);
  window.SCENE.add(pointLight);

  const lightHelper = new THREE.PointLightHelper(pointLight);
  window.SCENE.add(lightHelper);
}
