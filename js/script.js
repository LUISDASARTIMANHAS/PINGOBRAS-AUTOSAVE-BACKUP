
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
}

function closeForm() {
  document.getElementById("jschat").style.display = "none";
}

let btnescondedor = document.getElementById('escondedor');
var esconder = document.querySelector('.list');
btnescondedor.addEventListener('click', function() {
    if(esconder.style.display === 'block') {
      esconder.style.display = 'none';
  } else {
      esconder.style.display = 'block';
  }
});

var btnBack = document.querySelector("#back-to-top");
btnBack.addEventListener("click", function() {
    window.scrollTo(0, 0);
});
var Descer = document.querySelector("#jsDescer");
Descer.addEventListener("click", function() {
    window.scrollTo(0, 2000);
});
var batepapoDescer = document.querySelector("#jsDescerBatePapo");
batepapoDescer.addEventListener("click", function() {
    window.scrollTo(0, 2000);
});

function autentication() {
window.location.href = ("https://pingobras-autentication.glitch.me/");
};


window.addEventListener("load", function(){
setTimeout(function open(event){
document.querySelector(".popup").style.display = "block";
document.querySelector(".popup").style.opacity = "1";
document.querySelector("body").style.opacity = "0.5";
},5000)
});

document.querySelector("#close").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "none";
    document.querySelector("body").style.opacity = "1";
});

let STORAGE = localStorage.getItem("JSON STORAGE");
let CR = JSON.parse(STORAGE);
console.log(CR);
