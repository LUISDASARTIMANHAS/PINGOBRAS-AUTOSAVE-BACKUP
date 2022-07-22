const looptime = setInterval(timeRefresh, 500);


let secondsplayer = "15"
let setminutesplayer = "30"
let minutesplayer = setminutesplayer < 10 ? "0" + setminutesplayer : setminutesplayer;
let sethoursplayer = "19"
let hoursplayer = sethoursplayer < 10 ? "0" + sethoursplayer : sethoursplayer;

const horaselect = hoursplayer + minutesplayer
      
function timeRefresh() {
const time = new Date();
  
let Gethours = time.getHours();
let hours = Gethours < 10 ? "0" + Gethours : Gethours;
let Getminutes = time.getMinutes();
let minutes = Getminutes < 10 ? "0" + Getminutes : Getminutes;
let Getseconds = time.getSeconds();
let seconds = Getseconds < 10 ? "0" + Getseconds : Getseconds;
let horario = hours +":" + minutes +":" + seconds
let horariojs = hours +""+ minutes 

//< para zerar o relogio caso fique negativo ou ultrapasseo horario definido
let setfaultS = -seconds + 60;
let faultS = setfaultS < 0 ? "00" : setfaultS;
let setfaultM = -minutes + 60;
let faultM = setfaultM < 0 ? "00" : setfaultM;
let setfaultH = 19 - hours;   
let faultH = setfaultH < 0 ?  "00" : setfaultH;
//>  
  
//< para ficar igual relogio digital  
let dispalyS = faultS < 10 ?  "0" + faultS : faultS;  
let dispalyM = faultM < 10 ?  "0" + faultM : faultM;  
let dispalyH = faultH < 10 ?  "0" + faultH : faultH;
//>
  
const fault = dispalyH+":" + dispalyM+":" + dispalyS
document.querySelector("[fault]").innerHTML = fault;

document.querySelector("[horaselect]").innerHTML = hoursplayer+":" + minutesplayer+":" + secondsplayer;  
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