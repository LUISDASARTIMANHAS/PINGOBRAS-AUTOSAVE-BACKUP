const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");

document.addEventListener("keydown", jump);
function jump() {
  mario.classList.add("jump");
  
  setTimeout(() => {
  mario.classList.remove("jump");
  },500);
  
}

const loopPerdeu = setInterval(perdeu, 10)
function perdeu() {
  const pipePosition =  pipe.offsetLeft;
  if(pipePosition <= 120){
    
    pipe.style.animation = "none"
    pipe.stile.left = `${pipePosition}px`
  }
}