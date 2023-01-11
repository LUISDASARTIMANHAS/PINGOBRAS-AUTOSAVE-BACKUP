const RegistroLink1 = "https://pingobras.glitch.me/js/worker.js"
const RegistroLink2 = "https://pingobras.glitch.me/js/functions.js"
const RegistroLink3 = "https://pingobras.glitch.me/js/network.js"
const RegistroLink4 = "js/copyright.js"
const RegistroLink5 = "https://pingobras.glitch.me/js/base.js"


if ("serviceWorker" in navigator) {
	console.log("Registrando Um Js...");
	navigator.serviceWorker
	.register(RegistroLink1)
		
    .then(function (reg) {
			if (navigator.serviceWorker.controller === null) {
				navigator.serviceWorker.ready.then(() => {reg.active.postMessage("claimMe");});}
	      console.log("Script Js Registrado Para Todo O Domínio!!");
	  	  })
		
    .catch(function (err) {console.error("Erro Ao Registrar Um js: ", err);});
}//Fim Do Registrador 


if ("serviceWorker" in navigator) {
	console.log("Registrando Um Js...");
	navigator.serviceWorker
  .register(RegistroLink2)
  
		.then(function (reg) {
			if (navigator.serviceWorker.controller === null) {
				navigator.serviceWorker.ready.then(() => {reg.active.postMessage("claimMe");});}
			console.log("Script Js Registrado Para Todo O Domínio!");
  })
		.catch(function (err) {console.error("Erro Ao Registrar Um Js: ", err);});
}//Fim Do Registrador


if ("serviceWorker" in navigator) {
	console.log("Registrando Um Js...");
	navigator.serviceWorker
  .register(RegistroLink3)
  
		.then(function (reg) {
			if (navigator.serviceWorker.controller === null) {
				navigator.serviceWorker.ready.then(() => {reg.active.postMessage("claimMe");});}
			console.log("Script Js Registrado Para Todo O Domínio!");
		})
  
		.catch(function (err) {console.error("Erro Ao Registrar Um js: ", err);});
}//Fim Do Registrador


if ("serviceWorker" in navigator) {
	console.log("Registrando Um Js...");
	navigator.serviceWorker
  .register(RegistroLink4)
  
		.then(function (reg) {
			if (navigator.serviceWorker.controller === null) {
				navigator.serviceWorker.ready.then(() => {reg.active.postMessage("claimMe");});}
			console.log("Script Js Registrado Para Todo O Domínio!");
		})
  
		.catch(function (err) {console.error("Erro Ao Registrar Um js: ", err);});
}//Fim Do Registrador