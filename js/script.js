let STORAGE = localStorage.getItem("JSON STORAGE")
let YoutubeLinks = localStorage.getItem("YoutubeLinks")


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
  console.log("chat aberto!");
}

function closeForm() {
  document.getElementById("jschat").style.display = "none";
  console.log("chat fechado");
}

let btnescondedor = document.getElementById('escondedor');
var esconder = document.querySelector('.list');
btnescondedor.addEventListener('click', function() {
    if(esconder.style.display === 'block') {
      esconder.style.display = 'none';
      console.log("lista escondida!");
  } else {
      esconder.style.display = 'block';
    console.log("lista visivel!");
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
window.location.href = ("https://pingobras-autentication.glitch.me/");
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

let CR = JSON.parse(STORAGE);
console.log(CR);

const btndisabled = document.querySelector("[disabled]");
if (btndisabled){
  btndisabled.onclick = function(){
    window.location.href = "https://pingobras-404.glitch.me"
    document.querySelector(".site-altura").style.cursor = "progress";
    console.log("Usuario redirecionado para site fora do ar!");
  };}


let YTRe = JSON.parse(YoutubeLinks);
document.getElementById("console").innerHTML = YTRe.LINK1;
console.log(YTRe);

var audio = document.getElementById("audio");
document.getElementById("volume").addEventListener("mousemove", function(){
var volume = document.getElementById("volume").value;
audio.volume = volume;
console.log(volume);
}, false);