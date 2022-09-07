const mario = document.querySelector(".mario")


document.addEventListener("keydown", jump);
function jump() {
  mario.classList.add(".jump")
}