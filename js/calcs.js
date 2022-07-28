let rebonusStorage = localStorage.getItem("siteBonus");
let bonus = JSON.parse(rebonusStorage);

let siteMoney = 36.00
let userbonus = siteMoney - bonus.moeda

//document.getElementById("currentSaldo").innerHTML = userbonus
   
function buscar() {
const inputbuscar = document.getElementById("inputbuscar")
console.log(inputbuscar.value)
}