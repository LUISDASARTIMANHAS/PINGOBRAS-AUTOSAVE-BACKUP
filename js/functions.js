const WindowSongError1 = new Audio('https://cdn.glitch.global/b39d6a4a-0e14-4b41-930d-29d3ccd6c137/Windows-error-song?v=1656019161212.mp3?v=1651870846885.mp3');

function CalcJuros() {
let EMP = document.getElementById("EMP").value;
let JurosSem = document.getElementById("jurosSem")
let CalcTotal = document.getElementById("calcTotal")
let ProxSem = document.getElementById("proximasem")
const btncalc = document.getElementById("btnCalc")

if(EMP == 0){
    btncalc.style.opacity = "0.7"
    btncalc.style.cursor = "not-allowed"
    JurosSem.innerHTML = "Insira o valor na calculadora!"
    JurosSem.style.color = "red"
    CalcTotal.innerHTML = "Insira o valor na calculadora!"
    CalcTotal.style.color = "red"
    ProxSem.innerHTML = "Insira o valor na calculadora!"
    ProxSem.style.color = "red"
    EMP.style.outlineColor = "red"
  }else{
  btncalc.style.opacity = "1"
  btncalc.style.cursor = "pointer"
  let porcent = 0.2
  let calc = EMP * porcent;
  let total = EMP + 0.10; 
  
  JurosSem.innerHTML = calc
  CalcTotal.innerHTML = total
  JurosSem.style.color = "green"
  CalcTotal.style.color = "green"
  ProxSem.style.color = "green"
  EMP.style.outlineColor = "blue"}
  
  }

const btndisabled = document.querySelector("[disabled]");
btndisabled.addEventListener('click', function() {
    window.location.href = "https://pingobras-404.glitch.me"
    document.querySelector("[disabled]").style.cursor = "progress"
    console.log("Usuario redirecionado para site fora do ar!")
});

function openForm() {
  document.getElementById("jschat").style.display = "block";
  alert("ESSA FUNÇÃO E EXPERIMENTAL E PODE NÃO FUNCIONAR OU CONTER BUGS!");
  console.log("chat aberto!");
  WindowSongError1.play();
setInterval(autopauseWindowSongError1, 15000);
function autopauseWindowSongError1() {
  WindowSongError1.pause() 
 console.log("Window Song Error1 pausado")}

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
btnlist.addEventListener('mouseover', function() {
listDEV.style.display = 'block';
    console.log("lista visivel!");
})

let btnlistChangelogs = document.getElementById('btnlistChangelogs');
var listChangelogs = document.getElementById('listChangelogs');
btnlistChangelogs.addEventListener('click', function() {
    if(listChangelogs.style.display === 'block') {
      listChangelogs.style.display = 'none';
      console.log("Changelogs escondida!");
  } else {
      listChangelogs.style.display = 'block';
    console.log("Changelogs visivel!");}
});
btnlistChangelogs.addEventListener('mouseover', function() {
listChangelogs.style.display = 'block';
    console.log("Changelogs visivel!");
})


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

function pageFilmSerie() {
window.location.href = "https://pingobras.glitch.me/films&series.html";
};

function DESLOGAR() {
  alert("usuario deslogado")
const tokenSair = {token: "desconectado"};
const CryptotokenS = JSON.stringify(tokenSair);
console.log("codificando token");
  localStorage.setItem("JsonToken", CryptotokenS);
console.log("token redefinido");
  window.location.href = "https://pingobras.glitch.me"
}
function DESLOGAR2() {
  alert("usuario deslogado")
const tokenSair = {token: "desconectado"};
const CryptotokenS = JSON.stringify(tokenSair);
console.log("codificando token");
  localStorage.setItem("JsonToken", CryptotokenS);
console.log("token redefinido");
  window.location.href = "https://pingobras.glitch.me"
  WindowSongError1.play();
setInterval(autopauseWindowSongError1, 15000);
function autopauseWindowSongError1() {
  WindowSongError1.pause() 
 console.log("Window Song Error1 pausado")}

}


const music = new Audio('https://cdn.glitch.global/b39d6a4a-0e14-4b41-930d-29d3ccd6c137/Electro-Light%20-%20Symbolism%20%5BNCS%20Release%5D.mp3?v=1651870846885.mp3');
function play() {
music.play();
music.loop =true;
setTimeout(music.pause(),9000)
}
music.pause()

const audioContext = new AudioContext();
const element = document.querySelector("#audioJs");
const source = audioContext.createMediaElementSource(element);
source.connect(audioContext.destination)
element.play;

function myFunction() {
  document.getElementById("demo").innerHTML = "YOU CLICKED ME!";
}

