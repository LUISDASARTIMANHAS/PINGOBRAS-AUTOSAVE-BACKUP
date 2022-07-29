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
            console.log("TAMANHO DO DOWLOAD" + GB+"." + MB+"." + KB + "GB")
          
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
  console.log("NETWORK/LOG> Latencia do servidor: " + end_time + "ms")
  
  let MBps = document.getElementById("MBps");
  let GBps = document.getElementById("GBps");
                  
  /* Converts a number into string
  using toFixed(2) rounding to 2 */
  var bps = (loadedBits / timeDuration).toFixed(2);
  var speedInKbps = (bps / 1024).toFixed(2);
  var speedInMbps = (speedInKbps / 1024).toFixed(2);
  var speedInGBps = (speedInMbps / 1024).toFixed(2);
  console.info("NETWORK/LOG> Network signal:" + speedInKbps+"kbps  " + speedInMbps+"mbps" )
  const NetworkObj = {Bps: bps, KBps: speedInKbps, MBps: speedInMbps, GBps: speedInGBps}
  const Network = JSON.stringify(NetworkObj);
  localStorage.setItem("Network", Network);  
  
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
