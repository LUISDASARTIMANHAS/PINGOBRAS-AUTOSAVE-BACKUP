  let buttonAutenticar = document.querySelector('#autenticador')
  let listaUser = localStorage.getItem("listaUser");
  let finder = JSON.parse(listaUser)
  let STORAGE = localStorage.getItem("JSON STORAGE");
  let STORAGER = JSON.parse(STORAGE);
  let userscad = document.querySelector("#userCads")
  let sep = ","

  userscad.innerHTML = finder[0].userCad + sep 
  userscad.innerHTML =  finder[1].userCad + sep
  userscad.innerHTML =  finder[2].userCad + sep

function autenticar(){
  let usuario = document.querySelector('#usuario')
  
  let senha = document.querySelector('#senha')
  
  let msgError = document.querySelector('#msgError')
  let msgSuccess = document.querySelector('#msgSuccess')
  
  let listaUser = []
  
  let userValid = {
    nome: '',
    user: '',
    senha: ''
  }
  
  listaUser = JSON.parse(localStorage.getItem('listaUser'))
  
  listaUser.forEach((item) => {
    if(usuario.value == item.userCad && senha.value == item.senhaCad){
       
      userValid = {
         nome: item.nomeCad,
         user: item.userCad,
         senha: item.senhaCad
       }
      
    }
  })
     
if(usuario.value == userValid.user && senha.value == userValid.senha){
    setTimeout(wait,7000);
    function wait() {window.location.href = 'https://pingobras.glitch.me/user'}
    
    let mathRandom = Math.random().toString(16).substr(2)
    let token = mathRandom + mathRandom
    
    localStorage.setItem('token', token)
    localStorage.setItem('userLogado', JSON.stringify(userValid))
      
    msgError.setAttribute('style', 'display: none')
    msgSuccess.innerHTML = 'Validando acesso...'
    msgSuccess.setAttribute('style', 'display: block')
}else{
    msgError.setAttribute('style', 'display: block')
    msgError.innerHTML = 'Usuário ou Senha Incorretos'
    msgSuccess.setAttribute('style', 'display: none')
  }
  
}