const IPServer = document.getElementById("Porta-Server")
const StatusLabel = document.getElementById("status-Server")

let IP = ""

if(IP == ""||!IP){
  StatusLabel.innerHTML = "Parado"
  StatusLabel.style.color = "red"
  IPServer.innerHTML = "SEM IP DO SERVIDOR"
}else{
  StatusLabel.innerHTML = "Online"
  StatusLabel.style.color = "green"
  IPServer.innerHTML = IP
}