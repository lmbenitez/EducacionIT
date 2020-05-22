<?php
// captura de variables
//VARIABLE: espacio que se reserva en la memoria para almacenar un determinado tipo de dato.
//PHP 		//HTML
$nombre 	= $_POST['nombre']; //Cristian
$email 		= $_POST['email']; //Cristiandracedo@hotmail.com
$consulta 	= $_POST['consulta']; //Buenas Noches, America!!
$lenguaje	= $_POST['lenguaje'];

// cuerpo del mail
$mensaje="
<strong>Nombre:</strong> $nombre <br/>
<strong>email:</strong> $email <br/>
<strong>consulta:</strong> $consulta <br/>
";

// envío del mail
	//DESTINATARIO		//ASUNTO		//CUERPO 	//EMISOR
mail("info@misitio.com", "Consulta Web", $mensaje, "From: $nombre <$email>\nReply-To:$email\nContent-Type: text/html; charset=utf-8");

//Redireccionamiento a pagina Web
header ("Location: http://www.misitio.com/mipagina.html");
?>