let STORAGEYT = localStorage.getItem("YoutubeLinks");
let YT = JSON.parse(STORAGEYT);
let labelLink = document.getElementById("ytlink1")
console.log(YT);
const miliseconds2 = "000"

setTimeout(mudarlink,12+miliseconds2);

function mudarlink() {
let VIDEO = document.querySelector("#image");
img.setAttribute('src', 'outra_imagem.png');
  
console.log(YT);
labelLink.innerHTML = YT.LINK1;
};