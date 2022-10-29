const siteAltura = document.querySelector(".site-altura");
const btn = document.querySelector("button");
const a = document.querySelector("a");
const fechar = document.getElementById("close");
const popup = document.getElementById("popup");

    
function (){
  
if(!popup){
  alert("Não Foi Posivel Conectar-Se Ao Servidor! ERROR: 500 INTERNAL SERVER ERROR");
}
  
popup.style.display = "block";
siteAltura.style.opacity = "0.2";
siteAltura.style.cursor = "not-allowed";
btn.style.display = "none"
a.style.display = "none"
console.log("LOG> ⚠️Anuncio carregado!");
alert("Não a anúncios disponíveis!");
}  


if(!fechar) {
console.warn("Deu Pau Ao Fechar Painel De Resgate Vale")
}else{
  fechar.addEventListener("click", function(){
    popup.style.display = "none";
    siteAltura.style.opacity = "1";
    siteAltura.style.cursor = "default";
    btn.style.display = "block"
    a.style.display = "block"
  console.log("LOG> ⚠️Anuncio fechado!");
});}
