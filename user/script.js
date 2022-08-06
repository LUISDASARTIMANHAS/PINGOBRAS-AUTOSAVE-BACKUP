let btntema = document.getElementById('tema');
let userbg = localStorage.getItem('UserBackground')
let body = document.querySelector('body');

if(userbg == "null") {
  body.style.background = "white"
}else{
  body.style.background = userbg
}

btntema.addEventListener('click', function() {
let inputColor = document.querySelector('#colorTema');
  
      body.style.background = inputColor.value;
      localStorage.setItem( 'UserBackground',inputColor.value);
      body.style.color = 'white';
  }
  
});