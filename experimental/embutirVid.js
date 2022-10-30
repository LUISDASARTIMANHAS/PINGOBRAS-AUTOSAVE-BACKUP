const videoL = document.getElementById("video")
const jsL = document.getElementById("jsL")
const iframe = document.getElementById("iframe")
const title = document.getElementById("title")
videoL.addEventListener("keyup", searchVideo);
    
    
function searchVideo(){
  let video = videoL.value
  const autoplay = document.getElementById("autoplay").checked
  
  
  if(autoplay == false){
    const videoNovo = video.replace("watch?v=", "embed/")
    
    if(video == ""||video == " "){
    let videoNovo2 = "https://www.youtube.com/embed"
    
    console.error("Video Não Indentificado!")
    jsL.innerHTML = videoNovo2;
    iframe.setAttribute('src', videoNovo2);
    title.innerHTML = "PINGOBRAS EMBUTIR VIDEO?NDA"
  }else{
  jsL.innerHTML = videoNovo
  iframe.setAttribute('src', videoNovo)
  title.innerHTML = "PINGOBRAS?" + videoNovo}
    
  }else{
  const videoNovo = video.replace("watch?v=", "embed/")+"?autoplay=1"
  
  if(video == ""||video == " "){
    let videoNovo2 = "https://www.youtube.com/embed"
    
    console.error("Video Não Indentificado!")
    jsL.innerHTML = videoNovo2;
    iframe.setAttribute('src', videoNovo2);
    title.innerHTML = "PINGOBRAS EMBUTIR VIDEO?NDA"
  }else{
  jsL.innerHTML = videoNovo
  iframe.setAttribute('src', videoNovo)
  title.innerHTML = "PINGOBRAS?" + videoNovo}
    
}}
