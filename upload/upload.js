
const fileInput = document.querySelector("#fileInput");
const StatusUP = document.getElementById("statusUP");
const statusLoad = document.getElementById("statusLoad");
const statusServer = document.getElementById("statusServer");
const fileID = document.getElementById("fileID");
const keyLink = document.getElementById("keyLink");
const fileName = document.getElementById("fileName");
const fileSize = document.getElementById("fileSize");
const fileLink = document.getElementById("fileLink");
const fileExpire = document.getElementById("fileExpire");
const maxDownloads = document.getElementById("maxDownloads");
const fileType = document.getElementById("fileType");
const filecreated = document.getElementById("filecreated");
const filemodified = document.getElementById("filemodified");
const Llink = document.getElementById("labelLink");


const UPDBObj = localStorage.getItem("Upload")
const UPDB = JSON.parse(UPDBObj)
let sizeCalc = UPDB.size/1000


statusLoad.innerHTML = UPDB.success
statusServer.innerHTML = UPDB.status
fileID.innerHTML = UPDB.id
keyLink.innerHTML = UPDB.key
fileName.innerHTML = UPDB.name
fileSize.innerHTML = sizeCalc+"Kb"
fileLink.innerHTML = UPDB.link
fileExpire.innerHTML = UPDB.expires
maxDownloads.innerHTML = UPDB.maxDownloads
fileType.innerHTML = UPDB.mimeType
filecreated.innerHTML = UPDB.created
filemodified.innerHTML = UPDB.modified
Llink.href = UPDB.link


const uploadFile = file => {
  console.log("Uploading file...");
  StatusUP.innerHTML = "Carregando Arquivo..."
  const API_ENDPOINT = "https://file.io/NCZYB2M.YJ3NGBB-8ZNMENT-MK9M8HY-3Y8GXQY";
  const request = new XMLHttpRequest();
  const formData = new FormData();

  request.open("POST", API_ENDPOINT, true);
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      console.log(request.responseText);
      localStorage.setItem("Upload",request.responseText)
      StatusUP.innerHTML = "Arquivo Carregado!"
      window.location.href = "/upload"}
  };
  formData.append("file", file);
  request.send(formData);
};


  
fileInput.addEventListener("change", event => {
  const files = event.target.files;
  uploadFile(files[0]);
});

function Upar() {
  try{
const uploadFile = file => {
  console.log("Uploading file...");
  StatusUP.innerHTML = "Carregando Arquivo..."
  const API_ENDPOINT = "https://file.io/NCZYB2M.YJ3NGBB-8ZNMENT-MK9M8HY-3Y8GXQY";
  const request = new XMLHttpRequest();
  const formData = new FormData();

  request.open("POST", API_ENDPOINT, true);
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      console.log(request.responseText);
      localStorage.setItem("Upload",request.responseText)
      StatusUP.innerHTML = "Arquivo Carregado!"
      window.location.href = "/upload"}
  };
  formData.append("file", file);
  request.send(formData);};
    
fileInput.addEventListener("click", event => {
  const files = event.target.files;
  uploadFile(files[0]);
});

}catch (err){
  alert(err);}
}