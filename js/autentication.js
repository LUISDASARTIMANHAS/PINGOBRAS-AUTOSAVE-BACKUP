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
     console.log("AUTENTICATION/LOG> Setando codificação do token...");
     localStorage.setItem("JsonToken", Cryptotoken);
     console.log("AUTENTICATION/LOG> Token setado");
    const bypasstokenJS = {bypass: 1541129000, bypass2: 65810473921}
    const bypasstoken = JSON.stringify(bypasstokenJS);
    localStorage.setItem("bypass",bypasstoken)
    
     
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

const bypasstokenJSR = {bypass: 10101010100, bypass2: 1010010010}
const bypasstokenR = JSON.stringify(bypasstokenJSR);
localStorage.setItem("bypass",bypasstokenR)

  const tokenrefresh = {token: "desconectado"};
const Cryptotokenrefresh = JSON.stringify(tokenrefresh);
localStorage.setItem("JsonToken", Cryptotokenrefresh);
alert('AUTENTICATION/LOG> O banco de dados foi restaurado!')
}


function autentication() {
let authToken = localStorage.getItem("JsonToken");
let auth = JSON.parse(authToken);
let authbypass = localStorage.getItem("bypass");
let authbypass2 = JSON.parse(authbypass)


  if(authbypass2 == null){
  const authDesconectado = {token: "desconectado"};
  const disconectadm = JSON.stringify(authDesconectado);
  localStorage.setItem("JsonToken", disconectadm);
window.location.href = ("https://pingobras.glitch.me/autentication.html")}  
if(authbypass2.bypass == 10101010100) {
  const authDesconectado = {token: "desconectado"};
  const disconectadm = JSON.stringify(authDesconectado);
  localStorage.setItem("JsonToken", disconectadm);}
  
  if(auth == null){
  const authDesconectado = {token: "desconectado"};
  const disconectadm = JSON.stringify(authDesconectado);
  localStorage.setItem("JsonToken", disconectadm);
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
