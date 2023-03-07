const inpVlCode = document.getElementById("inpValidarCode");
const LabelValido = document.getElementById("labelVlCode");
const d = new Date()
let ano = d.getFullYear()
inpVlCode.addEventListener("keyup", Validar);

let DBcode = ["3699473","34674986","71551131","75785598"]


function Validar(){
let inpVlCodeValue = document.getElementById("inpValidarCode").value;
const LabelValidoSty = LabelValido.style
  
  
if(inpVlCodeValue == "20102023"||inpVlCodeValue == "20049645"||inpVlCodeValue == "3699473"){
LabelValidoSty.color = "green"
LabelValido.innerHTML = "Esete Codigo Esta Autenticado e validado Ate "+ano
}else{
  LabelValidoSty.color = "red"
  LabelValido.innerHTML = "Este Codigo Não E Valido Por Luis Das Artimanhas Nem pela empresa"
}
  
  
}