const body = document.querySelector("body")
const STRegistro = localStorage.getItem("Registo4G");
const TentativasRestantes = localStorage.getItem("Tentativas4G");
const labelUserWifi = document.getElementById("userWifi");
var tentativasIni = 3

if(STRegistro == "null"||STRegistro == null){
  const usercadInp = prompt("Cadastre seu usuario","Meu Nome") 
  localStorage.setItem("Registo4G",usercadInp)
  labelUserWifi.innerHTML = STRegistro
  window.location.href = "https://pingobras.glitch.me/4G-UFI-453A"
}else{
const userinput = prompt("Insira Seu Usuario!","Administrador")
if(STRegistro == userinput) {
body.style.display = "block"
labelUserWifi.innerHTML = STRegistro
  
}else{
let tentativas = TentativasRestantes - 1

localStorage.setItem("Tentativas4G",tentativas)
alert("Não Foi Possivel Logar Tente Novamente! Reiniciar Usuario em:" + TentativasRestantes)
window.location.href = "https://pingobras.glitch.me/4G-UFI-453A"
    }
}
