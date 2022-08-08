let tokenjson = localStorage.getItem("token");
let tokenR = JSON.parse(tokenjson);
console.log("AUTENTICATION/LOG> ⚠️Token recebido:" + tokenR);

if(tokenR != "desconectado") {
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

function autentication() {
let authToken = localStorage.getItem("token");
let auth = JSON.parse(authToken);
let authbypass = localStorage.getItem("bypass");
let authbypass2 = JSON.parse(authbypass)


  if(authbypass2 == null){
  const authDesconectado = "desconectado";
  const disconectadm = JSON.stringify(authDesconectado);
  localStorage.setItem("token", disconectadm);
window.location.href = ("https://pingobras.glitch.me/login")}  
if(authbypass2.bypass == 10101010100) {
  const authDesconectado = "desconectado";
  const disconectadm = JSON.stringify(authDesconectado);
  localStorage.setItem("JsonToken", disconectadm);}
  
  if(auth == null){
  const authDesconectado = "desconectado";
  const disconectadm = JSON.stringify(authDesconectado);
  localStorage.setItem("token", disconectadm);
  window.location.href = ("https://pingobras.glitch.me/login")
  
  const status = "Status: Não conectado"
  const admstatus = document.getElementById("adminStatus");
 admstatus.innerHTML = status;
  admstatus.setAttribute('style', 'color: red')
}else{
  if(tokenR == "desconectado") {
      window.location.href = ("https://pingobras.glitch.me/login")
  }else{
    setTimeout(alert("admin autorizado"),7000)
   window.location.href = ("https://pingobras.glitch.me/admin")
  }}
  
}
