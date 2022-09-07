const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const gameover = document.querySelector(".game-over");
const telaWidth = screen.availWidth;
const body = document.querySelector("body")
const marioJump = new Audio('https://cdn.glitch.global/b39d6a4a-0e14-4b41-930d-29d3ccd6c137/Super Mario Bros. - Jump Sound Effect.mp3?v=1662589743636');

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
  const marioPosition =  +window.getComputedStyle(mario).bottom.replace("px", "");
  
  if(pipePosition <= 120 && pipePosition > 0 && marioPosition <= 80){
    
    pipe.style.animation = "none"
    pipe.style.left = `${pipePosition}px`
    mario.style.animation = "none"
    mario.style.bottom = `${marioPosition}px`
    mario.src = "https://preview.redd.it/dz7i4gsisu721.png?auto=webp&s=dfa780e2356ebec9b84c7537a852fc1732e50aba"
    mario.style.width = "80px"
    mario.style.height = "80px"
    mario.style.marginLeft = "50px"
    gameover.classList.add("animation-game-over");
    gameover.style.display = "block";
    
    clearInterval(loopPerdeu)
  }
}