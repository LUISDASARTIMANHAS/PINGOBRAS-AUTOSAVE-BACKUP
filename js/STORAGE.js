const loopStorage = setInterval(refreshStorage, 15000);
const TentativasRestantesST = localStorage.getItem("Tentativas4G");

function refreshStorage() {
const siteSaldo = 81.50;
localStorage.setItem("SITESALDO", siteSaldo);

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


const refreshPerfil = localStorage.getItem( 'UserPerfil')
localStorage.setItem( 'UserPerfil',refreshPerfil)


}//Fim do loop Storage


let labelSiteSaldo = document.getElementById("siteSaldo")  
if(!labelSiteSaldo) {
console.warn("Deu Pau No Dinheiro Do Site")
}else{
let Saldo = localStorage.getItem("SITESALDO")
labelSiteSaldo.innerHTML = Saldo}
