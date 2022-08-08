  let buttonAutenticar = document.querySelector('#autenticador')
  let listaUser = localStorage.getItem("listaUser");
  let finder = JSON.parse(listaUser)
  let STORAGE = localStorage.getItem("JSON STORAGE");
  let STORAGER = JSON.parse(STORAGE);
  let btnVerSenhaL = document.getElementById("verSenhaLogin")
  let userscad = document.querySelector("#userCad")
  let userscad2 = document.querySelector("#userCad2")
  let userscad3 = document.querySelector("#userCad3")
  let userscad4 = document.querySelector("#userCad4")
  let userscad5 = document.querySelector("#userCad5")
  let userscad6 = document.querySelector("#userCad6")
  let sep = ","

  userscad.innerHTML = finder[0].userCad + sep 
  userscad2.innerHTML =  finder[1].userCad + sep 
  userscad3.innerHTML =  finder[2].userCad + sep
  userscad4.innerHTML = finder[3].userCad + sep
  userscad5.innerHTML = finder[4].userCad + sep
  userscad6.innerHTML = finder[5].userCad 
  

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
  if(usuario.value == "equipe" && senha.value == "administrador"){
    setTimeout(wait,7000);
    function wait() {window.location.href = "https://pingobras.glitch.me/admin"}
  
    let mathRandom = Math.random().toString(16).substr(2)
    let token = mathRandom + mathRandom
    localStorage.setItem('token', token)
    localStorage.setItem('userLogado', JSON.stringify(userValid))
    console.log("LOGIN> token admin setado!")
    
    const bypasstokenJS = {bypass: 1541129000, bypass2: 65810473921}
    const bypasstoken = JSON.stringify(bypasstokenJS);
    localStorage.setItem("bypass",bypasstoken)
    console.log("LOGIN> bypass setado!")
    
    
    msgError.setAttribute('style', 'display: none')
    msgSuccess.innerHTML = 'Validando acesso...'
    msgSuccess.setAttribute('style', 'display: block')
}else{   
if(usuario.value == userValid.user && senha.value == userValid.senha){
    setTimeout(wait,7000);
    function wait() {window.location.href = 'https://pingobras.glitch.me/user'}
    
    let mathRandom = Math.random().toString(16).substr(2)
    let token = mathRandom + mathRandom
    localStorage.setItem('token', token)
    localStorage.setItem('userLogado', JSON.stringify(userValid))
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

btnVerSenhaL.addEventListener('click', ()=>{
  let inputVerSenhaL = document.getElementById('senha')
  if(inputVerSenhaL.getAttribute('type') == 'password'){
    inputVerSenhaL.setAttribute('type', 'text')
    inputVerSenhaL.placeholder = "123456"
  }else{
    inputVerSenhaL.setAttribute('type', 'password')
    inputVerSenhaL.placeholder = "******"}
})