let client = JSON.parse(localStorage.getItem('client') || '[]')
console.log("client pegou dados de client antigo");
client.push(
  {
      luis: {name: "luis das artimanhas",saldo: 3.50},
      lukinhas: {name: "lukinhas",saldo:3.50},
      douglas: {name: "douglasPG",saldo: 13.00},
      valdo: {name: "valdo9645",saldo: -3.00},
      vm: {name: "skip",saldo: 1.00},
      eduardo: {name: "dudu",saldo: 2.00},
           })
console.log("client adcionou novos itens");
const DJson = JSON.stringify(client);
console.log("codificando client");
localStorage.setItem("JSON STORAGE", DJson);
console.log("client redefinido");

const adminKey = {senha: 9645};
console.log("adminKey setada");
const CryptoKey = JSON.stringify(adminKey);
console.log("codificando adminKey");
localStorage.setItem("JsonKeys", CryptoKey);
console.log("JsonKeys redefinido");


const YTL = {LINK1:"https://www.youtube.com/embed/OiL1kFo4C8Y?autoplay=1&loop=1" };
console.log("YTL setada");
const LkJson = JSON.stringify(YTL);
console.log("codificando YTL");
localStorage.setItem("YoutubeLinks",LkJson);
console.log("LKJson redefinido");

setTimeout( function TRLink() {
const YTLive = {LINK1:"https://www.youtube.com/embed/?autoplay=1" };
const TRLkJson = JSON.stringify(YTLive);
localStorage.setItem("YoutubeLinks",TRLkJson);
},125000);
