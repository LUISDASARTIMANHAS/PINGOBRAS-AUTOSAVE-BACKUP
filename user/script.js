let btntema = document.getElementById('tema');

btntema.addEventListener('click', function() {
let body = document.querySelector('body');
let inputColor = document.querySelector('#colorTema');
  
  
  if(body.style.background === 'white') {
      body.style.background = inputColor.value;
      body.style.color = 'black';
  } else {
      body.style.background = 'white';
      body.style.color = 'black';
  }
});