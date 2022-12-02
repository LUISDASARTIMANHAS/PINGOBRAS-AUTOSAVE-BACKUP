var canvas = document.getElementById("GameBoard");
var context = canvas.getContext("2d");

//desenhar game
let vertical = 10
let horizontal = 10
let TamLargura = 30 
let TamAltura = 25
context.fillStyle = "red"
context.fillRect(horizontal,vertical,TamLargura,TamAltura)

// salvando configs.
context.save()

vertical = 10
horizontal = 50
TamLargura = 30
TamAltura = 25
context.fillStyle = "blue"
context.fillRect(horizontal,vertical,TamLargura,TamAltura)

context.rest