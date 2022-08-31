console.log("Iniciando... activity...")
document.write('<img src="https://www.usersonline.org/estilos/6.gif"> <a style="font-family:Trebuchet MS; color: #333333; font-size:14px; text-decoration:none; padding:0 0 0 4px;" href="https://www.usersonline.org/">2 Online</a>');
	var _Hasync= _Hasync|| [];
	_Hasync.push(['Histats.start', '1,3526775,4,0,0,0,00010000']);
	_Hasync.push(['Histats.fasi', '1']);
	_Hasync.push(['Histats.track_hits', '']);
	(function() {
	var hs = document.createElement('script'); hs.type = 'text/javascript'; hs.async = true;
	hs.src = ('//s10.histats.com/js15_as.js');
	(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(hs);
	})();
	
	(function() {
	   var script = document.createElement('SCRIPT');
	   script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.7/jquery.min.js';
	   script.type = 'text/javascript';
	   document.getElementsByTagName('head')[0].appendChild(script);
	})();
	
	function fetchdata(){
	 $.ajax({
	  url: 'https://www.usersonline.org/ping.php?id=1W01WYz3Zxz53837',
	  type: 'get',
	  success: function(response){
	   // Perform operation on the return value
	   // alert(response);
	  }
	 });
	}
	setInterval(fetchdata,90000);