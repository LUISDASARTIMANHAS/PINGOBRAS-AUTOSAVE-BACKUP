const WindowSongError1 = new Audio('https://cdn.glitch.global/b39d6a4a-0e14-4b41-930d-29d3ccd6c137/Windows-error-song?v=1656019161212.mp3?v=1651870846885.mp3');

function CalcJuros() {
 try {

   
let EMP = document.getElementById("EMP").value;
const JurosSem = document.getElementById("jurosSem")
const JurosProxSem = document.getElementById("jurosProxSem")
const CalcTotal = document.getElementById("calcTotal")
const ProxSem = document.getElementById("proximasem")
const btncalc = document.getElementById("btnCalc")

if(EMP == 0){
    btncalc.style.opacity = "0.7"
    btncalc.style.cursor = "not-allowed"
    JurosSem.innerHTML = "Insira o valor na calculadora!"
    JurosSem.style.color = "red"
    CalcTotal.innerHTML = "Insira o valor na calculadora!"
    CalcTotal.style.color = "red"
    JurosProxSem.innerHTML = "Insira o valor na calculadora!"
    JurosProxSem.style.color = "red"
    ProxSem.innerHTML = "Insira o valor na calculadora!"
    ProxSem.style.color = "red"
    EMP.style.outlineColor = "red"
  }else{
  btncalc.style.opacity = "1"
  btncalc.style.cursor = "pointer"
  const porcent = 0.2 
  const juros = EMP * porcent;
  const total = (Number(EMP) + Number(juros));
  const jurosNew = total * porcent
  const TotalProxSem = total + jurosNew
  
  JurosSem.innerHTML = juros
  CalcTotal.innerHTML = total
  JurosProxSem.innerHTML = jurosNew
  ProxSem.innerHTML = TotalProxSem
  JurosSem.style.color = "green"
  CalcTotal.style.color = "green"
  JurosProxSem.style.color = "green"
  ProxSem.style.color = "green"
  EMP.style.outlineColor = "blue"}
 }catch (err) {
  console.log(err);
}
  
   
  }

function mostrarsenha() {
  let inputSenha = document.getElementById('senha')
  
  if(inputSenha.getAttribute('type') == 'password'){
    inputSenha.setAttribute('type', 'text')
    inputSenha.placeholder = "1234"
  }else {
    inputSenha.setAttribute('type', 'password')
    inputSenha.placeholder = "****"}
  
}

function openForm() {
  document.getElementById("jschat").style.display = "block";
  alert("ESSA FUNÇÃO E EXPERIMENTAL E PODE NÃO FUNCIONAR OU CONTER BUGS!");
  console.log("FUNCTIONS/LOG> O chat foi aberto!");
  WindowSongError1.play();
setInterval(autopauseWindowSongError1, 15000);
function autopauseWindowSongError1() {
  WindowSongError1.pause() }

}
function closeForm() {
  document.getElementById("jschat").style.display = "none";
  console.log("FUNCTIONS/LOG> O chat foi fechado");
}

let btnlist = document.getElementById('btnlist');
var listDEV = document.getElementById('listDevedores');
btnlist.addEventListener('click', function() {
    if(listDEV.style.display === 'block') {
      listDEV.style.display = 'none';
  } else {
      listDEV.style.display = 'block';
  }
});
btnlist.addEventListener('mouseover', function() {
listDEV.style.display = 'block';
})

let btnlistChangelogs = document.getElementById('btnlistChangelogs');
var listChangelogs = document.getElementById('listChangelogs');
btnlistChangelogs.addEventListener('click', function() {
    if(listChangelogs.style.display === 'block') {
      listChangelogs.style.display = 'none';
      console.log("FUNCTIONS/LOG> A Changelogs foi escondida!");
  } else {
      listChangelogs.style.display = 'block';
    console.log("FUNCTIONS/LOG> A Changelogs esta visivel!");}
});
btnlistChangelogs.addEventListener('mouseover', function() {
listChangelogs.style.display = 'block';
    console.log("FUNCTIONS/LOG> A Changelogs esta visivel!");
})



function subir() {
    window.scrollTo(0, 0);
  console.log("FUNCTIONS/LOG> O Usuario foi redirecionado para cima!");
};
var Descer = document.querySelector("#jsDescer");
Descer.addEventListener("click", function() {
    window.scrollTo(0, 2000);
  console.log("FUNCTIONS/LOG> O Usuario foi redirecionado para baixo!");
});
var batepapoDescer = document.querySelector("#jsDescerBatePapo");
batepapoDescer.addEventListener("click", function() {
    window.scrollTo(0, 2000);
  console.log("FUNCTIONS/LOG> O Usuario foi redirecionado para bate-papo!");
});

function pageFilmSerie() {
window.location.href = "https://pingobras.glitch.me/films&series.html";
};

function DESLOGAR() {
  alert("usuario deslogado")
const tokenSair = "desconectado";
  localStorage.setItem("token", tokenSair);
  window.location.href = "https://pingobras.glitch.me"
}
function DESLOGAR2() {
alert("usuario deslogado")
const tokenSair = "desconectado";
  localStorage.setItem("token", tokenSair);
  window.location.href = "https://pingobras.glitch.me"
  WindowSongError1.play();
setInterval(autopauseWindowSongError1, 15000);
function autopauseWindowSongError1() {
  WindowSongError1.pause() }

}


const music = new Audio('https://cdn.glitch.global/b39d6a4a-0e14-4b41-930d-29d3ccd6c137/Electro-Light%20-%20Symbolism%20%5BNCS%20Release%5D.mp3?v=1651870846885.mp3');
function play() {
music.play();
music.loop =true;
setTimeout(music.pause(),9000)
}
music.pause()


function myFunction() {
  document.getElementById("demo").innerHTML = "YOU CLICKED ME!";
}

