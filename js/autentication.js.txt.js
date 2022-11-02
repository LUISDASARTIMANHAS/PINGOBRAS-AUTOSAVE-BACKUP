let bypassJson2 = localStorage.getItem("bypass");
let bypassST = JSON.parse(bypassJson2)
let token = localStorage.getItem("ADMtoken");
const d3 = new Date();
let day3 = d3.getDate();
let auth3 = 1695241900+day3
let auth4 = 19264095713+day3

function autentication(){
  if(token == "conectado") {
    setTimeout(alert("admin autorizado code:token"),7000)    
    window.location.href = ("https://pingobras.glitch.me/admin")
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
  
if(bypassST == auth3 || bypassST.bypass2 == auth4) {
    setTimeout(alert("admin autorizado code:bypass"),7000)    
    window.location.href = ("https://pingobras.glitch.me/admin")
}else {
const tokenSair ="desconectado";
localStorage.setItem("ADMtoken", tokenSair);

const myTimeout = setTimeout(REDIRECIONAR, 10000);
function REDIRECIONAR() {window.location.href = "https://pingobras.glitch.me/login"}
}
  
  
}


if(bypassST != null || bypassST.bypass2 != null ) {
}else {
const tokenSair ="desconectado";
localStorage.setItem("ADMtoken", tokenSair);

const myTimeout = setTimeout(REDIRECIONAR, 10000);
function REDIRECIONAR() {window.location.href = "https://pingobras.glitch.me/login"}
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
