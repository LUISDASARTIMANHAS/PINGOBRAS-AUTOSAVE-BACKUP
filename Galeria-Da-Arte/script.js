setTimeout(LoadStats,60000);

function LoadStats(){
const bar = document.getElementById("bar");
const DBRLabel = document.getElementById("DBRLabel");
let DBSize = 5000
let DBSizeUploaded = 2462.24
const DBUsado = DBSizeUploaded/DBSize*100;
const DBrestante = DBSize*DBUsado/100;
let DBSizeGB = DBSize/1000
let DBrestanteGB = DBrestante/1000

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
DBRLabel.innerHTML = DBrestanteGB+"MB/"+DBSizeGB+"GB"}
}

}//load Stats interval