const miliseconds2 = "000"
setTimeout(mudarlink,45+miliseconds2);
setTimeout(mudarlink2,120+miliseconds2);

function mudarlink() {
let labelLink = document.getElementById("ytlink1")
let preyoutube = "https://www.youtube.com/embed/"
let precontroles = "?muted=1&autoplay=1"
let id = "DIDesej4ljc"
let link = preyoutube + id + precontroles

let VIDEO = document.querySelector("#yt");
VIDEO.setAttribute('src', link);
labelLink.innerHTML = link;
};

function mudarlink2() {
let LIVE = document.querySelector("#cryptomoedas");
LIVE.setAttribute('src', "https://dlive.tv/Coincard?ref=dlive-gjqnluuvhi?autoplay=1&muted=0");
}


const FUTLink01 = document.getElementById("FUTLink#01")
const FUTLive01 = document.getElementById("FUTLive#01")

let tokenLink = "token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjdXN0b21lcklkIjoiNyIsInVzZXJJZCI6IjciLCJzcG9ydGlkIjoiMSIsImdzbWlkIjoiMzk5Mzg0NSIsIndiaWQiOiIwIiwicmJpZCI6IjE3NDMyMzMiLCJ1dWlkIjoiYWFudDZwdnpwOXVobm02eHZ1eWNvaGRlYyIsImlhdCI6MTY3MDA4NzgwNiwiZXhwIjoxNjcwMTAyMjA2LCJpc3MiOiJjc2IifQ.tt1i6BmWIFy2EcJMISrSZn8uGWeWo9_yfnaNzpQ-qRg&ussport=false&datatracking=false&gacode=UA-43334570-1&bodyclasses=performV2PlayerContainer&csspath=https://assets.cdnppb.net/static/videoplayer/v2.59.0/resources/bf/performV2&Vis3D=true&widgetvis=true&imageconfig=https://assets.cdnppb.net/static/videoplayer/v2.59.0/resources/bf/performV2/imageconfig.js&lang=pt&streamonly=true&width=374&mode=mini&height=214&defaultview=vis&used=true"
const linkDTrasmissao = "//wab-visualisation.performgroup.com/csb/index.html?" + tokenLink
    
  FUTLink01.placeholder = videoNovo
  FUTLive01.setAttribute('src', videoNovo)
    
  }else{
  const videoNovo = video.replace("watch?v=", "embed/")+"?autoplay=1"
  
  if(video == ""||video == " "){
    let videoNovo2 = "https://www.youtube.com/embed"
    
    console.error("Video Não Indentificado!")
    jsL.placeholder = videoNovo2;
    iframe.setAttribute('src', videoNovo2);
    title.innerHTML = "PINGOBRAS EMBUTIR VIDEO?NDA"
  }else{
  jsL.placeholder = videoNovo
  iframe.setAttribute('src', videoNovo)
  title.innerHTML = "PINGOBRAS?" + videoNovo}
    
}}