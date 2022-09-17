let DBuserbg = localStorage.getItem('UserBackground')
let body2 = document.querySelector('body');
let saldoContamain = document.getElementById("header_wallet_balance") 
let Logadomain = JSON.parse(localStorage.getItem('userLogado'))
let DBperfilIconLink = localStorage.getItem('UserPerfil')
let perfilIcon2 = document.getElementById("perfilIcon")

if(DBuserbg == "null") {
  body2.style.background = "white"
}else{
  body2.style.background = DBuserbg
}


if(DBperfilIconLink == "null") {
  alert("usuario sem perfil!")
  perfilIcon2.src = "https://w7.pngwing.com/pngs/798/436/png-transparent-computer-icons-user-profile-avatar-profile-heroes-black-profile.png"
}else{
  perfilIcon2.src = DBperfilIconLink
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
