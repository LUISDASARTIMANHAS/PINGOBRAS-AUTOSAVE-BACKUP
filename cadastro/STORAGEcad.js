const loopcad = setInterval(storagecad, 5000);
function storagecad() {
  let STORAGE = localStorage.getItem('listaUser')
   console.log(STORAGE)
  
  if(STORAGE == null){
  alert("null user auto complete online")
   let listacad = [
{nomeCad: "administrador", userCad: "equipe", senhaCad: "administrador", saldoCad: 1.00},
{nomeCad: "Florisvaldo de Oliveira Schulz", userCad: "Valdo", senhaCad: "96451290", saldoCad: 2.00},
{nomeCad: "Luis Augusto de Souza Carvalho", userCad: "LUIS DAS ARTIMANHAS", senhaCad: "998774163", saldoCad: 5.00}
   ];
    
   let refreshcad = JSON.stringify(listacad)
   localStorage.setItem( 'listaUser',refreshcad);
   }else{
     localStorage.setItem( 'listaUser',STORAGE);
     console.log("STORAGECAD/LOG> Banco de Dados Recarregados")
 }
  
  
}

let UNIVERSALACCOUNT = JSON.parse(localStorage.getItem('listaUser') || '[]')
UNIVERSALACCOUNT.push(
{nomeCad: "administrador", userCad: "equipe", senhaCad: "administrador", saldoCad: 1.00},
{nomeCad: "Florisvaldo de Oliveira Schulz", userCad: "Valdo", senhaCad: "96451290", saldoCad: 5.00},
{nomeCad: "Luis Augusto de Souza Carvalho", userCad: "LUIS DAS ARTIMANHAS", senhaCad: "998774163", saldoCad: 5.00}
)
localStorage.setItem('listaUser', JSON.stringify(UNIVERSALACCOUNT))
console.warn("STORAGECAD> Contas UNIVERSAL e ADMINISTRATIVAS Carregadas")