import * as THREE from "three";

export default function putLight() {
  // WHite light
  const pointLight = new THREE.PointLight(0x505050, 0.3);
  pointLight.position.set(5, 5, 0);
  window.SCENE.add(pointLight);

  const purpleLight = new THREE.PointLight(0xc33764, 1);
  purpleLight.position.set(-5, 5, 0);
  window.SCENE.add(purpleLight);

  const blueLight = new THREE.PointLight(0x1d2671, 1);
  blueLight.position.set(5, -5, 0);
  window.SCENE.add(blueLight);

  if (process.env.NODE_ENV === "development") {
    // Light helpers
    const lightHelper = new THREE.PointLightHelper(pointLight);
    window.SCENE.add(lightHelper);
    const purpleLightHelper = new THREE.PointLightHelper(purpleLight);
    window.SCENE.add(purpleLightHelper);
    const blueLightightHelper = new THREE.PointLightHelper(blueLight);
    window.SCENE.add(blueLightightHelper);

    // GUI
    window.WHITE_LIGHT.add(pointLight.position, "x");
    window.WHITE_LIGHT.add(pointLight.position, "y");
    window.WHITE_LIGHT.add(pointLight.position, "z");

    window.PURPLE_LIGHT.add(purpleLight.position, "x");
    window.PURPLE_LIGHT.add(purpleLight.position, "y");
    window.PURPLE_LIGHT.add(purpleLight.position, "z");

    window.BLUE_LIGHT.add(blueLight.position, "x");
    window.BLUE_LIGHT.add(blueLight.position, "y");
    window.BLUE_LIGHT.add(blueLight.position, "z");
  }
}
