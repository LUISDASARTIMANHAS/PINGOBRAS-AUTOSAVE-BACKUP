const loopcopy = setInterval(refreshcopy, 10000);

function refreshcopy() {
let ano = new Date().getFullYear();  
let navegadorLang = navigator.language;
const direitos = document.querySelector("#direitos");
  
if(!direitos){
const newDireitos = document.createElement("div");
const att = document.createAttribute("id");
att.value = "direitos"

newDireitos.setAttributeNode(att);  
document.body.appendChild(newDireitos);
}  
  
direitos.classList.add("direitos")
direitos.innerHTML = "<p class=copyright>"+ "Desenvolvedores:"+
"<br>"+
"©LUIS_DAS_ARTIMANHAS" + "&" + "DOUGLAS_PG 2010-" + ano + navegadorLang+
"<br>"+
"Todos os direitos reservados" +
"<br>"+
"<a links target=_blank href=mailto:luisaugustodesouza785@gmail.com>" + "luis_das_artimanhas@gmail" + "</a>"+
"<br>"+
"<a href=https://wa.me/55027995744791 target=_blank>" +
"<i class=fa id=WA>" + "Fale conosco!" + "</i>" + "</a>" +
 "<link rel=stylesheet href=https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css>" +
"</p>" 
const wa = document.getElementById("WA");
wa.classList.add("fa-whatsapp");


  
}