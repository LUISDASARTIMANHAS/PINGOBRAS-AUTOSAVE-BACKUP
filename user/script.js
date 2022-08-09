let DBuserbg = localStorage.getItem('UserBackground')
let body2 = document.querySelector('body');

if(DBuserbg == "null") {
  body2.style.background = "white"
}else{
  body2.style.background = DBuserbg
}


if(localStorage.getItem('token') == null){
  alert('Você precisa estar logado para acessar essa página')
  window.location.href = '/login'
}
let userLogado = JSON.parse(localStorage.getItem('userLogado')) 
let logado = document.querySelector('#logado')
logado.innerHTML = "Olá " + userLogado.nome + " Bem Vindo de Volta!"

function sair(){
  localStorage.removeItem('token')
  localStorage.removeItem('userLogado')
  window.location.href = 'https://pingobras.glitch.me'
}


let fullscreen;
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
});


