const looptime = setInterval(timeRefresh, 500);


let secondsplayer = "5"
let minutesplayer = "30"
let hoursplayer = "19"
const horaselect = hoursplayer+":" + minutesplayer+":" + secondsplayer
document.querySelector("[horaselect]").innerHTML = horaselect;
      
function timeRefresh() {
const time = new Date();
let hours = time.getHours();
let minutes = time.getMinutes();
let seconds = time.getSeconds();
const horario = "0" + hours +":" + "0" + minutes +":" + seconds

let faultS = seconds - secondsplayer
let faultH = hours - hoursplayer
let faultM = minutes - minutesplayer
const fault = faultH+":" + faultM+":" + faultS
document.querySelector("[fault]").innerHTML = fault;

  
document.querySelector("[horario]").innerHTML = horario;
document.querySelector("[timer]").innerHTML = horario;

  if(horario > horaselect){
    document.querySelector(".site-altura").style.display = "none";
    document.querySelector(".msg-error-hour").style.display = "block";
  }else{
    document.querySelector(".site-altura").style.display = "block";
    document.querySelector(".msg-error-hour").style.display = "none";
  }

  
}