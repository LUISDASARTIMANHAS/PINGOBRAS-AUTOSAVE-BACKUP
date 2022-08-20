const miliseconds2 = "000"
setTimeout(mudarlink,45+miliseconds2);
setTimeout(mudarlink2,120+miliseconds2);

function mudarlink() {
let labelLink = document.getElementById("ytlink1")
let link = ""

let VIDEO = document.querySelector("#yt");
VIDEO.setAttribute('src', link);
labelLink.innerHTML = link;
};

function mudarlink2() {
let LIVE = document.querySelector("#cryptomoedas");
LIVE.setAttribute('src', "https://dlive.tv/Coincard?ref=dlive-gjqnluuvhi?autoplay=1&muted=0");
}