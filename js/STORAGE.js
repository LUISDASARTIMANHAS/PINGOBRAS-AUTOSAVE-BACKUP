let client = JSON.parse(localStorage.getItem('client') || '[]')

client.push(
  {
      luis: {name: "luis das artimanhas",saldo: 3.50},
      lukinhas: {name: "lukinhas",saldo:3.50},
      douglas: {name: "douglasPG",saldo: 13.00},
      valdo: {name: "valdo9645",saldo: -3.00},
      vm: {name: "skip",saldo: 1.00},
      eduardo: {name: "dudu",saldo: 2.00},
           })
const DJson = JSON.stringify(client);
localStorage.setItem("JSON STORAGE", DJson);

const adminKey = {senha: 9645};
const CryptoKey = JSON.stringify(adminKey);
localStorage.setItem("JsonKeys", CryptoKey);


let YTL = {Link1:"" };