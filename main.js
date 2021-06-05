import "./style.css";
import init from "./init";
import initEventListeners from "./eventListeners";
import { putBall } from "./models/ball";
import putLight from "./models/light";
import animate from "./animate";

init(); // Initializes CAMERA, RENDERER, SCENE
initEventListeners();

putBall();
putLight();

animate();
