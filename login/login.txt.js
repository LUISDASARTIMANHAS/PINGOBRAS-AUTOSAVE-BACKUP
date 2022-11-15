  const buttonAutenticar = document.querySelector('#autenticador')
  const listaUserObj = localStorage.getItem("listaUser");
  const finder = JSON.parse(listaUserObj)
  const btnVerSenhaL = document.getElementById("verSenhaLogin")
  const userscad8 = document.querySelector("#userCad8")
  let sep = ","
  const STGlobalDBObj = [
{"nomeCad": "administrador",
 "userCad": "equipe",
 "senhaCad": "P;DMMSSL",
 "saldoCad": 1500.90,
 "PerfilIMG":"",
 "Token":"192.168.100.1",
 "UserBGCad":""
},

{"nomeCad": "Florisvaldo de Oliveira Schulz", 
 "userCad": "Valdo", 
 "senhaCad": "96451290", 
 "saldoCad": 88,
 "PerfilIMG":"https://cdn.glitch.global/b39d6a4a-0e14-4b41-930d-29d3ccd6c137/valdo.jpg?v=1665316103313",
 "Token":"192.168.100.22",
 "UserBGCad":"#FF0000"
},

{"nomeCad": "Luis Augusto de Souza Carvalho", 
 "userCad": "LUIS DAS ARTIMANHAS", 
 "senhaCad": "998774163", 
 "saldoCad": 24,
 "PerfilIMG":"https://cdn.discordapp.com/avatars/533042065408262164/33fa87caed0f1a449be530fef6a1d71b.webp?size=2048",
 "Token":"192.168.100.11",
 "UserBGCad":"#9900ff"
},

{"nomeCad": "José Eduardo Batista de Souza", 
 "userCad": "notfound", 
 "senhaCad": "10062002", 
 "saldoCad": 1,
 "PerfilIMG":"",
 "Token":"192.168.100.45",
 "UserBGCad":""
},
  
{"nomeCad": "Diogo Antonio Nienke Batista", 
 "userCad": "did zin", 
 "senhaCad": "z0mbieltr2", 
 "saldoCad": 7,
 "PerfilIMG":"https://cdn.discordapp.com/attachments/946172847108264026/1023227651223207966/306100080_633632671438689_3474531611291345899_n.jpg",
 "Token":"192.168.100.47",
 "UserBGCad":""
},
  
{"nomeCad": "Vinícius Lopes", 
 "userCad": "AbDomineEst", 
 "senhaCad": "826961415130185749", 
 "saldoCad": 2,
 "PerfilIMG":"https://cdn.discordapp.com/attachments/1022972920517099580/1028807372484915302/d4d8e81995754e103fa84926b7e069d4.jpg",
 "Token":"192.168.100.2",
 "UserBGCad":""
},
  
 {"nomeCad": "Marquinhos",
 "userCad": "Marq",
 "senhaCad": "9595",
 "saldoCad": 2,
 "PerfilIMG": "https://w7.pngwing.com/pngs/41/1022/png-transparent-lightning-mcqueen-disney-infinity-3-lightning-mcqueen-mater-cars-cars-orange-car-pixar-thumbnail.png",
 "Token":"192.168.100.3",
 "UserBGCad":""
}
  
];
  
function autenticar(){
  let senha = document.getElementById('senha')
  let usuario = document.getElementById('usuario')
  let msgError = document.getElementById('msgError')
  let msgSuccess = document.getElementById('msgSuccess')
  let userValid = {nome: '',user: '',senha: '',saldo: ''}
  let listaUser = JSON.parse(localStorage.getItem('listaUser'))
  console.log("usuario esperado: " + userValid)
  console.log("lista esperada: " + listaUser)
  
  let userValid2 = {
    nome: '',
    user: '',
    senha: '',
    saldo: '',
    PerfilImg: '',
    UserBG:''}
  
    STGlobalDBObj.forEach((item) => {
    if(usuario.value == item.userCad && senha.value == item.senhaCad){
      userValid2 = {
         nome: item.nomeCad,
         user: item.userCad,
         senha: item.senhaCad,
         saldo: item.saldoCad,
         PerfilImg: item.PerfilIMG,
         UserBG: item.UserBGCad}      
    }console.log(userValid2) 
  })

  
  
  if(!listaUser) {
  console.log("Não e possivel logar não há usuarios cadastrados localmente!");   
}else{
  if(listaUser == "null"|| listaUser == null){
  console.log("Não e possivel logar não há usuarios cadastrados localmente!");
  msgError.setAttribute('style', 'display: block')
    msgError.innerHTML = 'Não e possivel logar não há usuarios cadastrados localmente!'
    msgSuccess.setAttribute('style', 'display: none')
}else{
    listaUser.forEach((item) => {
    if(usuario.value == item.userCad && senha.value == item.senhaCad){
      userValid = {nome: item.nomeCad,user: item.userCad,senha: item.senhaCad,saldo: item.saldoCad}}
  })}}
  
  if(usuario.value == "" && senha.value == "") {
    msgError.setAttribute('style', 'display: block')
    msgError.innerHTML = 'Usuário ou Senha Incorretos'
    msgSuccess.setAttribute('style', 'display: none')
  }else{
    if(usuario.value == "equipe" && senha.value == "P;DMMSSL"){
    setTimeout(wait,7000);
    function wait() {window.location.href = "https://pingobras.glitch.me/admin"}
  
    let ADMtoken = "conectado"
    localStorage.setItem('ADMtoken', ADMtoken)
    console.log("LOGIN> token admin setado!")
    const d = new Date();
    let day = d.getDate();
      
    const bypasstokenJS = {bypass: 1695241900+day, bypass2: 19264095713+day}
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
    
    let clientID = Math.random().toString(9).substr(16)
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
  }}//fim elses
  
  
}//fim do autenticar


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

  if(!finder[0]){}else{
  userscad8.innerHTML = finder[0].userCad}