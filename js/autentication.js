const btnEnviar = document.querySelector("#btn-enviar-admin");
const handleLogin = (event) => {
    event.preventDefault();

    const dados = document.getElementById('password');
    fetch('http://myapi.com/api/v1/login', { dados })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
}
btnEnviar.addEventListener('click', handleLogin);