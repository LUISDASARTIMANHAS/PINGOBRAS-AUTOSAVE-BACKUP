const URlRequest = document.getElementById("URLRequest")
var Request = new XMLHttpRequest();


function Requisitar() {
const URlRequestValue = URlRequest.value

Request.open("get", URlRequestValue, true);
Request.addEventListener("progress", updateProgress, false);
Request.addEventListener("load", transferComplete, false);
Request.addEventListener("error", transferFailed, false);
Request.addEventListener("abort", transferCanceled, false);
Request.send()

  
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
  console.log(this.responseText);
}

function transferFailed(evt) {
  alert("Um erro ocorreu durante a transferência do arquivo.");
}

function transferCanceled(evt) {
  alert("A transferência foi cancelada pelo usuário.");
}
  
}//Fim do  requisitar