let btntema = document.getElementById('tema');
let userbg = localStorage.getItem('UserBackground')
let body = document.querySelector('body');
let inputColor = document.querySelector('#colorTema');
let userConta = document.getElementById("userConta") 
let nomeConta = document.getElementById("nomeConta")
let senhaConta = document.getElementById("senhaConta") 
let saldoConta = document.getElementById("header_wallet_balance") 
let IDConta = document.getElementById("IDConta")
let Logado = JSON.parse(localStorage.getItem('userLogado'))



btntema.addEventListener('click', function() {
      body.style.background = inputColor.value;
      localStorage.setItem( 'UserBackground',inputColor.value);
      body.style.color = 'black';
  });
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