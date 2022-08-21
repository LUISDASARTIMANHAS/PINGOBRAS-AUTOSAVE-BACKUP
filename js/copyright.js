let ano = new Date().getFullYear();  
let navegadorLang = navigator.language;
document.querySelector("#direitos").innerHTML = "<p>"+ "Desenvolvedores:"+
"<br>"+
"©LUIS_DAS_ARTIMANHAS" + "&" + "DOUGLAS_PG 2010-" + ano + navegadorLang+
"<br>"+
"Todos os direitos reservados" +
"<br>"+
"<a links target=_blank href=mailto:luisaugustodesouza785@gmail.com>" + "luis_das_artimanhas@gmail" + "</a>"+
"<a href=https://wa.me/55027995744791 target=_blank>" +
"<i class=fa id=WA>" + "Fale conosco!" + "</i>" + "</a>" +
"</p>" 
var wa = document.getElementById("WA");
wa.classList.add("fa-whatsapp");
