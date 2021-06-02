import {
  S as n,
  P as i,
  W as e,
  T as w,
  M as o,
  a as d,
} from "./lib.0c7e19db.js";
function E() {
  (window.CAMERA.aspect = window.innerWidth / window.innerHeight),
    window.CAMERA.updateProjectionMatrix(),
    window.RENDERER.setSize(window.innerWidth, window.innerHeight);
}
(window.SCENE = new n()),
  (window.CAMERA = new i(75, window.innerWidth / window.innerHeight, 0.1, 1e3)),
  window.CAMERA.position.setZ(30),
  (window.RENDERER = new e({ canvas: document.querySelector("#bg") })),
  window.RENDERER.setPixelRatio(window.devicePixelRatio),
  window.RENDERER.setSize(window.innerWidth, window.innerHeight),
  RENDERER.render(SCENE, CAMERA),
  window.addEventListener("resize", E, !1);
const t = new d(
  new w(10, 3, 16, 100),
  new o({ color: "orange", wireframe: !0 })
);
SCENE.add(t),
  (function n() {
    requestAnimationFrame(n),
      (t.rotation.y += 0.002),
      RENDERER.render(SCENE, CAMERA);
  })();
