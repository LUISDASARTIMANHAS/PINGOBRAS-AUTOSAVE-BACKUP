let rebonusStorage = localStorage.getItem("siteBonus");
let rebonus = JSON.parse(rebonusStorage);


console.log("Bonus requerido")
let siteMoney = 36.00
let userbonus = siteMoney - rebonus.moeda
console.log(userbonus);

document.getElementById("currentSaldo").innerHTML = userbonus