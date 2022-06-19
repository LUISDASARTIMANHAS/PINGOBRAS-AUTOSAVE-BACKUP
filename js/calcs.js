let rebonusStorage = localStorage.getItem("siteBonus");
let bonus = JSON.parse(rebonusStorage);
console.log("Bonus requerido")

let siteMoney = 36.00
let userbonus = siteMoney - bonus.moeda
console.log(userbonus);

document.getElementById("currentSaldo").innerHTML = userbonus