
let  JsonKeys = localStorage.getItem("JsonKeys");
let key = JSON.parse(JsonKeys);
console.log(key.senha);

let tokenjson = localStorage.getItem("JsonToken");
let tokenR = JSON.parse(tokenjson);
console.log(tokenR.token);

const adminID1= document.getElementById("admID");
 adminID1.innerHTML = tokenR.token;


let msgError = document.getElementById("msgError");
let msgSuccess = document.getElementById("msgSuccess");



var enviar = document.querySelector("#submit");
enviar.addEventListener("click", function entrar() {  
  alert('Verificando!...');
  let inputsenha = document.getElementById("senha");
   console.log(inputsenha.value);
   if(inputsenha.value == key.senha) {
    window.location.href = "https://pingobras.glitch.me/download.html"
    let mathRandom = Math.random().toString(16).substr(2)
   
    let storageToken = {token: mathRandom};
    const Cryptotoken = JSON.stringify(storageToken);
     console.log("codificando token");
     localStorage.setItem("JsonToken", Cryptotoken);
     console.log("token redefinido");
    
     
    msgSuccess.setAttribute('style', 'display: block')
    msgSuccess.innerHTML = 'senha correta! redirecionando!'
  }
  else{
    inputsenha.setAttribute('style', 'color: red')
    inputsenha.setAttribute('style', 'border-color: red')
    msgError.setAttribute('style', 'display: block')
    msgError.innerHTML = 'senha incorreta!'}
});

function refresh() {
  const adminKey = {senha: 9645};
const CryptoKey = JSON.stringify(adminKey);
localStorage.setItem("JsonKeys", CryptoKey);
  const token2 = {token: "Desconectada por refresh"};
const Cryptotoken2 = JSON.stringify(token2);
localStorage.setItem("JsonToken", Cryptotoken2);
alert('O banco de dados foi restaurado!')
}

function autentication() {
  
  if(tokenR.token != 0 ) {
  setTimeout(alert("admin autorizado"),7000)
   window.location.href = ("https://pingobras.glitch.me/download.html")
  }
  else{
    window.location.href = ("https://pingobras.glitch.me/autentication.html")
  }

}
