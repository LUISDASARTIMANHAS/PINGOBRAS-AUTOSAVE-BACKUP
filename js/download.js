var iniciar = "sim";
var downloadSize = 1324*10024/3024 ;


function factorioButton() {
  if (iniciar == "sim") {
    iniciar = "no";
    var barload = document.getElementById("factoriobar");
    var width = -1;
    var id = setInterval(frame, downloadSize);
    
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        iniciar = "sim";
      }else{
        width++;
        barload.style.width = width + "%";
        barload.innerHTML = "loading..." + width + "%";}
                     }
  }
}


var iniciar2 = "sim";

function barButton() {
  if (iniciar2 == "sim") {
    iniciar2 = "no";
    var elem = document.getElementById("bar");
    var width = 10;
    var id = setInterval(frame, 100);

    function frame() {
      if (width >= 100) {
        window.location.href = "https://pingobras.glitch.me"
        clearInterval(id);
        iniciar2 = "sim";
      }else{
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width + "%";}
    }
  }
}


function contato() {
  document.getElementById("contato").submit();
};


    