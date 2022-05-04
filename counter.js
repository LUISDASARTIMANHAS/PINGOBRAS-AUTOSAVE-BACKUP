function EcrireCookiefreecounterstat(nom,valeur,nombre)
{
   var argv=EcrireCookiefreecounterstat.arguments;
   var argc=EcrireCookiefreecounterstat.arguments.length;
   var ladate=new Date(); 
   ladate.setTime(ladate.getTime()+Number(nombre));
   var path=("/") ;
   var domain=(argc > 4) ? argv[4] : null;
   var secure=(argc > 5) ? arg[5] : false;
//toLocaleString
   document.cookie=nom+"="+escape(valeur)+
      "; expires="+ladate.toGMTString()+
       ((path==null) ? "" : ("; path="+path))+
      ((domain==null) ? "" : ("; domain="+domain))+
      ((secure==true) ? "; secure" : "");
}

function getCookieVal (offset) {
var endstr = document.cookie.indexOf (";", offset);
if (endstr == -1)
endstr = document.cookie.length;
return unescape(document.cookie.substring(offset, endstr));
}

function GetCookie (name) {
var arg = name + "=";
var alen = arg.length;
var clen = document.cookie.length;
var i = 0;
while (i < clen) {
var j = i + alen;
if (document.cookie.substring(i, j) == arg)
return getCookieVal (j);
i = document.cookie.indexOf(" ", i) + 1;
if (i == 0) break;
}
return null;
}

function EcrireCookieGeo(nom,valeur,nombre)
{
   var argv=EcrireCookieGeo.arguments;
   var argc=EcrireCookieGeo.arguments.length;
   if(nombre==-1){
   var ladate=nombre;
   valeur="";
   }
   else{
   var ladate=new Date();
   ladate.setTime(ladate.getTime()+Number(nombre)*1000);
   }
   var expires=(argc > 2) ? argv[2] : null;
   var expires=nombre;
   var path=("/") ;
   var domain=(argc > 4) ? argv[4] : null;
   var secure=(argc > 5) ? arg[5] : false;
   document.cookie=nom+"="+escape(valeur)+
   "; expires="+ladate.toUTCString()+
   ((path==null) ? "" : ("; path="+path))+
   ((domain==null) ? "" : ("; domain="+domain))+
   ((secure==true) ? "; secure" : "");
}

function deleteCookie(name,path,domain) {
    if (GetCookie(name)) {
        document.cookie = name + "=" +
            ((path) ? "; path=" + path : "") +
            ((domain) ? "; domain=" + domain : "") +
            "; expires=Thu, 01-Jan-70 00:00:01 GMT";
    }
}

function GetCookiefreecounterstat (name) {
var arg = name + "=";
var alen = arg.length;
var clen = document.cookie.length;
var i = 0;
while (i < clen) {
var j = i + alen;
if (document.cookie.substring(i, j) == arg)
return getCookieValfreecounterstat (j);
i = document.cookie.indexOf(" ", i) + 1;
if (i == 0) break;
}
return null;
}
function getCookieValfreecounterstat (offset) {
var endstr = document.cookie.indexOf (";", offset);
if (endstr == -1)
endstr = document.cookie.length;
return unescape(document.cookie.substring(offset, endstr));
}
var date_init=new Date();
var test_cookie_value_freecounterstat;
var test_cookie_value_freecounterstat_nv;
var init_freecounterstat=1;
var init_freecounterstat_nv=1;
var acceptcookiefreecounterstat;

//tester si accepte cookies
acceptcookiefreecounterstat = GetCookiefreecounterstat('acceptcookiefreecounterstat');
if(acceptcookiefreecounterstat == null){
date=new Date;
date.setTime(date.getTime()+1000);
EcrireCookiefreecounterstat('acceptcookiefreecounterstat','ok','31536000000');
}
acceptcookiefreecounterstat = GetCookiefreecounterstat('acceptcookiefreecounterstat');

