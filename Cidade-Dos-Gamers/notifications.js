// Verifica se o browser suporta notificações
  if (!("Notification" in window)) {
    alert("Este browser não suporta notificações de Desktop");
  }else{
  // Verificando suporte a tecnologia
  if (window.webkitNotifications) {
  console.log('Seu browser suporta Notifications');
}else {
  console.warn('Seu browser não suporta Notifications =(');
}
if (Notification.permission === 'denied') {
    alert('Usuário não deu permissão para notificações');
  }
    
  //buscador de erros notify  
  if(!window.Notification) {
    alert('Este browser não suporta Web Notifications!');;
  }
function softwareFindNotify(){
  if (Notification.permission === 'default') {
    Notification.requestPermission(function() {
     alert('Usuário não falou se quer ou não notificações. Logo, o requestPermission pede a permissão pra ele.');
    });
  } else if (Notification.permission === 'granted') {
    alert('Usuário deu permissão');

    var notification = new Notification('O título da Notifcação', {
     body: 'Mensagem do corpo da notificação',
     tag: 'string única que previne notificações duplicadas',
    });
    notification.onshow = function() {
     alert('onshow: evento quando a notificação é exibida')
    },
    notification.onclick = function() {
     alert('onclick: evento quando a notificação é clicada')
    },
    notification.onclose = function() {
     alert('onclose: evento quando a notificação é fechada')
    },
    notification.onerror = function() {
     alert('onerror: evento quando a notificação não pode ser exibida. É disparado quando a permissão é defualt ou denied')
    }

  } else if (Notification.permission === 'denied') {
   alert('Usuário não deu permissão');
  }}

};
    
      var opcoes = {
      body: "Ainda não a recrutamento de Staffs!",
      icon: "https://cdn.discordapp.com/attachments/1022972920517099580/1026201314457296956/Picsart_22-09-27_22-49-32-293.jpg",
      silent: false,
      vibrate: [200, 100, 200],
      renotify: true,
      tag: 'Evento',
  }
  var Evento = {
      body: "Terá um evento, onde a pessoa que enviar mais mensagems no servidor e interagir, irá ganhar uma certa quantia de Sonhos e um cargos específico também, esse é o nosso primeiro evento da Cidade dos Gamers.",
      icon: "https://cdn.discordapp.com/attachments/1022972920517099580/1026201314457296956/Picsart_22-09-27_22-49-32-293.jpg",
      silent: false,
      vibrate: [200, 100, 200],
      renotify: true,
      tag: "Recrutamento",
  }
    
  function notifyMe() {
  // Otherwise, we need to ask the user for permission
   if (Notification.permission !== 'denied') {
    Notification.requestPermission(function (permission) {
      // If the user accepts, let's create a notification
      if (permission === "granted") {
        var notification = new Notification("As notificações foram ativadas!");}});
  }
}
  
    
if (Notification.permission === "granted") {
  var n = new Notification("Recrutamento De Staffs",opcoes);
  
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible') {
      // The tab has become visible so clear the now-stale Notification.
     n.close(); }});
}

if (Notification.permission === "granted") {
  var EventoNotify = new Notification("Evento novo no servidor",Evento);
  
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible') {
      // The tab has become visible so clear the now-stale Notification.
     n.close(); }});
}