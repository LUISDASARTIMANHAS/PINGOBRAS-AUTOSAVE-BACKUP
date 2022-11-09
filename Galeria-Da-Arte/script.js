const bar = document.getElementById("bar");
const DBRLabel = document.getElementById("DBRLabel");
let DBUsado = 18
const DBPercent = DBUsado/100;

let DBrestante = 500-DBPercent;
var width = 0;
var id = setInterval(frame, 100);


function frame() {
if(width >= 12){
bar.style.background = "blue"
DBRLabel
}
if(width >= 25){
bar.style.background = "yellow"
}
if(width >= 50){
bar.style.background = "orange"
}
if(width >= 75){
bar.style.background = "red"
}
if(width >= 99){
bar.style.background = "purple"
}
  
if (width >= DBUsado) {
clearInterval(id);
}else{
width++;
bar.style.width = width + "%";
bar.innerHTML = width + "%/100%";
DBRLabel.innerHTML = DBrestante+"/500MB"}
}
