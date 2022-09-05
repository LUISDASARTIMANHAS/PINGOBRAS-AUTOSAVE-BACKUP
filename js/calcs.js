const loopCalc = setInterval(refreshCalcs, 1000);

function refreshCalcs() {



const ClickMouseCalc = new Audio('https://cdn.glitch.global/b39d6a4a-0e14-4b41-930d-29d3ccd6c137/click%20do%20mouse.mp3?v=1661006466474');
   

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



 try {
let EMP = document.getElementById("EMP").value;
const JurosSem = document.getElementById("jurosSem")
const JurosProxSem = document.getElementById("jurosProxSem")
const CalcTotal = document.getElementById("calcTotal")
const ProxSem = document.getElementById("proximasem")
const LOCalc = document.getElementById("loadingCalc")

if(EMP == 0){
    JurosSem.innerHTML = "Insira o valor na calculadora!"
    JurosSem.style.color = "red"
    CalcTotal.innerHTML = "Insira o valor na calculadora!"
    CalcTotal.style.color = "red"
    JurosProxSem.innerHTML = "Insira o valor na calculadora!"
    JurosProxSem.style.color = "red"
    ProxSem.innerHTML = "Insira o valor na calculadora!"
    ProxSem.style.color = "red"
    LOCalc.style.display = "none"
    EMP.style.border = "5px solid black"
  }else{
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
  LOCalc.style.display = "inline"}
 }catch (err) {
  console.log(err);
}
  
   
  
}//final do repetidor



function buscarDiv() {

    var i;
    let pesquisado = document.getElementById('inputbuscar').value  
    pesquisado=pesquisado.toLowerCase();
    let items = document.getElementsByClassName('dividendos');
      
    for (i = 0; i < items.length; i++) { 
        if (!items[i].innerHTML.toLowerCase().includes(pesquisado)) {
          document.getElementById('buscadorLista').style.display="block";
              items[i].style.display="none";
          document.getElementById('buscadorLista').style.color="green";
          document.getElementById('Nenhum').style.display="block";
        }
        else {
          document.getElementById('buscadorLista').style.display="none";
            items[i].style.display="block";  
          document.getElementById('buscadorLista').style.color="red";
          document.getElementById('Nenhum').style.display="block";
        }
    }
}