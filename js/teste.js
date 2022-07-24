let sec = "10"
let ms = "000"

const looprgb = setInterval(red, 1000);
const looprgb2 = setInterval(orange, 2000);
const looprgb3 = setInterval(yellow, 3000);
const looprgb4 = setInterval(green, 4000);
const looprgb5 = setInterval(blue, 5000);
const looprgb6 = setInterval(darkblue, 6000);
const looprgb7 = setInterval(lightblue, 7000);
let RGB1 = document.querySelector("[RGB1]")
let RGB2 = document.querySelector("[RGB2]")
let RGB3 = document.querySelector("[RG3]")
//document.querySelector("[horaselect]").innerHTML = hoursplayer+":" + minutesplayer+":" + secondsplayer;  
//document.querySelector("[horario]").innerHTML = horario;
//document.querySelector("[timer]").innerHTML = horario;

function red() {
  RGB1.style.border = "5px solid red"
  RGB2.style.border = "5px solid red"
  RGB3.style.border = "5px solid red"
}
function orange() {
  RGB1.style.border = "5px solid orange"
  RGB2.style.border = "5px solid orange"
  RGB3.style.border = "5px solid orange"
}
function yellow() {
  RGB1.style.border = "5px solid yellow"
  RGB2.style.border = "5px solid yellow"
  RGB3.style.border = "5px solid yellow"
}
function green() {
  RGB1.style.border = "5px solid green"
  RGB2.style.border = "5px solid green"
  RGB3.style.border = "5px solid green"
}
function blue() {
  RGB1.style.border = "5px solid blue"
  RGB2.style.border = "5px solid blue"
  RGB3.style.border = "5px solid blue"
}
function darkblue() {
  RGB1.style.border = "5px solid darkblue"
  RGB2.style.border = "5px solid darkblue"
  RGB3.style.border = "5px solid darkblue"
}
function lightblue() {
  RGB1.style.border = "5px solid lightblue"
  RGB2.style.border = "5px solid lightblue"
  RGB3.style.border = "5px solid lightblue"
}
