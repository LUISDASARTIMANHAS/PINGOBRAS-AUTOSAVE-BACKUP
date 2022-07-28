const looprgb = setInterval(red, 1000);
const looprgb2 = setInterval(orange, 2000);
const looprgb3 = setInterval(yellow, 3000);
const looprgb4 = setInterval(green, 4000);
const looprgb5 = setInterval(blue, 5000);
const looprgb6 = setInterval(darkblue, 6000);
const looprgb7 = setInterval(lightblue, 7000);
const looprgb8 = setInterval(purple, 8000);
let RGB1 = document.querySelector("[RGB1]")
let RGB2 = document.querySelector("[RGB2]")
let RGB3 = document.querySelector("[RGB3]")
let CRGB1 = document.querySelector("[CRGB1]")
let CRGB2 = document.querySelector("[CRGB2]")
RGB1.style.transition = "all 0.3s ease-out"
RGB2.style.transition = "all 0.3s ease-out"
RGB3.style.transition = "all 0.3s ease-out"
CRGB1.style.transition = "all 0.3s ease-out"
CRGB2.style.transition = "all 0.3s ease-out"

function red() {
  RGB1.style.borderColor = "red"
  RGB2.style.borderColor = "red"
  CRGB1.style.color = "red"
  CRGB2.style.color = "red"
}
function orange() {
  RGB1.style.borderColor = "orange"
  RGB2.style.borderColor = "orange"
  CRGB1.style.color = "orange"
  CRGB2.style.color = "orange"
}
function yellow() {
  RGB1.style.borderColor = "yellow"
  RGB2.style.borderColor = "yellow"
  CRGB1.style.color = "yellow"
  CRGB2.style.color = "yellow"
}
function green() {
  RGB1.style.borderColor = "green"
  RGB2.style.borderColor = "green"
  CRGB1.style.color = "green"
  CRGB2.style.color = "green"
}
function blue() {
  RGB1.style.borderColor = "blue"
  RGB2.style.borderColor = "blue"
  CRGB1.style.color = "blue"
  CRGB2.style.color = "blue"
}
function darkblue() {
  RGB1.style.borderColor = "darkblue"
  RGB2.style.borderColor = "darkblue"
  CRGB1.style.color = "darkblue"
  CRGB2.style.color = "darkblue"
}
function lightblue() {
  RGB1.style.borderColor = "lightblue"
  RGB2.style.borderColor = "lightblue"
  CRGB1.style.color = "lightblue"
  CRGB2.style.color = "lightblue"
}
function purple() {
  RGB1.style.borderColor = "purple"
  RGB2.style.borderColor = "purple"
  CRGB1.style.color = "purple"
  CRGB2.style.color = "purple"
}
