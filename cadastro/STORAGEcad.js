const loopcad = setInterval(storagecad, 5000);
function storagecad() {
  let STORAGE = localStorage.getItem('listaUser')
  let STORAGEPARSE = JSON.parse(localStorage.getItem('listaUser') || '[]')
  console.log(STORAGEPARSE)
  
  if(STORAGE == null){
  alert("null user auto complete online")
   let listacad = [
{nomeCad: "administrador", userCad: "equipe", senhaCad: "administrador", saldoCad: 1.00},
{nomeCad: "Florisvaldo de Oliveira Schulz", userCad: "Valdo", senhaCad: "96451290", saldoCad: 2.00},
{nomeCad: "Luis Augusto de Souza Carvalho", userCad: "LUIS_DAS_ARTIMANHAS", senhaCad: "998774163", saldoCad: 5.00}
   ];
    
   let refreshcad = JSON.stringify(listacad)
   localStorage.setItem( 'listaUser',refreshcad);
   }else{
let StorageObj = STORAGE.push(
{nomeCad: "administrador", userCad: "equipe", senhaCad: "administrador", saldoCad: 1.00},
{nomeCad: "Florisvaldo de Oliveira Schulz", userCad: "Valdo", senhaCad: "96451290", saldoCad: 5.00},
{nomeCad: "Luis Augusto de Souza Carvalho", userCad: "LUIS_DAS_ARTIMANHAS", senhaCad: "998774163", saldoCad: 5.00}
);
   console.log("StorageOBJ:" + StorageObj)
   let StorageAdd = JSON.stringify(StorageObj)
   console.log("STORAGEADD:" + StorageAdd)
   localStorage.setItem( 'listaUser',StorageAdd); }
  
  }