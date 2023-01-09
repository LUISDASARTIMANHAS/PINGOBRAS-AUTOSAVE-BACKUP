const URlRequest = "https://unpkg.com/@ruffle-rs/ruffle@0.1.0-nightly.2023.1.8/ruffle.js"
var oReq = new XMLHttpRequest();

function RequisitarRUFFLES() {

oReq.onload = Results;
oReq.open("get", URlRequest, true);
oReq.send();
console.log("Loading...")
}

function Results(){
console.log(this.responseText);
}

oReq.addEventListener("progress", updateProgress, false);
oReq.addEventListener("load", transferComplete, false);
oReq.addEventListener("error", transferFailed, false);
oReq.addEventListener("abort", transferCanceled, false);

oReq.open("get", URlRequest, true);

oReq.send()

// progresso de transferências do servidor para o cliente (downloads)
function updateProgress (oEvent) {
  if (oEvent.lengthComputable) {
    var percentComplete = oEvent.loaded / oEvent.total;
    // ...
  } else {
    // Não é possível calcular informações de progresso uma vez que a dimensão total é desconhecida
  }
}

function transferComplete(evt) {
  alert("A transferência foi concluída.");
}

function transferFailed(evt) {
  alert("Um erro ocorreu durante a transferência do arquivo.");
}

function transferCanceled(evt) {
  alert("A transferência foi cancelada pelo usuário.");
}