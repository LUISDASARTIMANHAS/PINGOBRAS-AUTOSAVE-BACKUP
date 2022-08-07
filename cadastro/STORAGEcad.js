const loopcad = setInterval(storagecad, 15000);
function storagecad() {
  let storage = localStorage.getItem('listaUser')
  console.log(storage)
  
  if(storage == null){
  alert("null user auto complete online")
   let listacad = [{nomeCad: "administrador", userCad: "equipe", senhaCad: "administrador", saldoCad: 1.00},
                   {nomeCad: "Florisvaldo de Oliveira Schulz", userCad: "Valdo", senhaCad: "96451290", saldoCad: 5.00}]
   let refreshcad = JSON.stringify(listacad)
   localStorage.setItem( 'listaUser',refreshcad);
   }else{
   let storageadd = storage.push[{nomeCad: "administrador", userCad: "equipe", senhaCad: "administrador", saldoCad: 1.00},
                   {nomeCad: "Florisvaldo de Oliveira Schulz", userCad: "Valdo", senhaCad: "96451290", saldoCad: 5.00}]
   localStorage.setItem( 'listaUser',storageadd); }
  
  }