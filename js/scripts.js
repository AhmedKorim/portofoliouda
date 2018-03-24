/*sizing the slider*/
var slider =  document.querySelector('.slider'),
    nav = document.querySelector("nav"),
    resize = function () {
        slider.style.height = (window.innerHeight - nav.clientHeight) + "px"
    };
  resize();
  window.addEventListener("resize",function () {
      resize();
  },false);
/*sizing the slider*/