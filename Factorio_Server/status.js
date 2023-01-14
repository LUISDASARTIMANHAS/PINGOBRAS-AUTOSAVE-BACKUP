const IPServer = document.getElementById("Porta-Server")
const StatusLabel = document.getElementById("status-Server")
const saveHostLabel = document.getElementById("save-Host")
const Porta = ":21029"
Rgb()

let IP = "18.231.187.170"
let Mundo = "FileTorradao Multi"
let sizeMundo = 4.0

if(IP == ""||!IP){
  StatusLabel.innerHTML = "Parado"
  StatusLabel.style.color = "red"
  IPServer.innerHTML = "SEM IP DO SERVIDOR"
  saveHostLabel.innerHTML = "HUB" + " (1.1.70) " + sizeMundo+"MB"
}else{
  StatusLabel.innerHTML = "Online"
  StatusLabel.style.color = "green"
  IPServer.innerHTML = IP + Porta
  saveHostLabel.innerHTML = Mundo + " (1.1.70) " + sizeMundo+"MB"
}

function Rgb(){
setTimeout(vermelho,1000)  
setTimeout(laranja,2000)
setTimeout(amarelo,3000)
setTimeout(verde,4000)  
setTimeout(azulClaro,5000)
setTimeout(azul,6000)
setTimeout(roxo,7000)

function vermelho(){
saveHostLabel.style.color = "red"
IPServer.style.color = "red"
}
function laranja(){
saveHostLabel.style.color = "orange"
IPServer.style.color = "orange"
}
function amarelo(){
saveHostLabel.style.color = "yellow"
IPServer.style.color = "yellow"
}
function verde(){
saveHostLabel.style.color = "green"
IPServer.style.color = "green"
}
function azulClaro(){
saveHostLabel.style.color = "lightblue"
IPServer.style.color = "lightblue"
}
function azul(){
saveHostLabel.style.color = "blue"
IPServer.style.color = "blue"
}
function roxo(){
saveHostLabel.style.color = "purple"
IPServer.style.color = "purple"
Rgb()
}

  
  
}