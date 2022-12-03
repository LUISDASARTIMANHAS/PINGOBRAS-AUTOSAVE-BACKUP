const INPL = document.getElementById("INPL")
const VIDEOPLAYERLINK = document.getElementById("VIDEOPLAYERLINK")
const VIDEOPLAYER = document.getElementById("VIDEOPLAYER")
const title = document.getElementById("title")
INPL.addEventListener("keyup", searchVideo);

    
function searchVideo(){
//refresh values
let LINK = INPL.value
const autoplay = document.getElementById("autoplay").checked
const LINKPADRAO = "https://www.youtube.com/embed/oXK_0KXNtU4?autoplay=1&muted=1"
const LINKNovoAUTO = LINK.replace("watch?v=", "embed/")+"?autoplay=1"  
//end refresh values  

  
if(autoplay == false){//verificando se o autopay esta marcado!
const LINKNovo = LINK.replace("watch?v=", "embed/")
    
if(LINK == ""||LINK == " "){//Caso o usuario nâo tenha defiido link!
 console.error("Video Não Indentificado!")
 VIDEOPLAYERLINK.placeholder = LINKPADRAO;
 VIDEOPLAYER.setAttribute('src', LINKPADRAO);
 title.innerHTML = "PINGOBRAS EMBUTIR VIDEO?NDA"
}else{//Carregar o link definido por usuario!
  VIDEOPLAYERLINK.placeholder = LINKNovo
  VIDEOPLAYER.setAttribute('src', LINKNovo)
  title.innerHTML = "PINGOBRAS?" + LINKNovo}
}else{//caso o usuario tenha marcado para iniciar automaticamente!
  VIDEOPLAYERLINK.placeholder = LINKNovoAUTO
  VIDEOPLAYER.setAttribute('src', LINKNovoAUTO)
  title.innerHTML = "PINGOBRAS?" + LINKNovoAUTO
}

  
}//Fim Da Func