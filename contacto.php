<?php
//Variable: Espacio reservado en la memoria cuyo valor puede cambiar
	//php 			//html
	$nombre		=	$_POST['nombre']	//Cristian
	$email		=	$_POST['email']		//cristiandracedo@hotmail.com
	$consulta	=	$_POST['consulta']	//Buenas tardes, América!!
	$nacionalidad = $_POST['nacionalidad']
// Organizacion de los datos (Cuerpo del mail)
	$mensaje = "
		<strong>Nombre: </strong> $nombre <br/>
		<strong>Correo: </strong> $email <br/>
		<strong>Nacionalidad: </strong> $nacionalidad <br/>
		<strong>Consulta: </strong> $consulta <br/>
	";
//Envio del MAIL
	//Destinatario		//Asunto	//Cuerpo	//Remitente
mail("info@misitio.com", "Consulta", $mensaje, "From: $nombre<$email>" \n Reply-To:$email \n Content-Type:text/html; charset=utf-8)

//Redireccionamiento
header("location:https://misitio.com")
?>