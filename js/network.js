const loopNetSpeed = setInterval(refreshNetSpeed, 5000);
      
        function refreshNetSpeed() {
        var userImageLink = 
"https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200714180638/CIP_Launch-banner.png";
            var time_start, end_time;
            var KB = "024"
            var MB = "024"
            var GB = "5"
            var Size = GB + MB + KB
            var Size8 = Size*8
            console.log("TAMANHO DO DOWLOAD: " + GB+"." + MB+"." + KB + "GB")
          
            var downloadImgSrc = new Image();
          
            downloadImgSrc.onload = function () {
                end_time = new Date().getTime();
                displaySpeed();
            };
            time_start = new Date().getTime();
            downloadImgSrc.src = userImageLink;
  
            
function displaySpeed() {
                
  var timeseconds = (end_time - time_start)
  console.log("NETWORK/LOG> ⚠️Latencia do servidor: " + timeseconds + "s")
  
  let MBps = document.getElementById("MBps");
  let GBps = document.getElementById("GBps");
  let downloadTime = document.getElementById("downloadTime");
  downloadTime.innerHTML = "IMG:5MB/"+ timeseconds + "s "
  
  
  /* Converte um número em string usando toFixed(2) arredondando para 2 */
  var bps = (Size8 / timeseconds).toFixed(2);
  var speedInKbps = (bps/1024).toFixed(2);
  var speedInMbps = (speedInKbps/1024).toFixed(2);
  var speedInGBps = (speedInMbps/1024).toFixed(2);
  var speedInTBps = (speedInGBps/1024).toFixed(2)
  console.info("NETWORK/LOG> ⚠️Network signal:" + speedInKbps+"KBps  " + speedInMbps+"MBps  " + speedInGBps+"GBps  " + speedInTBps+"TBps")
  const NetworkObj = {Bps: bps,KBps: speedInKbps,MBps: speedInMbps,GBps: speedInGBps, timeduration:timeseconds}
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
