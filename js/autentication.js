
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
   window.location.href = ("https://pingobras.glitch.me/admin")
  }}
  
}
