const loopToken = setInterval(refreshDesconect, 5000);

function refreshDesconect() {
let labelSecurity = document.getElementById("security");
let tokenjson = localStorage.getItem("JsonToken");
let tokenR = JSON.parse(tokenjson);
labelSecurity.innerHTML = "ATIVADA"
  
if(tokenR.token != "desconectado") {
console.log("AUTH/LOG>Usuario conectado!")
}else {
alert("⚠️usuario deslogado")
const tokenSair = {token: "desconectado"};
const CryptotokenS = JSON.stringify(tokenSair);
localStorage.setItem("JsonToken", CryptotokenS);
window.location.href = "https://pingobras.glitch.me"}
}