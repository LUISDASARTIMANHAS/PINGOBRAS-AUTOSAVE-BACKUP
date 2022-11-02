//usado para bloquear as paginas somente para admins
const loopToken = setInterval(refreshDesconect, 2000);
const alarmAuto = new Audio('https://cdn.glitch.global/b39d6a4a-0e14-4b41-930d-29d3ccd6c137/Shop empire 2 - Alarm.mp3?v=1660420687299.mp3');
let bypassJson = localStorage.getItem("bypass");
let bypass = JSON.parse(bypassJson)
let labelSecurity = document.getElementById("security");
let tokenR = localStorage.getItem("ADMtoken");
let site = document.querySelector(".site-altura"); 
let labelAlarm = document.querySelector("alert");
const d = new Date();
let day = d.getDate();

function refreshDesconect() {
labelSecurity.innerHTML = "ATIVADA"
  
if(tokenR == "conectado") {
console.log("AUTH/LOG>ADMIN conectado!")
}else {
const tokenSair ="desconectado";
localStorage.setItem("ADMtoken", tokenSair);
alarmAuto.play();
  site.style.display = "none";
  labelAlarm.style.display = "block";
  
const myTimeout = setTimeout(REDIRECIONAR, 10000);
function REDIRECIONAR() {window.location.href = "https://pingobras.glitch.me/login"}
}
  
if(tokenR == "null") {
alert("⚠️ADMIN SEM INDENTIFICAÇÃO!")
const tokenSair ="desconectado";
localStorage.setItem("ADMtoken", tokenSair);
alarmAuto.play();
site.style.display = "none";
labelAlarm.style.display = "block";
const myTimeout = setTimeout(REDIRECIONAR, 10000);
function REDIRECIONAR() {window.location.href = "https://pingobras.glitch.me/login"}
}
  
  
if(bypass == 1695241900-day || bypass.bypass2 == 19264095713-day) {
console.log("AUTH/LOG>ADMIN conectado!")
}else {
const tokenSair ="desconectado";
localStorage.setItem("ADMtoken", tokenSair);
alarmAuto.play();
  site.style.display = "none";
  labelAlarm.style.display = "block";
  
const myTimeout = setTimeout(REDIRECIONAR, 10000);
function REDIRECIONAR() {window.location.href = "https://pingobras.glitch.me/login"}
}
  
if(bypass != null || bypass.bypass2 != null ) {
console.log("AUTH/LOG>ADMIN conectado!")
}else {
const tokenSair ="desconectado";
localStorage.setItem("ADMtoken", tokenSair);
alarmAuto.play();
  site.style.display = "none";
  labelAlarm.style.display = "block";
  
const myTimeout = setTimeout(REDIRECIONAR, 10000);
function REDIRECIONAR() {window.location.href = "https://pingobras.glitch.me/login"}
}
  
  
}