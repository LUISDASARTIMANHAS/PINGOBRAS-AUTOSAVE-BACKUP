//usado para bloquear as paginas somente para admins
const loopToken = setInterval(refreshDesconect, 5000);

function refreshDesconect() {
let labelSecurity = document.getElementById("security");
let tokenR = localStorage.getItem("ADMtoken");
console.log("AUTH> token: " + tokenR + " recebido!")
labelSecurity.innerHTML = "ATIVADA"
  
if(tokenR == "conectado") {
console.log("AUTH/LOG>Usuario conectado!")
}else {
alert("⚠️ADMIN deslogado")
const tokenSair ="desconectado";
localStorage.setItem("ADMtoken", tokenSair);
window.location.href = "https://pingobras.glitch.me/login"}
  
if(tokenR == "null") {
alert("⚠️ADMIN SEM INDENTIFICAÇÃO!")
const tokenSair ="desconectado";
localStorage.setItem("ADMtoken", tokenSair);
window.location.href = "https://pingobras.glitch.me/login"
}else {
  console.log("AUTH/LOG>Usuario conectado!")
}
 
  
  
}