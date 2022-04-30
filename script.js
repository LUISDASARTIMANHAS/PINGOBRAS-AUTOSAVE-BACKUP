/*
This is your site JavaScript code - you can add interactivity and carry out processing
- Initially the JS writes a message to the console, and moves a button you can add from the README
*/

// Print a message in the browser's dev tools console each time the page loads
// Use your menus or right-click / control-click and choose "Inspect" > "Console"
console.log("Hello 🌎");

/* 
Make the "Click me!" button move when the visitor clicks it:
- First add the button to the page by following the "Next steps" in the README
*/
const btn = document.querySelector("button"); // Get the button from the page
// Detect clicks on the button
if (btn) {
  btn.onclick = function() {
    // The JS works in conjunction with the 'dipped' code in style.css
    btn.classList.toggle("dipped");
  };
}

// This is a single line JS comment
/*
This is a comment that can span multiple lines 
- use comments to make your own notes!
*/

// Verificando suporte a tecnologia
if (window.webkitNotifications) {
  console.log('Seu browser suporta Notifications');
}
else {
  console.log('Seu browser não suporta Notifications =(');
}
var Notifications = {
    requestPermission: function(callback) {
        window.webkitNotifications.requestPermission(callback);
    }
};
  
$(function() {
    $('#click-me').click(function() {
        Notifications.requestPermission(function() {
            alert('Permissão concedida');
        })
    });
});

var Notifications = {
    requestPermission: function(callback) {
        window.webkitNotifications.requestPermission(callback);
    },
      
    showNotification: function(){
        // Verificando se a permissão já foi concedida
         if (window.webkitNotifications.checkPermission() > 0) {
                // Se não houver, volta a pedir permissão
                Notifications.requestPermission(function() {
                    Notifications.showNotification();
                });
         }
         else {
                // Se a permissão já foi concedida, cria a notificação e envia a mesma.
                var notification = window.webkitNotifications.createNotification("http://userserve-ak.last.fm/serve/64s/318711.jpg", "Olá!", "Esta é a mensagem");
                notification.show();
         }
    }
};
Notifications.show("http://userserve-ak.last.fm/serve/64s/318711.jpg", "Aqui colocamos a mensagem de notificação");
var Notifications = {
    apiAvailable: function() {
        if(window.webkitNotifications) {
            return true;
        } else {
            return false;
        }
    },
  
    isAuthorized: function() {
        if (!this.apiAvailable()) return false;
  
        return window.webkitNotifications.checkPermission() > 0 ? false : true;
    },
  
    authorize: function(callback) {
        var self = this;
        if (!this.apiAvailable()) return false;
  
        window.webkitNotifications.requestPermission(function() {
            if (self.isAuthorized()) {
                callback();
            }
        });
    },
  
    show: function(url, title, body) {
        if (!this.apiAvailable()) return false;
  
        var self = this;
  
        if (this.isAuthorized()) {
            var popup = window.webkitNotifications.createNotification(url, title, body);
            popup.show();
            setTimeout(function(){
                popup.cancel();
            }, 5000);
        } else {
            this.authorize(function() {
                //console.log(arguments);
                self.show(url, title, body);
            });
        }
    },
      
    checkForPermission: function() {
        if (!this.isAuthorized()) this.callForPermission();
    },
      
    callForPermission: function() {
          
        var authorizeBox = jQuery('<div />').addClass('notifications-authorize')
                                            .html('<p>Seu navegador possui suporte a notificações. Para solicitar uma permissão de notificação, clique no botão abaixo. Aperte "ALLOW" ou "PERMITIR" para a janela de notificação que irá aparecer. <input type="button" value="Ativar notificações" /></p>')
                                          
        jQuery('body').append(authorizeBox);
          
        jQuery('div.notifications-authorize input').click(function(){
            jQuery(this).remove();
            Notifications.authorize();
        });
    }
};
  
$(function() {
    Notifications.checkForPermission();
});
