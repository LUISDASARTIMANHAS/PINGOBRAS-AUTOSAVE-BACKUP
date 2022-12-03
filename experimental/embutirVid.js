const INPL = document.getElementById("INPL")
const VIDEOPLAYERLINK = document.getElementById("VIDEOPLAYERLINK")
const VIDEOPLAYER = document.getElementById("VIDEOPLAYER")
const title = document.getElementById("title")
INPL.addEventListener("keyup", searchVideo);
const LINKPADRAO = "https://www.youtube.com/embed"
const LINKNovoAUTO = LINK.replace("watch?v=", "embed/")+"?autoplay=1"
    
function searchVideo(){
  let LINK = INPL.value
  const autoplay = document.getElementById("autoplay").checked
  
  
if(autoplay == false){
const LINKNovo = LINK.replace("watch?v=", "embed/")
    
if(LINK == ""||LINK == " "){


 console.error("Video Não Indentificado!")
 VIDEOPLAYERLINK.placeholder = LINKPADRAO;
 VIDEOPLAYER.setAttribute('src', LINKPADRAO);
 title.innerHTML = "PINGOBRAS EMBUTIR VIDEO?NDA"
}else{
  VIDEOPLAYERLINK.placeholder = LINKNovo
  VIDEOPLAYER.setAttribute('src', LINKNovo)
  title.innerHTML = "PINGOBRAS?" + LINKNovo}
    
  }else{

  
  if(video == ""||video == " "){
    let videoNovo2 = "https://www.youtube.com/embed"
    
    console.error("Video Não Indentificado!")
    .placeholder = videoNovo2;
    VIDEOPLAYER.setAttribute('src', videoNovo2);
    title.innerHTML = "PINGOBRAS EMBUTIR VIDEO?NDA"
  }else{
  VIDEOPLAYERLINK.placeholder = videoNovo
  VIDEOPLAYER.setAttribute('src', videoNovo)
  title.innerHTML = "PINGOBRAS?" + videoNovo}
    
}}
