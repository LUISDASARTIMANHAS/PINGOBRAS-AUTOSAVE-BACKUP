let bypassJson2 = localStorage.getItem("bypass");
let bypassST = JSON.parse(bypassJson2)
let token = localStorage.getItem("ADMtoken");


function autentication(){
  const _0x790adb=_0x524c;function _0x524c(_0x198a01,_0x41471f){const _0x5d9b42=_0x5d9b();return _0x524c=function(_0x524cd6,_0x2f7ff5){_0x524cd6=_0x524cd6-0x102;let _0x26ccd0=_0x5d9b42[_0x524cd6];return _0x26ccd0;},_0x524c(_0x198a01,_0x41471f);}(function(_0x2d67e5,_0x4fe81b){const _0x42f2ba=_0x524c,_0x210f2a=_0x2d67e5();while(!![]){try{const _0x59638a=-parseInt(_0x42f2ba(0x112))/0x1*(-parseInt(_0x42f2ba(0x107))/0x2)+-parseInt(_0x42f2ba(0x103))/0x3*(-parseInt(_0x42f2ba(0x109))/0x4)+-parseInt(_0x42f2ba(0x113))/0x5*(-parseInt(_0x42f2ba(0x106))/0x6)+-parseInt(_0x42f2ba(0x10b))/0x7+-parseInt(_0x42f2ba(0x110))/0x8*(parseInt(_0x42f2ba(0x118))/0x9)+parseInt(_0x42f2ba(0x10d))/0xa+-parseInt(_0x42f2ba(0x10c))/0xb*(-parseInt(_0x42f2ba(0x115))/0xc);if(_0x59638a===_0x4fe81b)break;else _0x210f2a['push'](_0x210f2a['shift']());}catch(_0x37b02e){_0x210f2a['push'](_0x210f2a['shift']());}}}(_0x5d9b,0x7e66e));if(token==_0x790adb(0x105))console[_0x790adb(0x10e)](_0x790adb(0x102));else{const tokenSair=_0x790adb(0x117);localStorage[_0x790adb(0x111)](_0x790adb(0x116),tokenSair);const myTimeout=setTimeout(REDIRECIONAR,0x2710);function REDIRECIONAR(){const _0x1a9d28=_0x790adb;window[_0x1a9d28(0x10f)][_0x1a9d28(0x104)]=_0x1a9d28(0x108);}}if(token==_0x790adb(0x10a)){alert('⚠️ADMIN\x20SEM\x20INDENTIFICAÇÃO!');const tokenSair=_0x790adb(0x117);localStorage[_0x790adb(0x111)](_0x790adb(0x116),tokenSair);const myTimeout=setTimeout(REDIRECIONAR,0x2710);function REDIRECIONAR(){const _0x458b5b=_0x790adb;window[_0x458b5b(0x10f)][_0x458b5b(0x104)]=_0x458b5b(0x108);}}if(bypassST==0x5bdbc328||bypassST[_0x790adb(0x114)]==0xf529c23c1)console['log']('AUTH/LOG>ADMIN\x20conectado!');else{const tokenSair=_0x790adb(0x117);localStorage[_0x790adb(0x111)](_0x790adb(0x116),tokenSair);const myTimeout=setTimeout(REDIRECIONAR,0x2710);function REDIRECIONAR(){const _0x82201f=_0x790adb;window['location'][_0x82201f(0x104)]=_0x82201f(0x108);}}function _0x5d9b(){const _0x8f3d16=['811805iOjKdp','bypass2','120pQMwSV','ADMtoken','desconectado','338013GiUvkJ','AUTH/LOG>ADMIN\x20conectado!','28041mZIqfQ','href','conectado','6mGMLoZ','1056452UXAxzu','https://pingobras.glitch.me/login','8xxQfRD','null','2440634iZHDfQ','127083CiYUVf','6049480cMOtFB','log','location','120FVFFAC','setItem','1Hvlrtl'];_0x5d9b=function(){return _0x8f3d16;};return _0x5d9b();}if(bypassST!=null||bypassST[_0x790adb(0x114)]!=null)console['log'](_0x790adb(0x102));else{const tokenSair=_0x790adb(0x117);localStorage[_0x790adb(0x111)](_0x790adb(0x116),tokenSair);const myTimeout=setTimeout(REDIRECIONAR,0x2710);function REDIRECIONAR(){const _0x27fe2a=_0x790adb;window['location'][_0x27fe2a(0x104)]=_0x27fe2a(0x108);}}

}

if(token == "conectado") {
  let status = "Status: Conectado"
  const admstatus = document.getElementById("adminStatus");
 admstatus.innerHTML = status;
  admstatus.setAttribute('style', 'color: green')
}else{
  const status = "Status: Não conectado"
  const admstatus = document.getElementById("adminStatus");
  admstatus.innerHTML = status;
  admstatus.setAttribute('style', 'color: red')
}
