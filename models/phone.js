import { Scene } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import gsap from "gsap";

const gltfLoader = new GLTFLoader();

export function putPhone() {
  gltfLoader.load("textures/untitled.gltf", (gltf) => {
    gltf.scene.rotation.order = 'YXZ';
    gltf.scene.scale.set(0.3, 0.3, 0.3)
    gltf.scene.position.set(0, 0, 0);
    gltf.scene.rotation.set(3.15, 0, 1.57);
    window.SCENE2.add(gltf.scene);

    if (process.env.NODE_ENV === "development") {
      window.PHONE_GUI.add(gltf.scene.position, "x");
      window.PHONE_GUI.add(gltf.scene.position, "y");
      window.PHONE_GUI.add(gltf.scene.position, "z");

      window.PHONE_GUI.add(gltf.scene.rotation, "x").min(0).max(7);
      window.PHONE_GUI.add(gltf.scene.rotation, "y").min(0).max(7);
      window.PHONE_GUI.add(gltf.scene.rotation, "z").min(0).max(7);
    }

    // Animations
    window.TIMELINE.to(gltf.scene.rotation, { y: 1.58, duration: 1})
    window.TIMELINE.to(gltf.scene.scale, { x: 0.12, y: 0.12, z: 0.12, duration: 1}, "-=1")
    window.TIMELINE.to(gltf.scene.rotation, { y: 0.7, duration: 1})
    window.TIMELINE.to(gltf.scene.position, { x: 1, duration: 1}, "-=1")
    window.TIMELINE.to('#intro', { opacity: 1}, "-=1")
    // Scroll animation
    window.addEventListener("scroll", onMouseScroll);

    function onMouseScroll() {
      if (window.scrollY >  ((3 / 4) * window.innerHeight + window.innerHeight) && window.PHONE_RENDERED) {
          gltf.scene.position.y = (window.scrollY - ((3 / 4) * window.innerHeight + window.innerHeight))  * (0.0005);
      }
    }
  });
}