if (acceptcookiefreecounterstat=='ok') {
test_cookie_value_freecounterstat = GetCookiefreecounterstat('counter');
test_cookie_value_freecounterstat_nv = GetCookiefreecounterstat('counter_nv');
   if(test_cookie_value_freecounterstat == null){
   init_freecounterstat=0;
   test_cookie_value_freecounterstat ='3d061e88d64c7694dbe3c57dcc7ad886';
   EcrireCookiefreecounterstat('counter',test_cookie_value_freecounterstat,'46250000');
   }
   if(test_cookie_value_freecounterstat_nv==null){
   test_cookie_value_freecounterstat_nv ='3d061e88d64c7694dbe3c57dcc7ad886';
   EcrireCookiefreecounterstat('counter_nv',test_cookie_value_freecounterstat_nv,'31536000000');
   init_freecounterstat_nv=0;
   }
}
else {
var test_cookie_value_freecounterstat="no";
acceptcookiefreecounterstat='no';
}
div_iframe='<iframe src="https://www.freecounterstat.com/stats_tab/?c=zcrmrdqsuts62apq8xn82nu44gqpxtpj&base=counter9" frameborder="0" height="355" width="500" marginwidth="0" marginheight="0" scrolling="no"></iframe>';html_div='<div id="FCS_zcrmrdqsuts62apq8xn82nu44gqpxtpj_divFix" style="visibility:hidden;z-index:9999;margin:0px;padding:0px;width:565px;top:7%;right:-500px;position:fixed;"><div id="FCS_zcrmrdqsuts62apq8xn82nu44gqpxtpj_divCou" style="width:65px;float:left;text-align:center;background-color:#ccc;padding-left:0px;padding-top:5px;padding-bottom:5px;padding-right:5px;-moz-box-shadow: -5px 5px 5px 0px #656565;-webkit-box-shadow: -5px 5px 5px 0px #656565;-o-box-shadow: -5px 5px 5px 0px #656565;box-shadow: -5px 5px 5px 0px #656565;filter:progid:DXImageTransform.Microsoft.Shadow(color=#656565, Direction=134, Strength=5);-webkit-border-top-left-radius:15px;-webkit-border-bottom-left-radius:15px;-moz-border-radius-topleft:15px;-moz-border-radius-bottomleft:15px;border-top-left-radius: 15px;border-bottom-left-radius: 15px;"><a href="https://www.webcontadores.com/geozoom.php?c=zcrmrdqsuts62apq8xn82nu44gqpxtpj&base=counter9&type_clic=1" target="_blank"><img border="0" src="https://counter9.webcontadores.com/private/countertab.php?c=zcrmrdqsuts62apq8xn82nu44gqpxtpj&init='+date_init.getTime()+'&init_freecounterstat='+init_freecounterstat+'&library=library_counters&coef=1&type=163&lenght=4&type_result=tabRT" border="0"  alt="Clique aqui para ver todos os detalhes e estatisticas do site" title="Clique aqui para ver todos os detalhes e estatisticas do site"/></a><br><a href="#" onClick="allerR()" id="FCS_zcrmrdqsuts62apq8xn82nu44gqpxtpj_btSee" style="width:100%;font-size: 0px; min-width: 50px; min-height: 50px; max-width: 50px; max-height: 50px; margin-top: 5px; margin-bottom: 5px; background-image: url(https://counter9.webcontadores.com:4433/geozoom/css/icon.gif); background-size: auto 100%; display: block; background-repeat: no-repeat; background-position: 50% 50%; width: 50px;margin-left: auto;margin-right: auto;">Loupe</a></div><div id="FCS_zcrmrdqsuts62apq8xn82nu44gqpxtpj_divCac" style="background-color:#ccc;margin:0px;padding:0px;width:500px;height:355px;position:absolute;left:65px;">&nbsp;</div></div>';

function getObject(id) {
   var object = null;
   if (document.layers) {
    object = document.layers[id];
   } else if (document.all) {
    object = document.all[id];
   } else if (document.getElementById) {
    object = document.getElementById(id);
   }
   return object;
}
function getDimensions(){
    var winW = 630, winH = 460;
    if (document.body && document.body.offsetWidth) {
     winW = document.body.offsetWidth;
     winH = document.body.offsetHeight;
    }
    if (document.compatMode=='CSS1Compat' && document.documentElement && document.documentElement.offsetWidth ) {
     winW = document.documentElement.offsetWidth;
     winH = document.documentElement.offsetHeight;
    }
    if (window.innerWidth && window.innerHeight) {
     winW = window.innerWidth;
     winH = window.innerHeight;
    }
    return{"width":winW, "height":winH}
}
function getOffsetRight(elem){
    element=getObject(elem)
    var width = element.offsetWidth
    var right = 0;
    while (element.offsetParent) {
        right += element.offsetLeft;
        element = element.offsetParent;
    }
    right += element.offsetLeft;
    right = getDimensions()["width"]-right
    right -= width
    return right
}

