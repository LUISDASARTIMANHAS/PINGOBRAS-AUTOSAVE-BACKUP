let ms = "000"
let sec = "60"
let min = 2
const timeRefresh = min*sec+ms
const looplinks = setInterval(refreshlinks, timeRefresh);
const links = document.querySelector("links");


links.innerHTML = 
"<link rel=stylesheet href=https://pingobras.glitch.me/css/style.css />"+
"<link rel=stylesheet href=https://pingobras.glitch.me/css/btn.css />"+
"<link rel=stylesheet href=https://pingobras.glitch.me/css/head.css />"+
"<link rel=stylesheet href=https://pingobras.glitch.me/css/RGB.css />"


function refreshlinks() {
links.innerHTML = 
"<link rel=stylesheet href=https://pingobras.glitch.me/css/style.css />"+
"<link rel=stylesheet href=https://pingobras.glitch.me/css/btn.css />"+
"<link rel=stylesheet href=https://pingobras.glitch.me/css/head.css />"
"<link rel=stylesheet href=https://pingobras.glitch.me/css/RGB.css />"

}//Fim do refresh Links