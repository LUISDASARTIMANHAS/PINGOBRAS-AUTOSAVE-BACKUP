let btntema = document.getElementById('tema');
let userbg = localStorage.getItem('UserBackground')
let body = document.querySelector('body');
let inputColor = document.querySelector('#colorTema');

if(userbg == "null") {
  body.style.background = "white"
}else{
  body.style.background = userbg
  inputColor.value = userbg
}

btntema.addEventListener('click', function() {
      body.style.background = inputColor.value;
      localStorage.setItem( 'UserBackground',inputColor.value);
      body.style.color = 'black';
  });




let userLogado = JSON.parse(localStorage.getItem('userLogado'))
let saldo = document.querySelector('#userSaldo')
let usuario = document.querySelector('#usuario')
let senha = document.querySelector('#senha')

usuario.innerHTML = ` ${userLogado.user}`
senha.innerHTML = ` ${userLogado.senha}`
saldo.innerHTML = ` ${userLogado.saldoCad}`


   if(localStorage.getItem(userLogado.saldoCad) ){
  alert('usuario desconhecido, sera kickado em 3 segundos')
     console.log('usuario kickado') 
     window.location.href='https://codepen.io/luisdasartimanhas/full/rNYoWpY'
       }
       
if(localStorage.getItem('token') == null){
  alert('Você precisa estar logado para acessar essa página')
  window.location.href = 'https://codepen.io/luisdasartimanhas/full/rNYoWpY'
}


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


let varToken = JSON.parse(localStorage.getItem('token'));
let userID = document.querySelector("#userID")
userID.innerHTML = `${varToken.token}`