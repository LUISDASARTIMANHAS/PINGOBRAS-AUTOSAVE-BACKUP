
console.log("Hello 🌎");
const btn = document.querySelector("button");
if (btn){
  btn.onclick = function(){
    btn.classList.toggle("dipped");
  };}


window.addEventListener("load", function(){
    setTimeout(
        function open(event){
            document.querySelector(".popup").style.display = "visible";
        },2000
    )
});
document.querySelector("#close").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "none";
});


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

let client = JSON.parse(localStorage.getItem('client') || '[]')
client.push({
      client: {
      luis: {name: "luis das artimanhas",saldo: 3.50},
      lukinhas: {name: "lukinhas",saldo:3.50},
      douglas: {name: "douglasPG",saldo: 13.00},
      valdo: {name: "valdo9645",saldo: -3.00},
      vm: {name: "skip",saldo: 1.00},
      eduardo: {name: "dudu",saldo: 2.00},}
})
const DJson = JSON.stringify(client);
localStorage.setItem("JSON STORAGE", DJson);


let STORAGE = localStorage.getItem("JSON STORAGE");
let CR = JSON.parse(STORAGE);
        