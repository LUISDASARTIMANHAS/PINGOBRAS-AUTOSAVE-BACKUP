const WindowSongError1 = new Audio('https://cdn.glitch.global/b39d6a4a-0e14-4b41-930d-29d3ccd6c137/Windows-error-song?v=1656019161212.mp3?v=1651870846885.mp3');


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