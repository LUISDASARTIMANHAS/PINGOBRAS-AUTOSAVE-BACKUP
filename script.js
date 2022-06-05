
console.log("Hello 🌎");
const btn = document.querySelector("button");
if (btn){
  btn.onclick = function(){
    btn.classList.toggle("dipped");
  };}
const input = document.querySelector("input");
if (input){
  input.onclick = function(){
    input.classList.toggle("dipped");
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
window.location.href = ("authentication.html");
};


window.addEventListener("load", function(){
setTimeout(
function open(event){
document.querySelector(".popup").style.display = "block";},5000)
});
document.querySelector("#close").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "none";
});



let client = JSON.parse(localStorage.getItem('client') || '[]')

client.push(
  {
      luis: {name: "luis das artimanhas",saldo: 3.50},
      lukinhas: {name: "lukinhas",saldo:3.50},
      douglas: {name: "douglasPG",saldo: 13.00},
      valdo: {name: "valdo9645",saldo: -3.00},
      vm: {name: "skip",saldo: 1.00},
      eduardo: {name: "dudu",saldo: 2.00},
           })
const DJson = JSON.stringify(client);
localStorage.setItem("JSON STORAGE", DJson);


let STORAGE = localStorage.getItem("JSON STORAGE");
let CR = JSON.parse(STORAGE);
console.log(CR);
let UserVm = JSON.parse(CR.vm.name);


