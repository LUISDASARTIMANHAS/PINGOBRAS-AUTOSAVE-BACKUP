let ms = "000"
let s
const looplinks = setInterval(refreshlinks, 60*5+ms);
const links = document.querySelector("links");


links.innerHTML = 
"<link rel=stylesheet href=https://pingobras.glitch.me/css/style.css />"+
"<link rel=stylesheet href=https://pingobras.glitch.me/css/btn.css />"+
"<link rel=stylesheet href=https://pingobras.glitch.me/css/head.css />"


function refreshlinks() {
links.innerHTML = 
"<link rel=stylesheet href=https://pingobras.glitch.me/css/style.css />"+
"<link rel=stylesheet href=https://pingobras.glitch.me/css/btn.css />"+
"<link rel=stylesheet href=https://pingobras.glitch.me/css/head.css />"
  
}//Fim do refresh Links