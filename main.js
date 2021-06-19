import "./style.css";
import init from "./init";
import initEventListeners from "./eventListeners";
import { putBall } from "./models/ball";
import putLight from "./models/light";
import animate from "./animate";
import { putPhone } from "./models/phone";

init(); // Initializes CAMERA, RENDERER, SCENE1
initEventListeners();

putBall();
putLight();

animate();
