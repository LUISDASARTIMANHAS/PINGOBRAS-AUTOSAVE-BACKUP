const looptime = setInterval(timeRefresh, 500);


let secondsplayer = "5"
let minutesplayer = "30"
let sethoursplayer = "19"
let hoursplayer = sethoursplayer < 10 ? "0" + sethoursplayer : sethoursplayer;
const horaselect = hoursplayer+":" + minutesplayer+":" + secondsplayer
document.querySelector("[horaselect]").innerHTML = horaselect;
      
function timeRefresh() {
const time = new Date();
let Gethours = time.getHours();
let hours = Gethours < 10 ? "0" + Gethours : Gethours;
let Getminutes = time.getMinutes();
let minutes = Getminutes < 10 ? "0" + Getminutes : Getminutes;
let Getseconds = time.getSeconds();
let seconds = Getseconds < 10 ? "0" + Getseconds : Getseconds;  
const horario = hours +":" + minutes +":" + seconds

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