if ("serviceWorker" in navigator) {
	console.log("Registrando Network js...");
	navigator.serviceWorker
		.register("js/network.js")
		.then(function (reg) {
			if (navigator.serviceWorker.controller === null) {
				navigator.serviceWorker.ready.then(() => {
					reg.active.postMessage("claimMe");
				});
			}
			console.log("Network js registrado para todo o dominio!!");
		})
		.catch(function (err) {
			console.log("Erro ao registrar Network js: ", err);
		});
}

if ("serviceWorker" in navigator) {
	console.log("Registrando worker...");
	navigator.serviceWorker
    .register("js/worker.js")
		.then(function (reg) {
			if (navigator.serviceWorker.controller === null) {
				navigator.serviceWorker.ready.then(() => {
					reg.active.postMessage("claimMe");
				});
			}
			console.log("Worker js registrado para todo o dominio!");
		})
		.catch(function (err) {
			console.log("Erro ao registrar worker: ", err);
		});
}

if ("serviceWorker" in navigator) {
	console.log("Registrando funções js...");
	navigator.serviceWorker
    .register("js/functions.js")
		.then(function (reg) {
			if (navigator.serviceWorker.controller === null) {
				navigator.serviceWorker.ready.then(() => {
					reg.active.postMessage("claimMe");
				});
			}
			console.log("funções js registrado para todo o dominio!");
		})
		.catch(function (err) {
			console.log("Erro ao registrar funções js: ", err);
		});
}