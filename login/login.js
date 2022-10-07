  const buttonAutenticar = document.querySelector('#autenticador')
  const listaUserObj = localStorage.getItem("listaUser");
  const STGlobalDBObj = localStorage.getItem('GlobalDB')
  const finder = JSON.parse(listaUserObj)
  const finder2 = JSON.parse(STGlobalDBObj)
  
  const btnVerSenhaL = document.getElementById("verSenhaLogin")
  const userscad = document.querySelector("#userCad")
  const userscad2 = document.querySelector("#userCad2")
  const userscad3 = document.querySelector("#userCad3")
  const userscad4 = document.querySelector("#userCad4")
  const userscad5 = document.querySelector("#userCad5")
  const userscad6 = document.querySelector("#userCad6")
  let sep = ","

  userscad.innerHTML = finder2[0].userCad + sep 
  userscad2.innerHTML =  finder2[1].userCad + sep 
  userscad3.innerHTML =  finder2[2].userCad + sep
  userscad4.innerHTML = finder2[3].userCad + sep
  userscad5.innerHTML = finder2[4].userCad + sep
  userscad6.innerHTML = finder[0].userCad 
  

function autenticar(){
  let usuario = document.querySelector('#usuario')
  let senha = document.querySelector('#senha')
  
  let msgError = document.querySelector('#msgError')
  let msgSuccess = document.querySelector('#msgSuccess')
  
  
  let listaUser = []
  let userValid = {
    nome: '',
    user: '',
    senha: '',
    saldo: ''
  }
  listaUser = JSON.parse(localStorage.getItem('listaUser'))
  listaUser.forEach((item) => {
    if(usuario.value == item.userCad && senha.value == item.senhaCad){
      userValid = {
         nome: item.nomeCad,
         user: item.userCad,
         senha: item.senhaCad,
         saldo: item.saldoCad
       }
      
    }
  })
  let STGlobalDBObj = []
  let userValid2 = {
    nome: '',
    user: '',
    senha: '',
    saldo: '',
    PerfilImg: ''
  }
  STGlobalDBObj = JSON.parse(localStorage.getItem('GlobalDB'))
  STGlobalDBObj.forEach((item) => {
    if(usuario.value == item.userCad && senha.value == item.senhaCad){
      userValid2 = {
         nome: item.nomeCad,
         user: item.userCad,
         senha: item.senhaCad,
         saldo: item.saldoCad,
         PerfilImg: item.PerfilIMG
       }
      
    }
  })
  
  if(usuario.value == "" && senha.value == "") {
    msgError.setAttribute('style', 'display: block')
    msgError.innerHTML = 'Usuário ou Senha Incorretos'
    msgSuccess.setAttribute('style', 'display: none')
    
  }else{
    if(usuario.value == "equipe" && senha.value == "administrador"){
    setTimeout(wait,7000);
    function wait() {window.location.href = "https://pingobras.glitch.me/admin"}
  
    let ADMtoken = "conectado"
    localStorage.setItem('ADMtoken', ADMtoken)
    console.log("LOGIN> token admin setado!")
    
    const bypasstokenJS = {bypass: 1541129000, bypass2: 65810473921}
    const bypasstoken = JSON.stringify(bypasstokenJS);
    localStorage.setItem("bypass",bypasstoken)
    console.log("LOGIN> bypass setado!")
    
    
    msgError.setAttribute('style', 'display: none')
    msgSuccess.innerHTML = 'Validando acesso...'
    msgSuccess.setAttribute('style', 'display: block')
}else{   
if(usuario.value == userValid.user && senha.value == userValid.senha||usuario.value == userValid2.user && senha.value == userValid2.senha){
    setTimeout(wait,7000);
    function wait() {window.location.href = 'https://pingobras.glitch.me/user'}
    
    let clientID = Math.random().toString(2)
    let mathRandom = Math.random().toString(16).substr(2)
    let token = mathRandom + mathRandom+"ValidDB:"+clientID
    localStorage.setItem('token', token)
    localStorage.setItem('userLogado', JSON.stringify(userValid))
    localStorage.setItem('userLogado', JSON.stringify(userValid2))
    console.log("LOGIN> token User setado!")  
  
    msgError.setAttribute('style', 'display: none')
    msgSuccess.innerHTML = 'Validando acesso...'
    msgSuccess.setAttribute('style', 'display: block')
}else{
    msgError.setAttribute('style', 'display: block')
    msgError.innerHTML = 'Usuário ou Senha Incorretos'
    msgSuccess.setAttribute('style', 'display: none')}
  }
       }
  
  
}

const ClickMouseLOGIN = new Audio('https://cdn.glitch.global/b39d6a4a-0e14-4b41-930d-29d3ccd6c137/click%20do%20mouse.mp3?v=1661006466474');

btnVerSenhaL.addEventListener('click', ()=>{
ClickMouseLOGIN.play();
  let inputVerSenhaL = document.getElementById('senha')
  if(inputVerSenhaL.getAttribute('type') == 'password'){
    inputVerSenhaL.setAttribute('type', 'text')
    inputVerSenhaL.placeholder = "123456"
  }else{
    inputVerSenhaL.setAttribute('type', 'password')
    inputVerSenhaL.placeholder = "******"}
})