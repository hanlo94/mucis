let dpr = window.devicePixelRatio;
var meta = document.createElement("meta");
meta.setAttribute("name", "viewport");
meta.setAttribute("content", "width=device-width,initial-scale=" + 1/dpr + ", maximum-scale=" + 1/dpr + ", minimum-scale=" + 1/dpr + ", user-scalable=no");
document.getElementsByTagName("head")[0].appendChild(meta);
document.addEventListener("DOMContentLoaded", () => {
  document.getElementsByTagName("html")[0].style.fontSize = window.innerWidth / 10 + "px";
});
