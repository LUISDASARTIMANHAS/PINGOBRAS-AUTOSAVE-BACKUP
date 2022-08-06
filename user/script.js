let btntema = document.getElementById('tema');

btntema.addEventListener('click', function() {
let body = document.querySelector('body');
let inputColor = document.querySelector('#colorTema');
var letras = 'preto' 
  
  if(letras === 'branco') {
      body.style.background = inputColor.value;
      body.style.color = 'white';
  } else {
      body.style.background = 'white';
      body.style.color = 'black';
  }
});