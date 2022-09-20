const body = document.querySelector = "body"
const Registro = localStorage.getItem("Registo4G");
const userinput = prompt("Insira Seu Usuario!","Administrador")
    
if(Registro == userinput) {
body.style.display = "block"    
}else{
alert("Não Foi Possivel Logar Tente Novamente!")
window.location.href = "https://pingobras.glitch.me/4G-UFI-453A"
    }