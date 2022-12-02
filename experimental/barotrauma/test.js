var canvas = document.getElementById("GameBoard");
var context = canvas.getContext("2d");

//desenhar game
context.fillStyle = "red"
context.fillRect(50,50,100,100)

// salvando configs.
context.save()
