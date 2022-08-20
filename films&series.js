const miliseconds2 = "000"
setTimeout(mudarlink,30+miliseconds2);

function mudarlink() {
let STORAGEYT = localStorage.getItem("YoutubeLinks");
let YT = JSON.parse(STORAGEYT);
let labelLink = document.getElementById("ytlink1")

let VIDEO = document.querySelector("#yt");
VIDEO.setAttribute('src', YT.LINK1);
  
labelLink.innerHTML = YT.LINK1;
};
