
let  JsonKeys = localStorage.getItem("JsonKeys");
let key = JSON.parse(JsonKeys);
console.log(key.senha);


let inputsenha = document.getElementById("senha")
console.log(inputsenha.value)

let msgError = document.getElementById("msgError");
let msgSuccess = document.getElementById("msgSuccess");



var enviar = document.querySelector("#submit");
enviar.addEventListener("click", function entrar() {  
  alert('Verificando!...');
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

function refresh(){
  const adminKey = {senha: 9645};
const CryptoKey = JSON.stringify(adminKey);
localStorage.setItem("JsonKeys", CryptoKey);
alert('O banco de dados foi restaurado!')
}

let tokenjson = localStorage.getItem("JsonToken");
let tokenR = JSON.parse(tokenjson);
console.log(tokenR.token);

const user1 = document.getElementById("userID1");
const user2 = document.getElementById("userID2");
const user3 = document.getElementById("userID3");
 user1.innerHTML = tokenR.token
 user2.innerHTML = tokenR.token
 userID3.innerHTML = tokenR.token


if(tokenR.token == 0) {
  window.location.href = "https://pingobras.glitch.me"
  alert("usuario não autorizado")};