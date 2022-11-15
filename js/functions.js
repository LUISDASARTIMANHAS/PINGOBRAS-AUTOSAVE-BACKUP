const WindowSongError1 = new Audio('https://cdn.glitch.global/b39d6a4a-0e14-4b41-930d-29d3ccd6c137/Windows-error-song?v=1656019161212.mp3?v=1651870846885.mp3');
const alarm = new Audio('https://cdn.glitch.global/b39d6a4a-0e14-4b41-930d-29d3ccd6c137/Shop empire 2 - Alarm.mp3?v=1660420687299.mp3');
const ClickMouseFUNCTIONS = new Audio('https://cdn.glitch.global/b39d6a4a-0e14-4b41-930d-29d3ccd6c137/click%20do%20mouse.mp3?v=1661006466474');
const Subir = document.getElementById("back-to-top");
const Descer = document.getElementById("jsDescer");
const btnListDev = document.getElementById("btnlist");
const listDEV = document.getElementById("listDevedores");
let btnlistChangelogs = document.getElementById('btnlistChangelogs');
var listChangelogs = document.getElementById('listChangelogs');
const btnALL = document.querySelectorAll("button");

function mostrarsenha() {
  let inputSenha = document.getElementById('senha')
  ClickMouseFUNCTIONS.play();
  
  if(inputSenha.getAttribute('type') == 'password'){
    inputSenha.setAttribute('type', 'text')
    inputSenha.placeholder = "1234"
  }else {
    inputSenha.setAttribute('type', 'password')
    inputSenha.placeholder = "****"}
  
} 
  
function pageFilmSerie() {
ClickMouseFUNCTIONS.play();
window.location.href = "https://pingobras.glitch.me/user/films&series.html";
};

function DESLOGAR() {
  ClickMouseFUNCTIONS.play();
  alert("usuario deslogado")
const tokenSair = "desconectado";
localStorage.setItem("ADMtoken", tokenSair);
alarm.play();
const myTimeout = setTimeout(REDIRECIONAR, 15000);  
function REDIRECIONAR() {window.location.href = "https://pingobras.glitch.me"}
localStorage.setItem("bypass","0")
}

if(!btnListDev || !listDEV) {
console.warn("Deu Pau Nos Dados Dos Devedores Do Site")
}else{
btnListDev.addEventListener('click', function() {
  ClickMouseFUNCTIONS.play();
if(listDEV.style.display === 'block') {listDEV.style.display = 'none';
}else{listDEV.style.display = 'block';}
});
btnListDev.addEventListener('mouseover', function() {
ClickMouseFUNCTIONS.play();
listDEV.style.display = 'block';})
}

function pausePingobras(){
const music = document.getElementById('pingobras-music');
music.pause();}


//Events listener
if(!btnlistChangelogs || !listChangelogs) {
console.warn("Deu Pau Nos Dados Da Changelogs Do Site")
}else{
btnlistChangelogs.addEventListener('click', function() {
ClickMouseFUNCTIONS.play();
if(listChangelogs.style.display === 'block') {
      listChangelogs.style.display = 'none';
      console.log("FUNCTIONS/LOG> A Changelogs foi escondida!");
}else{
      listChangelogs.style.display = 'block';
    console.log("FUNCTIONS/LOG> A Changelogs esta visivel!")};});
  
btnlistChangelogs.addEventListener('mouseover', function() {
ClickMouseFUNCTIONS.play();  
listChangelogs.style.display = 'block';
    console.log("FUNCTIONS/LOG> A Changelogs esta visivel!");})
}


if(!Subir) {
console.warn("Deu Pau No Redirect Para Subir Do Site")
}else{
Subir.addEventListener("click", function() {
  ClickMouseFUNCTIONS.play();
    window.scrollTo(0, 0);
  console.log("FUNCTIONS/LOG> O Usuario foi redirecionado para cima!");});
}
if(!Descer) {
console.warn("Deu Pau No Redirect Para Descer Do Site")
}else{
Descer.addEventListener("click", function() {
  ClickMouseFUNCTIONS.play();
    window.scrollTo(0, 2000);
  console.log("FUNCTIONS/LOG> O Usuario foi redirecionado para baixo!");});
}


//songs