const loopfilms = setInterval(refreshfilms, 1000);

function refreshfilms() {
let STORAGEYT = localStorage.getItem("YoutubeLinks");
let YT = JSON.parse(STORAGEYT);
let labelLink = document.getElementById("ytlink1")
console.log(YT);
const miliseconds2 = "000"

setTimeout(mudarlink,30+miliseconds2);

function mudarlink() {
let VIDEO = document.querySelector("#yt");
VIDEO.setAttribute('src', YT.LINK1);
  
console.log(YT);
labelLink.innerHTML = YT.LINK1;
};
  
  
}