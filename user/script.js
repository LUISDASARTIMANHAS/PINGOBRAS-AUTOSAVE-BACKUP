let btntema = document.getElementById('tema');
let body = document.querySelector('body');
let footer = document.querySelector('footer')
btntema.addEventListener('click', function() {
    if(body.style.background === 'white') {
      body.style.background = 'black';
      body.style.color = 'white';
      footer.style.background = 'black';
      footer.style.color = 'white';
  } else {
      body.style.background = 'white';
      body.style.color = 'black';
      footer.style.background = 'white';
      footer.style.color = 'black';
  }
});