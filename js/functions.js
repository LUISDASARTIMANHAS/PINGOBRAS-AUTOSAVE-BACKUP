
function openForm() {
  document.getElementById("jschat").style.display = "block";
  alert("ESSA FUNÇÃO E EXPERIMENTAL E PODE NÃO FUNCIONAR OU CONTER BUGS!");
  console.log("chat aberto!");
}
function closeForm() {
  document.getElementById("jschat").style.display = "none";
  console.log("chat fechado");
}

let btnlist = document.getElementById('btnlist');
var listDEV = document.getElementById('listDevedores');
btnlist.addEventListener('click', function() {
    if(listDEV.style.display === 'block') {
      listDEV.style.display = 'none';
      console.log("lista escondida!");
  } else {
      listDEV.style.display = 'block';
    console.log("lista visivel!");
  }
});
btnlist.addEventListener('mouseover', function() {
listDEV.style.display = 'block';
    console.log("lista visivel!");
})

let btnlistChangelogs = document.getElementById('btnlistChangelogs');
var listChangelogs = document.getElementById('listChangelogs');
btnlistChangelogs.addEventListener('click', function() {
    if(listChangelogs.style.display === 'block') {
      listChangelogs.style.display = 'none';
      console.log("Changelogs escondida!");
  } else {
      listChangelogs.style.display = 'block';
    console.log("Changelogs visivel!");}
});
btnlistChangelogs.addEventListener('mouseover', function() {
listChangelogs.style.display = 'block';
    console.log("Changelogs visivel!");
})

var btnBack = document.querySelector("#back-to-top");
btnBack.addEventListener("click", function() {
    window.scrollTo(0, 0);
  console.log("Usuario redirecionado para cima!");
});
var Descer = document.querySelector("#jsDescer");
Descer.addEventListener("click", function() {
    window.scrollTo(0, 2000);
  console.log("Usuario redirecionado para baixo!");
});
var batepapoDescer = document.querySelector("#jsDescerBatePapo");
batepapoDescer.addEventListener("click", function() {
    window.scrollTo(0, 2000);
  console.log("Usuario redirecionado para bate-papo!");
});

