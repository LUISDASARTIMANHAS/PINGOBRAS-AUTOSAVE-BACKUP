const body = document.querySelector("body");
body.style.marginTop = "0%"
let senhaSite = "qweasdzxc124"
const main = document.getElementById("main");
const login = document.getElementById("screenLoad");
const labelLogin = document.getElementById("labelLogin");
const loadingBar = document.getElementById("loadingBar");


function authDidzn(){
const nav = document.querySelector("nav");
let mainSty = main.style
let loginSty = login.style
const userinput = document.getElementById("userInput").value


    var iniciar2 = "no";
    var barload = document.getElementById("barlogin");
    var width = 50;
    var barspeed = 200;
    var id = setInterval(frame, barspeed);

function frame() {
      if (width >= 100) {
        clearInterval(id);
        iniciar2 = "sim";
if(senhaSite == userinput) {
      alert("Hello My Friend")
      loginSty.display = "none"
      mainSty.display = ""
      nav.style.display = ""
      body.style.marginTop = "20%"
}else{
      labelLogin.innerHTML = "NÃO FOI POSSIVEL FAZER LOGIN⚠️"}
}else{
        width++;
        barload.style.width = width + "%";
        barload.innerHTML = "Loading... " + width + "%";}
    }//fim do auth
  
}//fim da func