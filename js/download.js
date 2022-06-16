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
		var uploader = new ngutils.uploader("#uploader627a97320a83b", "\/parkfile", config);
		
			})(jQuery);
ngutils.event.addListener(ngutils.uploadEvent.onComplete, function(event) {
			event.target.remove();
			if (event.data.response.error) {
				alert(event.data.response.error);
			}
		});
		ngutils.event.addListener(ngutils.uploadEvent.onError, function(event) {
			event.target.remove();
			alert(event.data.errorMsg);
		});

function contato() {
  document.getElementById("contato").submit();
}

let tokenjson = localStorage.getItem("JsonToken");
let tokenR = JSON.parse(tokenjson);

if(tokenR == null) {
  
}