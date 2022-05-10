
console.log("Hello 🌎");
const btn = document.querySelector("button");

if (btn){
  btn.onclick = function(){
    btn.classList.toggle("dipped");
  };}


var i = 0;
function barButton() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("bar");
    var width = 10;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width + "%";
      }
    }
  }
}