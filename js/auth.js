//usado para bloquear as paginas somente para admins
const loopToken = setInterval(refreshDesconect, 5000);

function refreshDesconect() {
let labelSecurity = document.getElementById("security");
let tokenR = localStorage.getItem("token");
console.log("AUTH> token: " + tokenR + " recebido!")
labelSecurity.innerHTML = "ATIVADA"
  
if(tokenR != "desconectado") {
console.log("AUTH/LOG>Usuario conectado!")
}else {
alert("⚠️usuario deslogado")
const tokenSair ="desconectado";
const CryptotokenS = JSON.stringify(tokenSair);
localStorage.setItem("token", CryptotokenS);
window.location.href = "https://pingobras.glitch.me/login"}
}