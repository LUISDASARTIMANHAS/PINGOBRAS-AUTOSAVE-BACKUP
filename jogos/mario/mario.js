const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const pipePlant = document.querySelector(".pipe-plant");
const gameover = document.querySelector(".game-over");
const cubo = document.querySelector(".cubo");
const telaWidth = screen.availWidth;
const body = document.querySelector("body");
const marioJump = new Audio('https://cdn.glitch.global/b39d6a4a-0e14-4b41-930d-29d3ccd6c137/jump%20super%20mario.mp3?v=1662590435349');
const marioGameover= new Audio("https://cdn.glitch.global/b39d6a4a-0e14-4b41-930d-29d3ccd6c137/Super Mario Bros. - Game Over Sound Effect.mp3?v=1662591735840");
let placarGB = 0
var second = 0;
const labelPlacar = document.querySelector("#placar");
const LabelHightScore = document.querySelector("#HightScore");
const runTime = document.getElementById("runTime");
const timeGame = setInterval(CalctimeGame,1000)
let HightScore = localStorage.getItem("Mario Jump HightScore");

if(telaWidth <= 650){
  alert("A tela do usuario e muito curta!");
  body.style.display = "none"
}

document.addEventListener("keydown", jump);
document.addEventListener("click", jump);

function jump() {
  mario.classList.add("jump");
  marioJump.play();
  
  setTimeout(() => {
  mario.classList.remove("jump");
  },500);
  
}

const loopPerdeu = setInterval(perdeu, 10)
function perdeu() {
  const pipePosition =  pipe.offsetLeft;
  const pipePlantPosition =  pipePlant.offsetLeft;
  const cuboPosition =  cubo.offsetLeft;
  const marioPosition =  +window.getComputedStyle(mario).bottom.replace("px", "");
  
  if(pipePosition <= 120 && pipePosition > 0 && marioPosition <= 80 || pipePlantPosition <= 120 && pipePlantPosition > 0 ){
    
    pipe.style.animation = "none"
    pipe.style.left = `${pipePosition}px`
    pipePlant.style.animation = "none"
    pipePlant.style.left = `${pipePlantPosition}px`
    mario.style.animation = "none"
    mario.style.bottom = `${marioPosition}px`
    cubo.style.animation = "none"
    cubo.style.left = `${cuboPosition}px`
    mario.src = "https://preview.redd.it/dz7i4gsisu721.png?auto=webp&s=dfa780e2356ebec9b84c7537a852fc1732e50aba"
    mario.style.width = "80px"
    mario.style.height = "80px"
    mario.style.marginLeft = "50px"
    gameover.classList.add("animation-game-over");
    gameover.style.display = "block";
    marioGameover.play();
    
    clearInterval(timeGame)
    clearInterval(loopPerdeu)
    setTimeout(Reload,9000)
    function Reload(){
      //window.location.href = "https://pingobras.glitch.me/jogos/mario.html"
    }
  }else{
    if(pipePosition < "-17" && marioPosition >= 80){
    placarGB = placarGB + 1;
    labelPlacar.innerHTML = placarGB;} 
  }

  
  LabelHightScore.innerHTML = HightScore
  if(placarGB >= HightScore){
  localStorage.setItem("Mario Jump HightScore", placarGB);}  
  
  
}
function CalctimeGame(){

second = second+1
runTime.innerHTML = second
  }

/*if(placarST){
const userMario = prompt("Insira Seu Nome","LDA");
const dadosMarioObj = {nome:userMario,pontos: HightScore};
const dadosMario = JSON.stringify(dadosMarioObj);
alert(dadosMario)}*/

