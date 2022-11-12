var sorteio = document.querySelector('p#numSorteio')
var sortNum = sorteio.innerHTML
var numAleatorio
let QNumSorteados = 50
var NumSorteados = 0

setInterval(Sorteador,1000)  
  
function Sorteador(){
    numAleatorio = Math.floor(Math.random() * 90)
    sorteio.innerHTML = numAleatorio
    var divs = document.querySelectorAll('span'), i;

    for (i = 0; i < divs.length; ++i) {
      if(divs[i].innerText == numAleatorio){
      	divs[i].style.color = "red";}	
    }
}