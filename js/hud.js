// js/hud.js — 상단 상태바의 UTC 시계 ([data-clock] 요소마다 1초마다 갱신)
const clocks = document.querySelectorAll("[data-clock]");

function tick() {
    const now = new Date().toISOString().slice(11, 19);
    clocks.forEach((node) => { node.textContent = now; });
}

tick();
setInterval(tick, 1000);
