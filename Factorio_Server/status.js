const IPServer = document.getElementById("Porta-Server")
const StatusLabel = document.getElementById("status-Server")

let IP = "15.228.167.22:21029"

if(IP == ""||!IP){
  StatusLabel.innerHTML = "Parado"
  StatusLabel.style.color = "red"
  IPServer.innerHTML = "SEM IP DO SRVIDOR"
}else{
  StatusLabel.innerHTML = "Online"
  StatusLabel.style.color = "green"
  IPServer.innerHTML = IP
}