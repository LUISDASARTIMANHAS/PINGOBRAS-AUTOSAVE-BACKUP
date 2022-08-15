<?php
$para = "luisaugustodesouza785@gmail.com"
$de = $_GET['usu_email']; // veja que usamos entre as aspas o mesmo nome que está na barra de endereço entre a "?" e o "=".
$assunto = "Pedido de canselmento de email Propaganda"//isto é uma string, é uma variavel que guarda textos, e você pode digitar quaquer coisa entre as aspas;
$mensagem = "Solicito que você cancele a propaganda";
mail ($para,$assunto,$mensagem,$de);//pronto você vai receber o email.
?>