var FCS_zcrmrdqsuts62apq8xn82nu44gqpxtpj_timer;
var FCS_zcrmrdqsuts62apq8xn82nu44gqpxtpj_left=0;
var FCS_zcrmrdqsuts62apq8xn82nu44gqpxtpj_height=0;
var FCS_zcrmrdqsuts62apq8xn82nu44gqpxtpj_typecss="top";
var FCS_zcrmrdqsuts62apq8xn82nu44gqpxtpj_typeresult="tabRT";
var FCS_zcrmrdqsuts62apq8xn82nu44gqpxtpj_dif=0;
//onload=function(){
function FCS_zcrmrdqsuts62apq8xn82nu44gqpxtpj_addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      if (oldonload) {
        oldonload();
      }
      func();
    }
  }
}
FCS_zcrmrdqsuts62apq8xn82nu44gqpxtpj_addLoadEvent(function() {

FCS_zcrmrdqsuts62apq8xn82nu44gqpxtpj_left=document.getElementById('FCS_zcrmrdqsuts62apq8xn82nu44gqpxtpj_divFix').offsetLeft;
FCS_zcrmrdqsuts62apq8xn82nu44gqpxtpj_height=document.getElementById('FCS_zcrmrdqsuts62apq8xn82nu44gqpxtpj_divCou').offsetHeight;
if(FCS_zcrmrdqsuts62apq8xn82nu44gqpxtpj_typecss=="bottom"){
 if(FCS_zcrmrdqsuts62apq8xn82nu44gqpxtpj_typeresult=="tabLB"){
 FCS_zcrmrdqsuts62apq8xn82nu44gqpxtpj_dif=document.getElementById('FCS_zcrmrdqsuts62apq8xn82nu44gqpxtpj_divCou').offsetHeight+15;
 document.getElementById('FCS_zcrmrdqsuts62apq8xn82nu44gqpxtpj_divFix').style.bottom=FCS_zcrmrdqsuts62apq8xn82nu44gqpxtpj_dif+"px";
 }
 else if(FCS_zcrmrdqsuts62apq8xn82nu44gqpxtpj_typeresult=="tabRB"){
 //FCS_zcrmrdqsuts62apq8xn82nu44gqpxtpj_dif=document.getElementById('FCS_zcrmrdqsuts62apq8xn82nu44gqpxtpj_divCac').offsetHeight-document.getElementById('FCS_zcrmrdqsuts62apq8xn82nu44gqpxtpj_divCou').offsetHeight;
 FCS_zcrmrdqsuts62apq8xn82nu44gqpxtpj_dif=15;
 document.getElementById('FCS_zcrmrdqsuts62apq8xn82nu44gqpxtpj_divFix').style.bottom=FCS_zcrmrdqsuts62apq8xn82nu44gqpxtpj_dif+"px";
 }
 FCS_zcrmrdqsuts62apq8xn82nu44gqpxtpj_dif=(document.getElementById('FCS_zcrmrdqsuts62apq8xn82nu44gqpxtpj_divCac').offsetHeight*-1)+document.getElementById('FCS_zcrmrdqsuts62apq8xn82nu44gqpxtpj_divCou').offsetHeight;
}
else{
FCS_zcrmrdqsuts62apq8xn82nu44gqpxtpj_dif=0;
}
document.getElementById('FCS_zcrmrdqsuts62apq8xn82nu44gqpxtpj_divCac').style.top=FCS_zcrmrdqsuts62apq8xn82nu44gqpxtpj_dif+"px";
document.getElementById('FCS_zcrmrdqsuts62apq8xn82nu44gqpxtpj_divCac').style.backgroundColor="#";
document.getElementById('FCS_zcrmrdqsuts62apq8xn82nu44gqpxtpj_divCou').style.backgroundColor="#";
document.getElementById('FCS_zcrmrdqsuts62apq8xn82nu44gqpxtpj_divFix').style.visibility="visible";
//}
})

function allerR(){
var nume=document.getElementById('FCS_zcrmrdqsuts62apq8xn82nu44gqpxtpj_divFix')
nume.style.left=nume.offsetLeft-10+'px'
if(getOffsetRight('FCS_zcrmrdqsuts62apq8xn82nu44gqpxtpj_divFix')>=0){
document.getElementById('FCS_zcrmrdqsuts62apq8xn82nu44gqpxtpj_divCac').innerHTML=div_iframe;
document.getElementById('FCS_zcrmrdqsuts62apq8xn82nu44gqpxtpj_btSee').onclick=retourR;
return false
}
else{
clearTimeout(FCS_zcrmrdqsuts62apq8xn82nu44gqpxtpj_timer);
FCS_zcrmrdqsuts62apq8xn82nu44gqpxtpj_timer = setTimeout(allerR,10)
}
}

