const bar = document.getElementById("bar");
const DBRLabel = document.getElementById("DBRLabel");
let DBUsado = 98;
const DBrestante = 500-DBUsado/100*10;


var width = 0;
var id = setInterval(frame, 100);

function frame() {
if(width >= 12){
bar.style.background = "blue"
DBRLabel.style.background = "blue"
}
if(width >= 25){
bar.style.background = "yellow"
DBRLabel.style.background = "yellow"
}
if(width >= 50){
bar.style.background = "orange"
DBRLabel.style.background = "orange"
}
if(width >= 75){
bar.style.background = "red"
DBRLabel.style.background = "red"
}
if(width >= 99){
bar.style.background = "purple"
DBRLabel.style.background = "purple"
}
  
if (width >= DBUsado) {
clearInterval(id);
}else{
width++;
bar.style.width = width + "%";
bar.innerHTML = width + "%/100%";
DBRLabel.innerHTML = DBrestante+"/500MB"}
}
