function enviar(){
    let senha = document.querySelector('#senha')
  
  let msgError = document.querySelector('#msgError')
  let listaUser = []
  
  let key = 12345
  if(senha.value == key.senha){
    document.documentElement.requestFullscreen();
    window.location.href = 'https://codepen.io/luisdasartimanhas/full/ZEaVByy'
    
    let mathRandom = Math.random().toString(16).substr(2)
    let token = mathRandom + mathRandom
    
    localStorage.setItem('token', token)
    localStorage.setItem('Jsonkeys', JSON.stringify(key))}
  
  else {
    senha.setAttribute('style', 'color: red')
    senha.setAttribute('style', 'border-color: red')
    msgError.setAttribute('style', 'display: block')
    msgError.innerHTML = 'Usuário ou senha incorretos'
   
  }
}

function refresh(){
  const adminKey = {senha: 123456};
const CryptoKey = JSON.stringify(adminKey);
localStorage.setItem("JsonKeys", CryptoKey);
alert('O banco de dados foi restaurado!')
}
