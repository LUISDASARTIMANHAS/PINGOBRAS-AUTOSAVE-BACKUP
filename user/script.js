const DBuserbg = localStorage.getItem('UserBackground')
let body2 = document.querySelector('body');
let saldoContamain = document.getElementById("header_wallet_balance") 
const DBperfilIconLink = localStorage.getItem('UserPerfil')
let perfilIcon2 = document.getElementById("perfilIcon")
const userLogado = JSON.parse(localStorage.getItem('userLogado')) 
let userLogadoImg = userLogado.PerfilImg
const ultimosDevices = sessionStorage.getItem("LASTDEVICES")

if(DBuserbg == "null") {
  body2.style.background = "white"
  console.log("Background NotFound!")
}else{
  body2.style.background = DBuserbg
  console.log("Background seted!")
}


if(DBperfilIconLink == "null") {
  alert("usuario sem perfil!")
  perfilIcon2.src = "https://w7.pngwing.com/pngs/798/436/png-transparent-computer-icons-user-profile-avatar-profile-heroes-black-profile.png"
}else{
  if(userLogadoImg == "null"||userLogadoImg == ""){
    perfilIcon2.src = DBperfilIconLink
  }else{
    perfilIcon2.src = userLogadoImg
  }
}


saldoContamain.innerHTML = "R$:" + userLogado.saldo+",00"


let labellogado = document.querySelector('#logado')
labellogado.innerHTML = userLogado.user + " Bem Vindo de Volta!"

function sair(){
  localStorage.removeItem('token')
  localStorage.removeItem('userLogado')
  window.location.href = 'https://pingobras.glitch.me'
}


/* let fullscreen;
let fsEnter = document.getElementById('fullscr');
fsEnter.addEventListener('click', function (e) {
    e.preventDefault();
    if (!fullscreen) {
        fullscreen = true;
        document.documentElement.requestFullscreen();
        fsEnter.innerHTML = "SAIR DA TELA CHEIA";
    }
    else {
        fullscreen = false;
        document.exitFullscreen();
        fsEnter.innerHTML = "TELA CHEIA";
    }
}); */
var deicesFound = ultimosDevices.rows.length, maxDevices;
for (maxDevices = 0; maxDevices < deicesFound; maxDevices++) { 
let devicesConected = "<p><b>" + deicesFound.rows.item(maxDevices).log + "</b></p>"; 
document.querySelector("labelDevices").innerHTML +=  devicesConected; 
} 
