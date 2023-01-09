const btn = document.querySelector("[dipped]");
const AreaDeTexto = document.getElementsByTagName("textarea");
const UPinput = document.querySelector("#UP1");
const UP2input = document.querySelector("#UP2");

if(btn){
  btn.onclick = function(){
    btn.classList.toggle("dipped");}
  }


if (UPinput){
  UPinput.onclick = function(){
    UPinput.classList.toggle("dipped");};
}
if (UP2input){
  UP2input.onclick = function(){
    UP2input.classList.toggle("dipped");
  };}
  
function FullScreen(){
  document.documentElement.requestFullscreen();
}


for (let i = 0; i < AreaDeTexto.length; i++) {
  AreaDeTexto[i].setAttribute("style", "height:" + (AreaDeTexto[i].scrollHeight) + "px");
  AreaDeTexto[i].addEventListener("input", AoDigitar, false);
}

function AoDigitar() {
  this.style.height = 0;
  this.style.height = (this.scrollHeight) + "px";
}