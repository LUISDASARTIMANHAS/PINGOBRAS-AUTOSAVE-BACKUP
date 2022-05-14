
console.log("Hello 🌎");
const btn = document.querySelector("button");

if (btn){
  btn.onclick = function(){
    btn.classList.toggle("dipped");
  };}


var i = 0;
function barButton() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("bar");
    var width = 10;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width + "%";
      }
    }
  }
}

var i = 0;
function factorioButton() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("factoriobar");
    var width = 10;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width + "%";
      }
    }
  }
}
const saldo = {saldo: 11};
const DADOSJson  = JSON.stringify(saldo);
localStorage.setItem("JSON", DADOSJson);

let client = JSON.parse(localStorage.getItem('client') || '[]')
client.push({
      saldoCad: 1.50,
      nome: "valdo",
})
const DJson = JSON.stringify(client);
localStorage.setItem("JSON STORAGE", DJson);