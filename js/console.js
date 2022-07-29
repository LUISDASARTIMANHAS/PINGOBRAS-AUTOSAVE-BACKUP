const loopRotation = setInterval(rotation, 1000);
  let dire = document.querySelector("#direitos")
    
  
function rotation(x) {
  return new Promise(resolve => {   
  let rotacao = 175
  dire.style.transform = "rotateY(20deg)"
  resolve(x)
  });
  }async function rotation2() {
    var x = await rotation(10);
  console.log(x);
  }
rotation2()


let text = "<p>Nome de código do navegador: " + navigator.appCodeName + "</p>" + 
"<br>" +
"<p>Nome do navegador: " + navigator.appName + "</p>" + 
"<br>" +
"<p>Versão do navegador: " + navigator.appVersion + "</p>" + 
"<br>" +
"<p>Os Cookies estão ativados: " + navigator.cookieEnabled + "</p>" + 
"<br>" +
"<p>Idioma do navegador: " + navigator.language + "</p>" + "<br>" +
"<p>Navegador on-line: " + navigator.onLine + "</p>" + "<br>" +
"<p>Plataforma: " + navigator.platform + "</p>" + "<br>" +
"<p>Cabeçalho do agente usuário: " + navigator.userAgent + "</p>" + "<br>";
document.getElementById("multiconsole").innerHTML = text;