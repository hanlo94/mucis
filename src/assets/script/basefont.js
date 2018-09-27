let dpr = window.devicePixelRatio;
meta.setAttribute("content", "initial-scale=" + 1/dpr + ", maximum-scale=" + 1/dpr + ", minimum-scale=" + 1/dpr + ", user-scalable=no")
document.addEventListener("DOMContentLoaded" , function () {
    document.getElementsByClassName("html")[0].style.fontSize = window.innerWidth / 10 + "px";
})