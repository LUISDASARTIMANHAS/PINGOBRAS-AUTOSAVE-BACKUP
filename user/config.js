var btntema = document.getElementById('tema');
var userbg = localStorage.getItem('UserBackground');
var perfilIconLink = localStorage.getItem('UserPerfil');
var body = document.querySelector('body');
var inputColor = document.querySelector('#colorTema');
var userConta = document.getElementById("userConta");
var nomeConta = document.getElementById("nomeConta");
var senhaConta = document.getElementById("senhaConta"); 
var saldoConta = document.getElementById("header_wallet_balance"); 
var IDConta = document.getElementById("IDConta");
var Logado = JSON.parse(localStorage.getItem('userLogado'));
var perfilIcon = document.getElementById("perfilIcon");
let userLogadoImg2 = Logado.PerfilImg


btntema.addEventListener('click', function() {
      body.style.background = inputColor.value;
      localStorage.setItem( 'UserBackground',inputColor.value);
      body.style.color = 'black';
  });
function trocarPerfilImg(){
  let linkIMGPerfil = prompt("Insira O Link Da Foto De Perfil","https://")
  perfilIcon.src = linkIMGPerfil;
  localStorage.setItem( 'UserPerfil',linkIMGPerfil);
}

function sair(){
  localStorage.removeItem('token')
  localStorage.removeItem('userLogado')
  window.location.href = 'https://pingobras.glitch.me'
  alert("Usuario Desconectado!")
}
nomeConta.innerHTML = Logado.nome
userConta.innerHTML = Logado.user
IDConta.innerHTML = localStorage.getItem('token')
senhaConta.innerHTML = Logado.senha

let btnmostrarsenha = document.getElementById('mostrarsenha');

btnmostrarsenha.addEventListener('click', function() {
    if(senhaConta.style.display === 'block') {
      senhaConta.style.display = 'none';
  } else {
      senhaConta.style.display = 'block';
  }
});

if(userbg == "null") {
  body.style.background = "white"
}else{
  body.style.background = userbg
  inputColor.value = userbg
}

if(perfilIconLink == "null") {
  alert("usuario sem perfil!")
  perfilIcon.src = "https://w7.pngwing.com/pngs/798/436/png-transparent-computer-icons-user-profile-avatar-profile-heroes-black-profile.png"
}else{
  if(userLogadoImg2 == "null"||userLogadoImg2 == ""){
    perfilIcon.src = perfilIconLink
  }else{
    perfilIcon.src = userLogadoImg2
  }
}