function retourR(){
var nume=document.getElementById('FCS_zcrmrdqsuts62apq8xn82nu44gqpxtpj_divFix')
nume.style.left=nume.offsetLeft+10+'px'
if(nume.offsetLeft>=FCS_zcrmrdqsuts62apq8xn82nu44gqpxtpj_left){
nume.style.left=FCS_zcrmrdqsuts62apq8xn82nu44gqpxtpj_left+"px";
document.getElementById('FCS_zcrmrdqsuts62apq8xn82nu44gqpxtpj_divCac').innerHTML="";
document.getElementById('FCS_zcrmrdqsuts62apq8xn82nu44gqpxtpj_btSee').onclick=allerR;
return false
}
clearTimeout(FCS_zcrmrdqsuts62apq8xn82nu44gqpxtpj_timer);
FCS_zcrmrdqsuts62apq8xn82nu44gqpxtpj_timer = setTimeout(retourR,10)
}

function allerL(){
var nume=document.getElementById('FCS_zcrmrdqsuts62apq8xn82nu44gqpxtpj_divFix')
nume.style.left=nume.offsetLeft+10+'px'
if(nume.offsetLeft==0){
document.getElementById('FCS_zcrmrdqsuts62apq8xn82nu44gqpxtpj_btSee').onclick=retourL;
document.getElementById('FCS_zcrmrdqsuts62apq8xn82nu44gqpxtpj_divCac').innerHTML=div_iframe;
return false
}
if(nume.offsetLeft>=document.getElementById('FCS_zcrmrdqsuts62apq8xn82nu44gqpxtpj_divCac').offsetWidth){
return false
}
else{
clearTimeout(FCS_zcrmrdqsuts62apq8xn82nu44gqpxtpj_timer);
FCS_zcrmrdqsuts62apq8xn82nu44gqpxtpj_timer = setTimeout(allerL,10)
}
}

function retourL(){
var nume=document.getElementById('FCS_zcrmrdqsuts62apq8xn82nu44gqpxtpj_divFix')
nume.style.left=nume.offsetLeft-10+'px'
if(nume.offsetLeft<=-(document.getElementById('FCS_zcrmrdqsuts62apq8xn82nu44gqpxtpj_divCac').offsetWidth)){
document.getElementById('FCS_zcrmrdqsuts62apq8xn82nu44gqpxtpj_divCac').innerHTML="";
document.getElementById('FCS_zcrmrdqsuts62apq8xn82nu44gqpxtpj_btSee').onclick=allerL;
return false
}
clearTimeout(FCS_zcrmrdqsuts62apq8xn82nu44gqpxtpj_timer);
FCS_zcrmrdqsuts62apq8xn82nu44gqpxtpj_timer = setTimeout(retourL,10)
}


var nb_couleur;
if(screen.colorDepth!=undefined){
 nb_couleur=screen.colorDepth;
}
else if(screen.pixelDepth!=undefined){
 nb_couleur=screen.pixelDepth;
}
else{
 nb_couleur=0;
}
var browser = parseInt(navigator.appVersion);
if (browser>=4){var resolution = (screen.height + "*" + screen.width)}
else{var resolution;}
if (navigator.appName.indexOf("Microsoft Internet Explorer")!=-1){langue=navigator.systemLanguage;}
else{langue=navigator.language;}
langue=langue.substring(0,2);
var date_freecounterstat = new Date();

var ref=document.referrer;
var bro_nom="chrome";
//if (ref.indexOf(".swf")!=-1 && bro_nom.indexOf("chrome")!=-1){
//ref="http://pingobras.glitch.me/";
//ref="NULL";

html_div+='<img style="border:none" src = "https://counter9.stat.ovh:4433/private/pointeur/pointeur.gif?|zcrmrdqsuts62apq8xn82nu44gqpxtpj|'+escape(resolution)+'|'+escape(langue)+'|'+escape(nb_couleur)+'|'+Math.round(date_freecounterstat.getTime()/1000)+'|'+test_cookie_value_freecounterstat+'|computer|lin|cros|chrome|90|Brazil|BR|-20.388700|-40.322201|Vila+Velha|Vivo|-10800|'+init_freecounterstat_nv+'|1651673350|'+acceptcookiefreecounterstat+'|'+escape(document.URL)+'|'+escape(ref)+'|js|179.186.21.219|||&init='+date_init.getTime()+'" border="0"  width="1" height="1">';

