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

        var userImageLink = 
"https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200714180638/CIP_Launch-banner.png";
            var time_start, end_time;
            // The size in bytes
            var downloadSize = 5616998;
            var downloadImgSrc = new Image();
  
            downloadImgSrc.onload = function () {
                end_time = new Date().getTime();
                displaySpeed();
            };
            time_start = new Date().getTime();
            downloadImgSrc.src = userImageLink;
            document.write("time start: " + time_start);
            document.write("<br>");
  
            function displaySpeed() {
                const loopNetSpeed = setInterval(refreshNetSpeed, 5000);
      
                function refreshNetSpeed() {
                var timeDuration = (end_time - time_start) / 1000;
                var loadedBits = downloadSize * 8;
                
                /* Converts a number into string
                   using toFixed(2) rounding to 2 */
                var bps = (loadedBits / timeDuration).toFixed(2);
                var speedInKbps = (bps / 1024).toFixed(2);
                var speedInMbps = (speedInKbps / 1024).toFixed(2);
                MBps.innerHTML = speedInMbps
                var speedInGBps = (speedInMbps / 10024).toFixed(2);
            }}


function contato() {
  document.getElementById("contato").submit();
};


    