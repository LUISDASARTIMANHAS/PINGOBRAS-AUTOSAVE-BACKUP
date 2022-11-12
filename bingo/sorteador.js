var LabelNumSort = document.getElementById('LabelNumSort')
var sortNum = LabelNumSort.innerHTML
var numAleatorio

setInterval(Sorteador,1000)  
function Sorteador(){
  var divs = document.querySelectorAll('span'), i;
  
  numAleatorio = Math.floor(Math.random() * 90)
  LabelNumSort.innerHTML = numAleatorio
    
    for (i = 0; i < divs.length; ++i) {
      if(divs[i].innerText == numAleatorio){
      	divs[i].style.color = "red";}	
    }
}//fim do sorteador