//usado para bloquear as paginas somente para admins
const loopToken = setInterval(refreshDesconect, 2000);
const alarmAuto = new Audio('https://cdn.glitch.global/b39d6a4a-0e14-4b41-930d-29d3ccd6c137/Shop empire 2 - Alarm.mp3?v=1660420687299.mp3');

function refreshDesconect() {
let labelSecurity = document.getElementById("security");
let tokenR = localStorage.getItem("ADMtoken");
console.log("AUTH> token: " + tokenR + " recebido!")
labelSecurity.innerHTML = "ATIVADA"
let body = document.query("body"); 
  
  
if(tokenR == "conectado") {
console.log("AUTH/LOG>Usuario conectado!")
}else {
alert("⚠️ADMIN deslogado")
const tokenSair ="desconectado";
localStorage.setItem("ADMtoken", tokenSair);
alarmAuto.play();
const myTimeout = setTimeout(REDIRECIONAR, 10000);  
function REDIRECIONAR() {window.location.href = "https://pingobras.glitch.me/login"}

}
  
if(tokenR == "null") {
alert("⚠️ADMIN SEM INDENTIFICAÇÃO!")
const tokenSair ="desconectado";
localStorage.setItem("ADMtoken", tokenSair);
alarmAuto.play();
const myTimeout = setTimeout(REDIRECIONAR, 10000);
function REDIRECIONAR() {window.location.href = "https://pingobras.glitch.me/login"}
}else {
  console.log("AUTH/LOG>Usuario conectado!")
}
 
  
  
}