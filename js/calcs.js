let rebonusStorage = localStorage.getItem("siteBonus");
let bonus = JSON.parse(rebonusStorage);
const ClickMouseCalc = new Audio('https://cdn.glitch.global/b39d6a4a-0e14-4b41-930d-29d3ccd6c137/click%20do%20mouse.mp3?v=1661006466474');

let siteMoney = 36.00
let userbonus = siteMoney - bonus.moeda

let currentSaldo = document.getElementById("currentSaldo")
//currentSaldo.innerHTML = userbonus
   

function buscar() {
const inputbuscar = document.getElementById("inputbuscar")
console.log(inputbuscar.value)
  
//const tela = document.createElement("tela");
//const id = document.createAttribute("id");
//tela.value = inputbuscar.value
//id.value = "democlass";
//tela.setAttributeNode(id);
//document.getElementById("telasearch").appendChild(tela);
  
  
}


function CalcJuros() {
 try {
console.log("click do mouse")
ClickMouseCalc.play()
   
let EMP = document.getElementById("EMP").value;
const JurosSem = document.getElementById("jurosSem")
const JurosProxSem = document.getElementById("jurosProxSem")
const CalcTotal = document.getElementById("calcTotal")
const ProxSem = document.getElementById("proximasem")
const btncalc = document.getElementById("btnCalc")

if(EMP == 0){
    btncalc.style.opacity = "0.7"
    btncalc.style.cursor = "not-allowed"
    JurosSem.innerHTML = "Insira o valor na calculadora!"
    JurosSem.style.color = "red"
    CalcTotal.innerHTML = "Insira o valor na calculadora!"
    CalcTotal.style.color = "red"
    JurosProxSem.innerHTML = "Insira o valor na calculadora!"
    JurosProxSem.style.color = "red"
    ProxSem.innerHTML = "Insira o valor na calculadora!"
    ProxSem.style.color = "red"
    EMP.style.outlineColor = "red"
  }else{
  btncalc.style.opacity = "1"
  btncalc.style.cursor = "pointer"
  const porcent = 0.2 
  const juros = EMP * porcent;
  const total = (Number(EMP) + Number(juros));
  const jurosNew = total * porcent
  const TotalProxSem = total + jurosNew
  
  JurosSem.innerHTML = juros
  CalcTotal.innerHTML = total
  JurosProxSem.innerHTML = jurosNew
  ProxSem.innerHTML = TotalProxSem
  JurosSem.style.color = "green"
  CalcTotal.style.color = "green"
  JurosProxSem.style.color = "green"
  ProxSem.style.color = "green"
  EMP.style.outlineColor = "blue"}
 }catch (err) {
  console.log(err);
}
  
   
  }

function buscarDiv() {
document.getElementById('buscadorLista').style.display="block";
    var i;
    let pesquisado = document.getElementById('inputbuscar').value  
    pesquisado=pesquisado.toLowerCase();
    let items = document.getElementsByClassName('dividendos');
      
    for (i = 0; i < items.length; i++) { 
        if (!items[i].innerHTML.toLowerCase().includes(pesquisado)) {
            items[i].style.display="none";
          document.getElementById('buscadorLista').style.color="green";
        }
        else {
            items[i].style.display="block";  
          document.getElementById('buscadorLista').style.color="red";
        }
    }
}