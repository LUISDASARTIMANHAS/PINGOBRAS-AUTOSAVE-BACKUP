const LabelNumTSort = document.getElementById("LabelNumTSort")
const LabelNumSort = document.getElementById("LabelNumSort")
const LabelQNum = document.getElementById("LQuantNumCart")
let sortNum = LabelNumSort.innerHTML
var numAleatorio
var QBolas = 0

setInterval(Sorteador,2000)  
function Sorteador(){
  if(QBolas == 50){
      console.log(QBolas)
      clearInterval(Sorteador)
      LabelNumSort.innerHTML = "Chega De Sortear Bolas!"
}else{
  var divs = document.querySelectorAll('span'), i;
  numAleatorio = Math.floor(Math.random() * 90)
  QBolas = QBolas+1
  LabelNumTSort.innerHTML = QBolas+"/50"
  LabelNumSort.innerHTML = numAleatorio
  LabelQNum.innerHTML =  divs.length
    
    for (i = 0; i < divs.length; ++i) {
      if(divs[i].innerText == numAleatorio){
      	divs[i].style.color = "red";}	
    }}
        
}//fim do sorteador