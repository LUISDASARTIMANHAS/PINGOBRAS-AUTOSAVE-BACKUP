const loopScript = setInterval(refreshScript, 15000);

function refreshScript() {
let STORAGE = localStorage.getItem("JSON STORAGE")
console.log("armazenamento JSON requirido");
let  STORAGEYT = localStorage.getItem("YoutubeLinks")
console.log("armazenamento YTL requirido");

  const loophorarioLocal = setInterval(temporizadorLocal, 1000);
function temporizadorLocal() {
  const date = new Date();
 }
  
console.log("Hello 🌎");
const btn = document.querySelector("[dipped]");
if (btn){
  btn.onclick = function(){
    btn.classList.toggle("dipped");
  };}

const UPinput = document.querySelector("#UP1");
if (UPinput){
  UPinput.onclick = function(){
    UPinput.classList.toggle("dipped");
  };}
const UP2input = document.querySelector("#UP2");
if (UP2input){
  UP2input.onclick = function(){
    UP2input.classList.toggle("dipped");
  };}


window.addEventListener("load", function(){
setTimeout(function open(event){
document.querySelector(".popup").style.display = "block";
document.querySelector(".site-altura").style.opacity = "0.2";
document.querySelector(".site-altura").style.cursor = "not-allowed";
  console.log("Anuncio carregado!"); 
},5000)
});

document.querySelector("#close").addEventListener("mouseover", function(){
    document.querySelector(".popup").style.display = "none";
    document.querySelector(".site-altura").style.opacity = "1";
    document.querySelector(".site-altura").style.cursor = "default";
  console.log("Anuncio fechado!");
});

let CL = JSON.parse(STORAGE);
console.log("client descodificada");
console.log(CL);

const btndisabled = document.querySelector("[disabled]");
if (btndisabled){
  btndisabled.onclick = function(){
    window.location.href = "https://pingobras-404.glitch.me"
    document.querySelector(".site-altura").style.cursor = "progress";
    console.log("Usuario redirecionado para site fora do ar!");
  };}

  setTimeout( function REL(){
const YTLinks = JSON.parse(STORAGEYT);
console.log(YTLinks);
document.getElementById("ytlink1").innerHTML = YTLinks.LINK1;
},125000);

}

const loopNetSpeed = setInterval(refreshNetSpeed, 10000);
      
        function refreshNetSpeed() {
        var userImageLink = 
"https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200714180638/CIP_Launch-banner.png";
            var time_start, end_time;
            // The size in bytes
            var KB = "112"
            var MB = "530"
            var GB = "8"
            var Size = GB + MB + KB
            let downloadSizeLabel = document.getElementById("DownloadSize");
            downloadSizeLabel.innerHTML = + GB+"." + MB+"." + KB + "GB"
          
            var downloadSize = Size;
            var downloadImgSrc = new Image();
  
            downloadImgSrc.onload = function () {
                end_time = new Date().getTime();
                displaySpeed();
            };
            time_start = new Date().getTime();
            downloadImgSrc.src = userImageLink;
  
            
function displaySpeed() {
                
  var timeDuration = (end_time - time_start) / 1000;
  var loadedBits = downloadSize * 8;
                
  let MBps = document.getElementById("MBps");
  let GBps = document.getElementById("GBps");
                  
  /* Converts a number into string
  using toFixed(2) rounding to 2 */
  var bps = (loadedBits / timeDuration).toFixed(2);
  var speedInKbps = (bps / 1024).toFixed(2);
  var speedInMbps = (speedInKbps / 1024).toFixed(2);
  MBps.innerHTML = speedInMbps + " MBps"
  MBps.style
  var speedInGBps = (speedInMbps / 1024).toFixed(2);
  GBps.innerHTML = speedInGBps + " GBps"}
}