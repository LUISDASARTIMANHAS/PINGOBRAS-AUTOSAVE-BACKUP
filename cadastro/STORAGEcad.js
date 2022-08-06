const loopcad = setInterval(storagecad, 15000);
function storagecad() {
  let storage = localStorage.getItem('listaUser')
  console.log(storage)
  
  if(storage == null){
  alert("null user auto complete online")
   let listacad = [{nomeCad: "administrador", userCad: "equipe", senhaCad: "administrador", saldoCad: 1.00,}]
   let refreshcad = JSON.stringify(listacad)
   localStorage.setItem( 'listaUser',refreshcad);
   }else{
   localStorage.setItem( 'listaUser',storage); }
  
  }