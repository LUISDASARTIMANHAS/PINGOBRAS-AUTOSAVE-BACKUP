let btntema = document.getElementById('tema');
let userbg = localStorage.getItem('UserBackground')
let body = document.querySelector('body');
let inputColor = document.querySelector('#colorTema');

if(userbg == "null") {
  body.style.background = "white"
}else{
  body.style.background = userbg
}

btntema.addEventListener('click', function() {
      body.style.background = inputColor.value;
      localStorage.setItem( 'UserBackground',inputColor.value);
      body.style.color = 'black';
  });


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


function abrirAba(){ window.open(
  "https://codepen.io/luisdasartimanhas/pen/ZEaVByy?editors=0011");
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

let btnescondedor = document.getElementById('escondedor');
var esconder = document.querySelector('.esconder');
btnescondedor.addEventListener('click', function() {
    if(esconder.style.display === 'block') {
      esconder.style.display = 'none';
  } else {
      esconder.style.display = 'block';
  }
});
