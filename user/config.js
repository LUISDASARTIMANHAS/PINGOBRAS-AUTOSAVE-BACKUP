let btntema = document.getElementById('tema');
let userbg = localStorage.getItem('UserBackground')
let body = document.querySelector('body');
let inputColor = document.querySelector('#colorTema');
let userConta = document.getElementById("userConta") 
let nomeConta = document.getElementById("nomeConta")
let senhaConta = document.getElementById("senhaConta") 
let SaldoConta = document.getElementById("saldoConta") 


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


