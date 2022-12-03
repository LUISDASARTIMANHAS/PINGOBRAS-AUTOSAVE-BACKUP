let ms = "000"
let sec = "60"
let min = 2
const timeRefresh = min*sec+ms
const looplinks = setInterval(refreshlinks, timeRefresh);
const links = document.querySelector("links");


links.innerHTML = 
"<link rel=stylesheet rel=preload href=https://pingobras.glitch.me/css/style.css />"+
"<link rel=stylesheet rel=preload href=https://pingobras.glitch.me/css/btn.css />"+
"<link rel=stylesheet rel=preload href=https://pingobras.glitch.me/css/head.css />"+
"<link rel=stylesheet rel=preload href=https://pingobras.glitch.me/css/RGB.css />"+
"<link rel=stylesheet rel=preload href=https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css>"+
"<link rel=stylesheet rel=preload href=https://pingobras.glitch.me/css/main.css>"+
"<link rel=stylesheet href=https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css integrity=sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6 crossorigin=anonymous>"


function refreshlinks() {
links.innerHTML = 
"<link rel=stylesheet rel=preload href=https://pingobras.glitch.me/css/style.css />"+
"<link rel=stylesheet rel=preload href=https://pingobras.glitch.me/css/btn.css />"+
"<link rel=stylesheet rel=preload href=https://pingobras.glitch.me/css/head.css />"+
"<link rel=stylesheet rel=preload href=https://pingobras.glitch.me/css/RGB.css />"+
"<link rel=stylesheet rel=preload href=https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css>"+
"<link rel=stylesheet rel=preload href=https://pingobras.glitch.me/css/main.css>"+
"<link rel=stylesheet href=https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css integrity=sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6 crossorigin=anonymous>"

}//Fim do refresh Links