const IPServer = document.getElementById("Porta-Server")
const StatusLabel = document.getElementById("status-Server")
const saveHostLabel = document.getElementById("save-Host")
const Porta = ":21029"

let IP = ""
let Mundo = "FileTorradao Multi"
let sizeMundo = 0

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