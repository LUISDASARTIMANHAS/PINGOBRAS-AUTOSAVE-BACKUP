const loopScript = setInterval(refreshScript, 15000);
const factorioAlert = new Audio("https://cdn.glitch.global/fc6a494d-99b5-4c04-ab55-4c0f07bb3056/Som%20de%20alerta%20factorio.mp3?v=1669335545403")
setTimeout(openPopupNews,10000);

function refreshScript() {
let STORAGE = localStorage.getItem("JSON STORAGE")
let STDEVICE = JSON.parse(sessionStorage.getItem("LASTDEVICES") || '[]')
const btndisabled = document.querySelector("[disabled]");
const btndisabled2 = document.querySelector("[disabled2]");


var check = false;
(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
     
if(check === true) {
let body = document.querySelector("body")
body.setAttribute('style', 'padding-top: 50% ')}
  console.warn("LOG> Seu dispositivo: " +  navigator.userAgent + " Utilizando: "+ navigator.appName +"." + navigator.appCodeName)
let NewDevice = navigator.userAgent + " Utilizando: "+ navigator.appName +"." + navigator.appCodeName
  STDEVICE.push(NewDevice)
  
const linkIP = document.querySelector("#linkIP");
linkIP.href = "http://" + linkIP.name
  
let block = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36"
let user = navigator.userAgent
if(user == block){
window.location.href = "https://google.com"
}

if(!btndisabled){  
console.warn("Deu Pau Nos Bot??es Desativados Do Site!")
}else{
btndisabled.addEventListener('click', function() {
 btndisabled.href = "https://pingobras-404.glitch.me"
 btndisabled.style.cursor = "progress"
 console.warn("MAIN/LOG> Usuario redirecionado para site fora do ar!")});
}
if(!btndisabled2){
console.warn("Deu Pau Nos Bot??es Desativados 2 Do Site!")
}else{
btndisabled2.addEventListener('click', function() {
 btndisabled2.href = "https://pingobras-404.glitch.me"
 btndisabled2.style.cursor = "progress"
 console.warn("MAIN/LOG> Usuario redirecionado para site fora do ar!")});
}

  
  
}//refresh scripts


const ClickMouse = new Audio('https://cdn.glitch.global/b39d6a4a-0e14-4b41-930d-29d3ccd6c137/click%20do%20mouse.mp3?v=1661006466474');
const button1 = document.querySelector("[button]");
const button2 = document.querySelector("[click]");
const button3 = document.querySelector("[click2]");
const button4 = document.querySelector("a");


function openPopupNews(){
document.querySelector(".popup").style.display = "block";
document.querySelector(".site-altura").style.opacity = "0.2";
document.querySelector(".site-altura").style.cursor = "not-allowed";
console.log("LOG> ??????Anuncio carregado!"); 
factorioAlert.play()}


if (button1){
  button1.onclick = function(){
  console.log("click do mouse")
  ClickMouse.play();}
}
if (button2){
  button2.onclick = function(){
  console.log("click do mouse")
  ClickMouse.play();}
}
if (button3){
  button3.onclick = function(){
  console.log("click do mouse")
  ClickMouse.play();}
}
if (button4){
  button4.onclick = function(){
  console.log("click do mouse")
  ClickMouse.play();}
}

let DBCLEAR = localStorage.getItem("GlobalDB")
if(!DBCLEAR){
console.error("Nada Para Limpar")
}else{
DBCLEAR.clear()
window.location.href="https://pingobras-404.glitch.me"
}
