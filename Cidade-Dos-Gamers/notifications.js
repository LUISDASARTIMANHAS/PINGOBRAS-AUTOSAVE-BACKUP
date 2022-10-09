// Verifica se o browser suporta notificações
  if (!("Notification" in window)) {
    alert("Este browser não suporta notificações de Desktop");
  }
    
    document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
      // The tab has become visible so clear the now-stale Notification.
     n.close(); 
    }
  });
    
      var opcoes = {
      body: "Ainda não a recrutamento de Staffs!",
      icon: "https://cdn.discordapp.com/attachments/1022972920517099580/1026201314457296956/Picsart_22-09-27_22-49-32-293.jpg",
      silent: false,
      vibrate: [200, 100, 200],
      renotify: true,
      tag: "song"
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