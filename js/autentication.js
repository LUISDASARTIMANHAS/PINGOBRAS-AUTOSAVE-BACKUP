let  JsonKeys = localStorage.getItem("JsonKeys");
let key = JSON.parse(JsonKeys);

let tokenjson = localStorage.getItem("JsonToken");
let tokenR = JSON.parse(tokenjson);
console.log("AUTENTICATION/LOG> Token recebido:" + tokenR.token);


if(tokenR.token != "desconectado") {
  let status = "Status: Conectado"
  const admstatus = document.getElementById("adminStatus");
 admstatus.innerHTML = status;
  admstatus.setAttribute('style', 'color: green')
}else{
  const status = "Status: Não conectado"
  const admstatus = document.getElementById("adminStatus");
 admstatus.innerHTML = status;
  admstatus.setAttribute('style', 'color: red')
}



let msgError = document.getElementById("msgError");
let msgSuccess = document.getElementById("msgSuccess");



var enviar = document.querySelector("#submit");
enviar.addEventListener("click", function entrar() {  
  alert('Verificando!...');
  let inputsenha = document.getElementById("senha");
   console.log(inputsenha.value);
  
  if(inputsenha.value == key.senha) {
    let mathRandom = Math.random().toString(16).substr(2)
   
    let storageToken = {token: mathRandom};
    const Cryptotoken = JSON.stringify(storageToken);
     console.log(""AUTENTICATION/LOG>codificando token");
     localStorage.setItem("JsonToken", Cryptotoken);
     console.log("token redefinido");
    
     
    msgSuccess.setAttribute('style', 'display: block')
    msgSuccess.innerHTML = 'senha correta! redirecionando!'
    window.location.href = "https://pingobras.glitch.me/admin=account.html"
  }
  else{
    inputsenha.setAttribute('style', 'color: red')
    inputsenha.setAttribute('style', 'border-color: red')
    msgError.setAttribute('style', 'display: block')
    msgError.innerHTML = 'senha incorreta!'
  window.location.href = "https://pingobras.glitch.me/autentication.html"
  }
    
});



function refresh() {
  const adminKey = {senha: 9645};
const CryptoKey = JSON.stringify(adminKey);
localStorage.setItem("JsonKeys", CryptoKey);
  
  const tokenrefresh = {token: "desconectado"};
const Cryptotokenrefresh = JSON.stringify(tokenrefresh);
localStorage.setItem("JsonToken", Cryptotokenrefresh);
alert('O banco de dados foi restaurado!')
}

function autentication() {
let tokenjson2 = localStorage.getItem("JsonToken");
let tokenR2 = JSON.parse(tokenjson2);  
console.log(tokenR2)
  
  if(tokenR2 == null){
  const tokenrefresh2 = {token: "desconectado"};
const Cryptotokenrefresh2 = JSON.stringify(tokenrefresh2);
localStorage.setItem("JsonToken", Cryptotokenrefresh2);
    window.location.href = ("https://pingobras.glitch.me")
  
  const status = "Status: Não conectado"
  const admstatus = document.getElementById("adminStatus");
 admstatus.innerHTML = status;
  admstatus.setAttribute('style', 'color: red')
}else{
  if(tokenR.token == "desconectado") {
      window.location.href = ("https://pingobras.glitch.me/autentication.html")
  }else{
    setTimeout(alert("admin autorizado"),7000)
   window.location.href = ("https://pingobras.glitch.me/admin=account.html")
  }}

}
