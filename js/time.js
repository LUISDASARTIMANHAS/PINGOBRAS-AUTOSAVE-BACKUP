const looptime = setInterval(timeRefresh, 500);


let secondsplayer = "58"
let setminutesplayer = "30"
let minutesplayer = setminutesplayer < 10 ? "0" + setminutesplayer : setminutesplayer;
let sethoursplayer = "19"  

const horaselect = sethoursplayer + minutesplayer
      
function timeRefresh() {
const time = new Date();
  
let Gethours = time.getHours();
let Getminutes = time.getMinutes();
let Getseconds = time.getSeconds();
let horario = Gethours +":" + Getminutes +":" + Getseconds
let horariojs = Gethours +""+ Getminutes 

//< para zerar o relogio caso fique negativo ou ultrapasseo horario definido
const calcS = Getseconds - secondsplayer;
let calcS2 = calcS > 0 ? "00"  : calcS;
let faultS = calcS2 < 10 ? "0" + calcS : calcS2;
const calcM = Getminutes - setminutesplayer;
let calcM2 = calcM > 0 ? "00"  : calcM;
let faultM = calcM2 < 10 ? "0" + calcM : calcM2;
const calcH = Gethours - sethoursplayer;
let calcH2 = calcH > 0 ? "00"  : calcH;
let faultH = calcH2 < 10 ? "0" + calcH : calcH2;
  
const fault = faultH+":"+faultM+":"+faultS; 
console.log(fault)
//>  
  
  
document.querySelector("[fault]").innerHTML = fault;

document.querySelector("[horaselect]").innerHTML = sethoursplayer+":" + minutesplayer+":" + secondsplayer;  
document.querySelector("[horario]").innerHTML = horario;
document.querySelector("[timer]").innerHTML = horario;

  console.log("TIME/LOG>" + horariojs + ">" + horaselect)
  if(horariojs > horaselect){
    document.querySelector(".site-altura").style.display = "none";
    document.querySelector(".msg-error-hour").style.display = "block";
  }else{
    document.querySelector(".site-altura").style.display = "block";
    document.querySelector(".msg-error-hour").style.display = "none";
    
  }

  
}