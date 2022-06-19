let STORAGE = localStorage.getItem("JSON STORAGE")
console.log("armazenamento JSON requirido");
let  STORAGEYT = localStorage.getItem("YoutubeLinks")
console.log("armazenamento YTL requirido");

  const date = new Date();
  document.getElementById("demo").innerHTML = date.toLocaleTimeString();
  console.log(date.toLocaleTimeString())
  
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

  
function pageFilmSerie() {
window.open("https://pingobras.glitch.me/films&series.html");
};

window.addEventListener("load", function(){
setTimeout(function open(event){
document.querySelector(".popup").style.display = "block";
document.querySelector(".site-altura").style.opacity = "0.2";
document.querySelector(".site-altura").style.cursor = "not-allowed";
  console.log("Anuncio carregado!"); 
},5000)
});

document.querySelector("#close").addEventListener("mouseover", function(){
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




