let dpr = window.devicePixelRatio;
let meta = document.createElement("meta");
meta.setAttribute("content", "width=device-width,initial-scale=" + 1 / dpr);
document.addEventListener("DOM,ContentLoaded", () => {
  document.getElementsByTagName("html")[0].style.fontSize =
    window.innerWidth / 10 + "px";
  document.body.style.fontSize = 16 * dpr + "px";
});
