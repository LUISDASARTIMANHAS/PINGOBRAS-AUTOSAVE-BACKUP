let sec = "10"
let ms = "000"

const looprgb = setInterval(red, 5000);
const looprgb2 = setInterval(blue, 10000);
const looprgb3 = setInterval(green, 15000);
let ytVideo = document.querySelector(".youtube-video")
//document.querySelector("[horaselect]").innerHTML = hoursplayer+":" + minutesplayer+":" + secondsplayer;  
//document.querySelector("[horario]").innerHTML = horario;
//document.querySelector("[timer]").innerHTML = horario;

function red() {
ytVideo.style.border = "5px solid red"
}
function blue() {
ytVideo.style.border = "5px solid blue"
}
function green() {
ytVideo.style.border = "5px solid green"
}