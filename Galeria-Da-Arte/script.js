const bar = document.getElementById("bar")
let DBUsado = 1

var width = 0;
var id = setInterval(frame, 100);

function frame() {
if(width >= 25){
bar.style.background = "blue"
}
if(width >= 50){
bar.style.background = "yellow"
}
if(width >= 75){
bar.style.background = "orange"
}
if(width >= 99){
bar.style.background = "red"
}
  
if (width >= DBUsado) {
clearInterval(id);
}else{
width++;
bar.style.width = width + "%";
bar.innerHTML = width + "%";}
}
