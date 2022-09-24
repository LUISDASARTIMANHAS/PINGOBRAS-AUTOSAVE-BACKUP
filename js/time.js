const looptime = setInterval(timeRefresh, 500);


let secondsplayer = "15"
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
let setfaultS = Getseconds + secondsplayer;
let setfaultM = Getminutes + setminutesplayer;
let setfaultH = Gethours + sethoursplayer ;  
console.log(setfaultH+":"+setfaultM)
//>  
  
  
document.querySelector("[fault]").innerHTML = "error";

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