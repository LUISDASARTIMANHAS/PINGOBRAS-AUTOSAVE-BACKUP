let tokenR = localStorage.getItem("ADMtoken");

console.log("AUTENTICATION/LOG> ⚠️Token recebido:" + tokenR);

if(tokenR == "conectado") {
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
let tokenAuth = localStorage.getItem("ADMtoken");
let authbypass = localStorage.getItem("bypass");
let authbypass2 = JSON.parse(authbypass)


  if(authbypass2 == null || authbypass2.bypass == 10101010100){
  const disconectadm = "desconectado";
  localStorage.setItem("ADMtoken", disconectadm);
window.location.href = ("https://pingobras.glitch.me/login")}
  
  
  console.log("Verificando... " + tokenR + "==" + "null")
  if(tokenAuth == "null"){
  const disconectadm = "desconectado";
  localStorage.setItem("ADMtoken", disconectadm);
  window.location.href = ("https://pingobras.glitch.me/login")
  
  const status = "Status: Não conectado"
  const admstatus = document.getElementById("adminStatus");
 admstatus.innerHTML = status;
  admstatus.setAttribute('style', 'color: red')
}else{
  console.log("Verificando... " + tokenR + "==" + "desconectado")
  if(tokenR == "desconectado") {
      window.location.href = ("https://pingobras.glitch.me/login")
  }else{
    console.log("Verificando... " + tokenR + "==" + "conectado")
    if(tokenR == "conectado"){
    setTimeout(alert("admin autorizado"),7000)
   window.location.href = ("https://pingobras.glitch.me/admin")}
  }}
  
}
