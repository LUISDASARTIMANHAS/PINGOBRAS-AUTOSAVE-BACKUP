const siteAltura = document.querySelector(".site-altura");
const btn = document.querySelector("button");
const a = document.querySelector("a");
let notify = false
const fechar = document.getElementById("close");
const fechar2 = document.getElementById("close2");
const popup = document.getElementById("popup");
const popup2 = document.getElementById("popup2");

  function notifyMe() {
  // Otherwise, we need to ask the user for permission
   if (Notification.permission !== 'denied') {
    Notification.requestPermission(function (permission) {
      // If the user accepts, let's create a notification
      if (permission === "granted") {
        var notification = new Notification("As notificações foram ativadas!")
        alert("As notificações foram ativadas!");
        notify = true
        if(notify == true){openEvento(); setTimeout(openEvento2(),12000);}
      }});
        
  }}
    
function openEvento(){
document.querySelector(".popup").style.display = "block";
siteAltura.style.opacity = "0.2";
siteAltura.style.cursor = "not-allowed";
btn.style.display = "none"
a.style.display = "none"
console.log("LOG> ⚠️Anuncio carregado!"); 
}
function openEvento2(){
popup2.style.display = "block";
siteAltura.style.opacity = "0.2";
siteAltura.style.cursor = "not-allowed";
btn.style.display = "none"
a.style.display = "none"
console.log("LOG> ⚠️Anuncio carregado!"); 
}
  


window.addEventListener("load", function(){
setTimeout(open,2000);
setTimeout(open2,12000);
    
function open(event){
document.querySelector(".popup").style.display = "block";
siteAltura.style.opacity = "0.2";
siteAltura.style.cursor = "not-allowed";
btn.style.display = "none"
a.style.display = "none"
console.log("LOG> ⚠️Anuncio carregado!"); 
}

function open2(event){
document.querySelector("#popup2").style.display = "block";
siteAltura.style.opacity = "0.2";
siteAltura.style.cursor = "not-allowed";
btn.style.display = "none"
a.style.display = "none"
console.log("LOG> ⚠️Anuncio carregado!"); 
}
});

if(!fechar) {
console.warn("Deu Pau No Fechar Do Anúncio")
}else{
  fechar.addEventListener("click", function(){
    popup.style.display = "none";
    siteAltura.style.opacity = "1";
    siteAltura.style.cursor = "default";
    btn.style.display = "block"
    a.style.display = "block"
  console.log("LOG> ⚠️Anuncio fechado!");
});}
    
if(!fechar2) {
console.warn("Deu Pau No Fechar Do Anúncio")
}else{
  fechar2.addEventListener("click", function(){
    popup2.style.display = "none";
    siteAltura.style.opacity = "1";
    siteAltura.style.cursor = "default";
    btn.style.display = "block"
    a.style.display = "block"
  console.log("LOG> ⚠️Anuncio fechado!");
});}
