import * as THREE from "three";

export function putName() {
  const loader = new THREE.FontLoader();

  loader.load("fonts/helvetiker_regular.typeface.json", function (font) {
    const geometry = new THREE.TextGeometry("SIDDHANT", {
      font: font,
      size: 20,
      height: 3,
    });

    const material = new THREE.MeshStandardMaterial({
      color: "orange",
    });

    const name = new THREE.Mesh(geometry, material);

    window.SCENE.add(name);

    window.GUI.add(name.position, "x");
    window.GUI.add(name.position, "y");
    window.GUI.add(name.position, "z");
  });
}