var xhrarray={};
var extension1=false;
var extension2=false;
var extension3=false;

function detectChromeExtension(extensionId, accesibleResource, callback){
    if (typeof(chrome) !== 'undefined'){
        xhrarray['xhr_'+extensionId] = new XMLHttpRequest();
        var testUrl = 'chrome-extension://' +extensionId +'/' +accesibleResource;
        xhrarray['xhr_'+extensionId].open('HEAD', testUrl, true);
        xhrarray['xhr_'+extensionId].setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhrarray['xhr_'+extensionId].timeout = 1000;

        xhrarray['xhr_'+extensionId].onreadystatechange = function() {
            if (xhrarray['xhr_'+extensionId].readyState == 4 && typeof(callback) == 'function') {
                if (xhrarray['xhr_'+extensionId].status == 200) {
                    callback.call(this, true);
                } else {
                    callback.call(this, false);
                }
            }
        }
        xhrarray['xhr_'+extensionId].ontimeout = function() {
            if (typeof(callback) == 'function')
                callback.call(this, false);
        }
        xhrarray['xhr_'+extensionId].send();
    } else {
        if (typeof(callback) == 'function')
            callback.call(this, false);
    }
}

function myCallbackFunction1(b){
if(b==true){extension1=true;}
detectChromeExtension('cfhdojbkjhnklbpkdaibdccddilifddb', 'block.html', myCallbackFunction2);
}

function myCallbackFunction2(b){
 if(b==true){extension2=true;}
 if(extension1==true || extension2==true){frameMe("https://counter9.stat.ovh:4433/private/chrome_true.gif?u=1651673350");}
 else{frameMe("https://counter9.stat.ovh:4433/private/chrome_false.gif?u=1651673350");}
}

function detectFF()
{
    var iframe = document.createElement("iframe");
    iframe.height = "1px";
    iframe.width = "1px";
    iframe.id = "ads-text-iframe";
    iframe.src = "https://counter9.stat.ovh/ads.php";

    document.body.appendChild(iframe);
    var img_FF="";
    setTimeout(function()
               {
                   var iframe = document.getElementById("ads-text-iframe");
                   if(iframe.style.display == "none" || iframe.style.display == "hidden" || iframe.style.visibility == "hidden" || iframe.offsetHeight == 0)
                   {
                        //alert("Adblock is blocking ads on this page");
                        //extension3=true;
                        img_FF='https://counter9.stat.ovh:4433/private/firefox_true.gif?u=1651673350';
                        iframe.remove();
                   }
                   else
                   {
                        //alert("Adblock is not detecting ads on this page");
                        img_FF='https://counter9.stat.ovh:4433/private/firefox_false.gif?u=1651673350';
                        iframe.remove();
                   }
		 if(navigator.userAgent.toLowerCase().match(/android|webos|iphone|ipad|ipod|blackberry/i))
 		 {
		  img_FF='https://counter9.stat.ovh:4433/private/firefox_M.gif?u=1651673350';
		 }
		 frameMe(img_FF);
               }, 100);
}

function frameMe(u)
{
 iframe = document.createElement('iframe');
 iframe.style.display = "none";
 iframe.src = u;
 document.body.appendChild(iframe);
}

if(navigator.userAgent.toLowerCase().indexOf('chrome') > -1 || navigator.userAgent.toLowerCase().indexOf('crios') > -1 )
{
 if(navigator.userAgent.toLowerCase().match(/android|webos|iphone|ipad|ipod|blackberry/i))
 {
  frameMe("https://counter9.stat.ovh:4433/private/chrome_M.gif?u=1651673350");
 }
 else
 {
 detectChromeExtension('gighmmpiobklfepjocnamgkkbiglidom', 'img/icon24.png', myCallbackFunction1);
 }
}

if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1)
{
 if(navigator.userAgent.toLowerCase().match(/android|webos|iphone|ipad|ipod|blackberry/i))
 {
  frameMe('https://counter9.stat.ovh:4433/private/firefox_M.gif?u=1651673350');
 }
 else{ detectFF();}
}


document.getElementById('sfczcrmrdqsuts62apq8xn82nu44gqpxtpj').innerHTML=html_div;
