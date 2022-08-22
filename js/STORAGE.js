const loopStorage = setInterval(refreshStorage, 15000);

function refreshStorage() {
let client = JSON.parse(localStorage.getItem('client') || '[]')
console.warn("STORAGE/LOG> client pegou dados de client antigo!");
client.push({
        lukinhas: {name: "lukinhas",saldo:3.50},
        douglas: {name: "douglasPG",saldo: 13.00},
        valdo: {name: "valdo9645",saldo: -3.00},
        vm: {name: "skip",saldo: 1.00},
        Eduardo: {name: "dudu",saldo: 2.00},
        José: {name: "José Eduardo Batista de Souza",saldo: 1.50, senha: 10062002}
  })
console.warn("STORAGE/LOG> client adcionou novos itens");
const DJson = JSON.stringify(client);
localStorage.setItem("JSON STORAGE", DJson);

  
const siteBonusJS = {moeda: 2};
const siteBonus = JSON.stringify(siteBonusJS);
localStorage.setItem("siteBonus", siteBonus);

let repeattoken = localStorage.getItem("token");
console.log("STORAGE/LOG> ⚠️recarregando codificanção do token...");
localStorage.setItem("token", repeattoken);
console.warn("STORAGE/LOG> token recarregado!");
  
let repeatADMtoken = localStorage.getItem("ADMtoken");
console.log("STORAGE/LOG> ⚠️recarregando codificanção do ADMtoken...");
localStorage.setItem("ADMtoken", repeatADMtoken);
console.warn("STORAGE/LOG> ADMtoken recarregado!");  
  
let bypass = localStorage.getItem("bypass");
let bypassRefresh = JSON.parse(bypass);  
const repeatbypass = JSON.stringify(bypassRefresh);
console.log("STORAGE/LOG> ⚠️recarregando codificanção do bypass...");
localStorage.setItem("bypass", repeatbypass);
console.warn("STORAGE/LOG> bypass recarregado!");

let senhaPG = "2004"
localStorage.setItem("Local-Luis-das-artimanhas",senhaPG);
console.warn("STORAGE/LOG> Local-luis-das-artimanhas setado!");
  
}

let NetworkObj = localStorage.getItem("Network");  
const Network = JSON.stringify(NetworkObj);
localStorage.setItem("Network", Network);  





