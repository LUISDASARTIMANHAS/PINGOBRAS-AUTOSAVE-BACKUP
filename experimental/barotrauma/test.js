var canvas = document.getElementById("GameBoard");
var context = canvas.getContext("2d");

//desenhar game
context.fillStyle = "red"
context.fillRect(50,50,100,100)

context.lineWidth = 10
context.strokeStyle = "green"
context.strokeRect(50,50,100,100)
