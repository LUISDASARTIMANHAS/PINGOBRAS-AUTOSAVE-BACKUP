const URlRequest = document.getElementById("URLRequest")
const Results = document.getElementById("Results")
var Request = new XMLHttpRequest();
const MSGError = document.getElementById("msgError")


function Requisitar() {
const URlRequestValue = URlRequest.value

Request.open("get", URlRequestValue, true);
Request.addEventListener("progress", updateProgress, false);
Request.addEventListener("load", transferComplete, false);
Request.addEventListener("error", transferFailed, false);
Request.addEventListener("abort", transferCanceled, false);
Request.send()

  
// progresso de transferências do servidor para o cliente (downloads)
function updateProgress (oEvent){
if (oEvent.lengthComputable){
    var percentComplete = oEvent.loaded / oEvent.total;
    bar.innerHTML = percentComplete
}else{
    transferComplete()}
}

function transferComplete(evt) {
  Results.innerHTML = this.responseText;
}

function transferFailed(evt) {
  MSGError.style.display = "block";
  MSGError.innerHTML = "Um erro ocorreu durante a transferência do arquivo.";
}

function transferCanceled(evt) {
  MSGError.style.display = "block";
  MSGError.innerHTML = "A transferência foi cancelada pelo usuário.";
}
  
}//Fim do  requisitar