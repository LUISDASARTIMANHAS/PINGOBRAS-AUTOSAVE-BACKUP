var i = 0;
function factorioButton() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("factoriobar");
    var width = 10800000;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width + "%";
      }
    }
  }
}


var i = 0;
function barButton() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("bar");
    var width = 10;
    var id = setInterval(frame, 100);
    function frame() {
      if (width >= 100) {
        window.location.href = "https://pingobras.glitch.me"
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width + "%";
      }
    }
  }
}


function contato() {
  document.getElementById("contato").submit();
};


    