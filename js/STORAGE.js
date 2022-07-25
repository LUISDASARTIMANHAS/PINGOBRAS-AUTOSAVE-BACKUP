const loopStorage = setInterval(refreshStorage, 15000);

function refreshStorage() {
  
let client = JSON.parse(localStorage.getItem('client'))
console.warn("STORAGE/LOG> client pegou dados de client antigo!");
client.push({
       luis: {name: "luis das artimanhas",saldo: 3.50},
        lukinhas: {name: "lukinhas",saldo:3.50},
        douglas: {name: "douglasPG",saldo: 13.00},
        valdo: {name: "valdo9645",saldo: -3.00},
        vm: {name: "skip",saldo: 1.00},
        Eduardo: {name: "dudu",saldo: 2.00},
        José: {name: "José Eduardo Batista de Souza",saldo: 1.50, senha: 10062002}
  });
  
console.warn("STORAGE/LOG> client adcionou novos itens");
const DJson = JSON.stringify(client);
localStorage.setItem("JSON STORAGE", DJson);

const adminKeyJS = {senha: 9645};
const adminKey = JSON.stringify(adminKeyJS);
localStorage.setItem("JsonKeys", adminKey);


  
const siteBonusJS = {moeda: 2};
const siteBonus = JSON.stringify(siteBonusJS);
localStorage.setItem("siteBonus", siteBonus);

let tokenjson = localStorage.getItem("JsonToken");
let tokenRefresh = JSON.parse(tokenjson);
const repeattoken = JSON.stringify(tokenRefresh);
console.log("STORAGE/LOG> recarregando codificanção do token...");
localStorage.setItem("JsonToken", repeattoken);
console.warn("STORAGE/LOG> token recarregado!");
  
let bypass = localStorage.getItem("bypass");
let bypassRefresh = JSON.parse(bypass);  
const repeatbypass = JSON.stringify(bypassRefresh);
console.log("STORAGE/LOG> recarregando codificanção do token...");
localStorage.setItem("bypass", repeatbypass);
console.warn("STORAGE/LOG> token recarregado!");

  
  
}


let NetworkObj = localStorage.getItem("Network");  
const Network = JSON.stringify(NetworkObj);
localStorage.setItem("Network", Network);  

const YTL = {LINK1:"https://www.youtube.com/embed/OiL1kFo4C8Y?autoplay=1&loop=1" };
const LkJson = JSON.stringify(YTL);
localStorage.setItem("YoutubeLinks",LkJson);

setTimeout( function TRLink() {
const YTLive = {LINK1:"https://www.youtube.com/embed/?autoplay=1" };
const TRLkJson = JSON.stringify(YTLive);
localStorage.setItem("YoutubeLinks",TRLkJson);
},125000);


