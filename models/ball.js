import * as THREE from "three";

export function putBall() {
  const textureLoader = new THREE.TextureLoader();

  const texture = textureLoader.load("/textures/peanut-butter.jpg");
  const geometry = new THREE.SphereBufferGeometry(0.5, 64, 64);

  const material = new THREE.MeshStandardMaterial({
    color: new THREE.Color(0x101010),
    metalness: 0.7,
    roughness: 0.2,
    normalMap: texture,
  });

  window.BALL = new THREE.Mesh(geometry, material);

  window.SCENE.add(BALL);

  if (process.env.NODE_ENV === "development") {
    window.BALL_GUI.add(BALL.position, "x");
    window.BALL_GUI.add(BALL.position, "y");
    window.BALL_GUI.add(BALL.position, "z");
  }
}

export function updateBall() {
  window.BALL.position.y = window.scrollY * 0.001;
}
