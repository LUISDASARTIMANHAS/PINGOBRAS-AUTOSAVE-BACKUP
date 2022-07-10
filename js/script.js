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


  setTimeout( function REL(){
const YTLinks = JSON.parse(STORAGEYT);
console.log(YTLinks);
document.getElementById("ytlink1").innerHTML = YTLinks.LINK1;
},125000);
  
window.addEventListener("load", function(){  
const copyright = document.querySelector("#copyright")
  copyright.innerHTML = "Desenvolvedores:" + "©LUIS_DAS_ARTIMANHAS &amp; DOUGLAS_PG 2010-" + document.write(new Date().getFullYear()) + "Todos os direitos reservados"})

  
}




const loopNetSpeed = setInterval(refreshNetSpeed, 5000);
      
        function refreshNetSpeed() {
        var userImageLink = 
"https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200714180638/CIP_Launch-banner.png";
            var time_start, end_time;
            // The size in bytes
            var min = 5616998
            var KB = "998"
            var MB = "616"
            var GB = "30"
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
  var loadedBits = downloadSize;
  console.log(end_time)
  
  let MBps = document.getElementById("MBps");
  let GBps = document.getElementById("GBps");
                  
  /* Converts a number into string
  using toFixed(2) rounding to 2 */
  var bps = (loadedBits / timeDuration).toFixed(2);
  var speedInKbps = (bps / 1024).toFixed(2);
  var speedInMbps = (speedInKbps / 1024).toFixed(2);
  var speedInGBps = (speedInMbps / 1024).toFixed(2);
  
  if(speedInKbps != "Infinity" ) {
  MBps.innerHTML = speedInMbps + " MBps"
  MBps.setAttribute('style', 'color: green')
  GBps.innerHTML = speedInGBps + " GBps"
  GBps.setAttribute('style', 'color: green')}
  else{
    if(speedInKbps === "Infinity"){
  MBps.innerHTML = "Recalculando" + " MBps"
  MBps.setAttribute('style', 'color: blue')
  GBps.innerHTML = "Recalculando" + " GBps"
  GBps.setAttribute('style', 'color: blue')}
  }
  
 if(speedInMbps < 2048.00) {
  MBps.setAttribute('style', 'color: red')
 }
  if(speedInGBps < 2.048) {
  GBps.setAttribute('style', 'color: red')
 }
  
}}

    var check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    if(check === true) {
let body = document.querySelector("body")
    body.setAttribute('style', 'padding-top: 45% ')
    }


const looptime = setInterval(timeRefresh, 500);
      
function timeRefresh() {
const time = new Date();
let hours = time.getHours();
let minutes = time.getMinutes();
let seconds = time.getSeconds();
let horario = "0" + hours +":" + "0" + minutes +":" + seconds
document.querySelector("[horario]").innerHTML = horario;
document.querySelector("[timer]").innerHTML = horario;
  if(horario > '019:030:00'){
    document.querySelector(".site-altura").style.display = "none";
    document.querySelector(".msg-error-hour").style.display = "block";
  }else{
    document.querySelector(".site-altura").style.display = "block";
    document.querySelector(".msg-error-hour").style.display = "none";
  }
  
}