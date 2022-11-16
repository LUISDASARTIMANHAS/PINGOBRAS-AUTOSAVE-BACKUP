const bar = document.getElementById("bar");
const DBRLabel = document.getElementById("DBRLabel");
let storageSize = 3000
let DBUsado = 2800.43/storageSize*100;
const DBrestante = storageSize*DBUsado/100;

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
DBRLabel.innerHTML = DBrestante+"MB/"+storageSize+"MB"}
}
