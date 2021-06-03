import "./style.css";
import init from "./init";
import initEventListeners from "./eventListeners";
import { putName } from "./models/name";
import putLight from "./models/light";

init(); // Initializes CAMERA, RENDERER, SCENE
initEventListeners();

putName();
putLight();

function animate() {
  requestAnimationFrame(animate);

  CONTROLS.update();
  RENDERER.render(SCENE, CAMERA);
}

animate();
