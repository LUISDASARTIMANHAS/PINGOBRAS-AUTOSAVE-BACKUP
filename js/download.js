var i = 0;
function barButton() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("bar");
    var width = 10;
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
function factorioButton() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("factoriobar");
    var width = 10;
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


	(function($) {


		var config = {
    "component": {
        "path": "dumping_grounds\/upload",
        "data": {
            "dump_id": null
        }
    },
    "sizeLimit": 256000000,
    "dropAreaText": "Drop file, or click here to upload.",
    "multiple": false,
    "allowedExtensions": [
        "bmp",
        "gif",
        "jpg",
        "jpeg",
        "png",
        "tif",
        "tiff",
        "webp",
        "swf",
        "fla",
        "swc",
        "as",
        "doc",
        "htm",
        "html",
        "hx",
        "odt",
        "rtf",
        "txt",
        "xml",
        "ace",
        "gz",
        "rar",
        "tar",
        "zip",
        "pdf",
        "psd"
    ],
    "liveUpdate": true,
    "template": "upload_template_627a97320a83d"
};

function contato() {
  document.getElementById("contato").submit();
};

    
var sair = document.querySelector("#sair");
sair.addEventListener("click", function sair() {
  alert("usuario deslogado");
const REstorageToken = {token: 0};
const Cryptotoken = JSON.stringify(REstorageToken);
console.log("codificando token");
  localStorage.setItem("JsonToken", Cryptotoken);
console.log("token redefinido");
  window.location.href = "https://pingobras.glitch.me"});

    