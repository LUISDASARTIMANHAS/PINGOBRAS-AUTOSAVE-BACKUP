let bypassJson2 = localStorage.getItem("bypassST");
let bypassST = JSON.parse(bypassJson2)
let token = localStorage.getItem("ADMtoken");


function autentication(){
  if(token == "conectado") {
console.log("AUTH/LOG>ADMIN conectado!")
}else {
const tokenSair ="desconectado";
localStorage.setItem("ADMtoken", tokenSair);

const myTimeout = setTimeout(REDIRECIONAR, 10000);
function REDIRECIONAR() {window.location.href = "https://pingobras.glitch.me/login"}
}
  
if(token == "null") {
alert("⚠️ADMIN SEM INDENTIFICAÇÃO!")
const tokenSair ="desconectado";
localStorage.setItem("ADMtoken", tokenSair);

const myTimeout = setTimeout(REDIRECIONAR, 10000);
function REDIRECIONAR() {window.location.href = "https://pingobras.glitch.me/login"}
}
  
if(bypassST == 1541129000 || bypassST.bypass2 == 65810473921) {
console.log("AUTH/LOG>ADMIN conectado!")
}else {
const tokenSair ="desconectado";
localStorage.setItem("ADMtoken", tokenSair);

const myTimeout = setTimeout(REDIRECIONAR, 10000);
function REDIRECIONAR() {window.location.href = "https://pingobras.glitch.me/login"}
}
  
if(bypassST != null || bypassST.bypass2 != null ) {
console.log("AUTH/LOG>ADMIN conectado!")
}else {
const tokenSair ="desconectado";
localStorage.setItem("ADMtoken", tokenSair);

const myTimeout = setTimeout(REDIRECIONAR, 10000);
function REDIRECIONAR() {window.location.href = "https://pingobras.glitch.me/login"}
}

}

if(token == "conectado") {
  let status = "Status: Conectado"
  const admstatus = document.getElementById("adminStatus");
 admstatus.innerHTML = status;
  admstatus.setAttribute('style', 'color: green')
}else{
  const status = "Status: Não conectado"
  const admstatus = document.getElementById("adminStatus");
  admstatus.innerHTML = status;
  admstatus.setAttribute('style', 'color: red')
}
