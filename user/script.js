let btntema = document.getElementById('tema');
var body = document.querySelector('body');
btntema.addEventListener('click', function() {
    if(body.style.background === 'white') {
      body.style.background = 'black';
      body.style.color = 'white';
  } else {
      body.style.background = 'white';
      body.style.color = 'black';
  }
});