let DBuserbg = localStorage.getItem('UserBackground')
let body2 = document.querySelector('body');
let saldoContamain = document.getElementById("header_wallet_balance") 
let Logadomain = JSON.parse(localStorage.getItem('userLogado'))

if(DBuserbg == "null") {
  body2.style.background = "white"
}else{
  body2.style.background = DBuserbg
}


if(localStorage.getItem('token') == "null"){
let site = document.querySelector(".site-altura") 
const alarmAuto = new Audio('https://cdn.glitch.global/b39d6a4a-0e14-4b41-930d-29d3ccd6c137/Shop empire 2 - Alarm.mp3?v=1660420687299.mp3');
alert('Você precisa estar logado para acessar essa página')
site.style.display = "none"
alarmAuto.play();
const myTimeout = setTimeout(REDIRECIONAR, 10000);
function REDIRECIONAR() {window.location.href = "/login"}
}
saldoContamain.innerHTML = "R$:" + Logadomain.saldo+",00"

let userLogado = JSON.parse(localStorage.getItem('userLogado')) 
let logado = document.querySelector('#logado')
logado.innerHTML = userLogado.user + " Bem Vindo de Volta!"

function sair(){
  localStorage.removeItem('token')
  localStorage.removeItem('userLogado')
  window.location.href = 'https://pingobras.glitch.me'
}


/* let fullscreen;
let fsEnter = document.getElementById('fullscr');
fsEnter.addEventListener('click', function (e) {
    e.preventDefault();
    if (!fullscreen) {
        fullscreen = true;
        document.documentElement.requestFullscreen();
        fsEnter.innerHTML = "SAIR DA TELA CHEIA";
    }
    else {
        fullscreen = false;
        document.exitFullscreen();
        fsEnter.innerHTML = "TELA CHEIA";
    }
}); */
