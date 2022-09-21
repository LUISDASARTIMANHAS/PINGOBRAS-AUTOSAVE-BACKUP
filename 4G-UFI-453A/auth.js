const body = document.querySelector("body")
const STRegistro = localStorage.getItem("Registo4G");
body.style.display = "block"

if(STRegistro == "null"||STRegistro == null){
  const usercadInp = prompt("Cadastre seu usuario","Meu Nome") 
  
}else{
const userinput = prompt("Insira Seu Usuario!","Administrador")
/*if(STRegistro == userinput) {
body.style.display = "block"    
}else{
alert("Não Foi Possivel Logar Tente Novamente!")
window.location.href = "https://pingobras.glitch.me/4G-UFI-453A"
    }*/
}
