const LabelNumSort = document.getElementById("LabelNumSort")
const LabelQNum = document.getElementById("LQuantNumCart")
let sortNum = LabelNumSort.innerHTML
var numAleatorio


setInterval(Sorteador,20)  
function Sorteador(){
  var divs = document.querySelectorAll('span'), i;
  numAleatorio = Math.floor(Math.random() * 90)
  
  LabelNumSort.innerHTML = numAleatorio
  LabelQNum.innerHTML =  divs.length
    
    for (i = 0; i < divs.length; ++i) {
      if(divs[i].innerText == numAleatorio){
      	divs[i].style.color = "red";}	
      if(i==9){
        clearInterval(Sorteador)
        LabelNumSort.innerHTML = "Chega De Sortear Bolas!"}
    }
}//fim do sorteador