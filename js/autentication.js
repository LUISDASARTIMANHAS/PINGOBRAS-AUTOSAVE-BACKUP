let senha = document.querySelector("#AdminPassword")
let msgError = document.querySelector("#msgError")

function enviar(){ 
console.log("func-enviar");
if(senha == 123456){
    document.documentElement.requestFullscreen();
    window.location.href = 'https://codepen.io/luisdasartimanhas/full/ZEaVByy'
    
    let mathRandom = Math.random().toString(16).substr(2)
    let token = mathRandom + mathRandom
    
    localStorage.setItem('token', token)}
  else {
    senha.setAttribute('style', 'color: red')
    senha.setAttribute('style', 'border-color: red')
    msgError.setAttribute('style', 'display: block')
    msgError.innerHTML = 'Usuário ou senha incorretos'
  }
}