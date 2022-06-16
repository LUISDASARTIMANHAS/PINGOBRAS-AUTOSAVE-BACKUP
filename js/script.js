let STORAGE = localStorage.getItem("JSON STORAGE")
console.log("armazenamento JSON requirido");
let  STORAGEYT = localStorage.getItem("YoutubeLinks")
console.log("armazenamento YTL requirido");
let tokenjson = localStorage.getItem("JsonToken");
let tokenR = JSON.parse(tokenjson);

let userID = document.getElementById("userID");
 userID.innerHTML = tokenR.token;


console.log("Hello 🌎");
const btn = document.querySelector("button");
if (btn){
  btn.onclick = function(){
    btn.classList.toggle("dipped");
  };}

const UPinput = document.querySelector("#UP1");
if (UPinput){
  UPinput.onclick = function(){
    UPinput.classList.toggle("dipped");
  };}
const UP2input = document.querySelector("#UP2");
if (UP2input){
  UP2input.onclick = function(){
    UP2input.classList.toggle("dipped");
  };}

function openForm() {
  document.getElementById("jschat").style.display = "block";
  alert("ESSA FUNÇÃO E EXPERIMENTAL E PODE NÃO FUNCIONAR OU CONTER BUGS!");
  console.log("chat aberto!");
}

function closeForm() {
  document.getElementById("jschat").style.display = "none";
  console.log("chat fechado");
}

let btnlist = document.getElementById('btnlist');
var listDEV = document.getElementById('listDevedores');
btnlist.addEventListener('click', function() {
    if(listDEV.style.display === 'block') {
      listDEV.style.display = 'none';
      console.log("lista escondida!");
  } else {
      listDEV.style.display = 'block';
    console.log("lista visivel!");
  }
});
let btnlistChangelogs = document.getElementById('btnlistChangelogs');
var listChangelogs = document.getElementById('listChangelogs');
btnlistChangelogs.addEventListener('click', function() {
    if(listChangelogs.style.display === 'block') {
      listChangelogs.style.display = 'none';
      console.log("Changelogs escondida!");
  } else {
      listChangelogs.style.display = 'block';
    console.log("Changelogs visivel!");
  }
});


var btnBack = document.querySelector("#back-to-top");
btnBack.addEventListener("click", function() {
    window.scrollTo(0, 0);
  console.log("Usuario redirecionado para cima!");
});
var Descer = document.querySelector("#jsDescer");
Descer.addEventListener("click", function() {
    window.scrollTo(0, 2000);
  console.log("Usuario redirecionado para baixo!");
});
var batepapoDescer = document.querySelector("#jsDescerBatePapo");
batepapoDescer.addEventListener("click", function() {
    window.scrollTo(0, 2000);
  console.log("Usuario redirecionado para bate-papo!");
});

function autentication() {
window.location.href = ("https://pingobras.glitch.me/autentication.html");
alert("ESSA FUNÇÃO E EXPERIMENTAL E PODE NÃO FUNCIONAR OU CONTER BUGS!");
};
function pageFilmSerie() {
window.open("https://pingobras.glitch.me/films=pingobras.html");
alert("ESSA FUNÇÃO E EXPERIMENTAL E PODE NÃO FUNCIONAR OU CONTER BUGS!");
};

window.addEventListener("load", function(){
setTimeout(function open(event){
document.querySelector(".popup").style.display = "block";
document.querySelector(".site-altura").style.opacity = "0.2";
document.querySelector(".site-altura").style.cursor = "not-allowed";
  console.log("Anuncio carregado!"); 
},5000)
});

document.querySelector("#close").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "none";
    document.querySelector(".site-altura").style.opacity = "1";
    document.querySelector(".site-altura").style.cursor = "default";
  console.log("Anuncio fechado!");
});

let CL = JSON.parse(STORAGE);
console.log("client descodificada");
console.log(CL);

const btndisabled = document.querySelector("[disabled]");
if (btndisabled){
  btndisabled.onclick = function(){
    window.location.href = "https://pingobras-404.glitch.me"
    document.querySelector(".site-altura").style.cursor = "progress";
    console.log("Usuario redirecionado para site fora do ar!");
  };}

setTimeout( function REL(){
  
const YTLinks = JSON.parse(STORAGEYT);
console.log(YTLinks);
document.getElementById("console").innerHTML = YTLinks.LINK1;
document.getElementById("ytlink1").innerHTML = YTLinks.LINK1;
},125000);
