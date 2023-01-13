const IPServer = document.getElementById("Porta-Server")
const StatusLabel = document.getElementById("status-Server")
const Porta = ":21029"

let IP = "18.230.184.245"
let HUB = ""

if(IP == ""||!IP){
  StatusLabel.innerHTML = "Parado"
  StatusLabel.style.color = "red"
  IPServer.innerHTML = "SEM IP DO SERVIDOR"
}else{
  StatusLabel.innerHTML = "Online"
  StatusLabel.style.color = "green"
  IPServer.innerHTML = IP + Porta
}