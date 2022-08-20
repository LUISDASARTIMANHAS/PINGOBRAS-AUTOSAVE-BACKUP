let STORAGEYT = localStorage.getItem("YoutubeLinks");
let YT = JSON.parse(STORAGEYT);
let labelLink = document.getElementById("ytlink1")
console.log(YT);

setTimeout(mudarlink,125000);

function mudarlink() {
console.log(YT);
labelLink.innerHTML = YT.LINK1;
};