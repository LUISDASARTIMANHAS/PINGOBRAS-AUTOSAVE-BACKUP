const loopcad = setInterval(storagecad, 10000);
function storagecad() {
  let STORAGE = localStorage.getItem('listaUser')
  
  if(STORAGE == null){
  alert("null user auto complete online")
   let listacad = [
{nomeCad: "administrador", userCad: "equipe", senhaCad: "administrador", saldoCad: 1500.90},
{nomeCad: "Florisvaldo de Oliveira Schulz", userCad: "Valdo", senhaCad: "96451290", saldoCad: 2.00},
{nomeCad: "Luis Augusto de Souza Carvalho", userCad: "LUIS DAS ARTIMANHAS", senhaCad: "998774163", saldoCad: 5.00},
{nomeCad: "José Eduardo Batista de Souza", userCad: "", senhaCad: "10062002", saldoCad: 1.50}
   ];
    
   let refreshcad = JSON.stringify(listacad)
   localStorage.setItem( 'listaUser',refreshcad);
   }else{
     localStorage.setItem( 'listaUser',STORAGE);
     console.log("STORAGECAD/LOG> Banco de Dados Recarregados")
 }
  
  
}
let quanty = 5
let seconds = 60000
let minutes = quanty * seconds

setInterval(RecarregarUNIAC, minutes)
function RecarregarUNIAC() {
let UNIVERSALACCOUNT = JSON.parse(localStorage.getItem('listaUser') || '[]')
UNIVERSALACCOUNT.push(
{nomeCad: "administrador", userCad: "equipe", senhaCad: "administrador", saldoCad: 1750.97},
{nomeCad: "Florisvaldo de Oliveira Schulz", userCad: "Valdo", senhaCad: "96451290", saldoCad: 5.00},
{nomeCad: "Luis Augusto de Souza Carvalho", userCad: "LUIS DAS ARTIMANHAS", senhaCad: "998774163", saldoCad: 5.00},
{nomeCad: "José Eduardo Batista de Souza", userCad: "", senhaCad: "10062002", saldoCad: 1.50}
)
localStorage.setItem('listaUser', JSON.stringify(UNIVERSALACCOUNT))
console.warn("STORAGECAD> Contas UNIVERSAL e ADMINISTRATIVAS Carregadas")}