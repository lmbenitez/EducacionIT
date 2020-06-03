<?php
//Captura de Variables (Espacio reservado en memoria)
	//PHP 			//HTML
	$nombre		=	$_POST['nombre']; 	//Cristian
	$email		=	$_POST['email'];	//Cristiandracedo@hotmail.com
	$consulta	=	$_POST['consulta']; //Buenas Tardes, America!!
	
//Organizamos los datos para el cuerpo del Mail
	$mensaje	="
		<strong>Nombre: </strong> $nombre <br/>
		<strong>Correo: </strong> $email <br/>
		<strong>Consulta: </strong> $consulta <br/>
	";
//Instrucciones para enviar el correo
		//Destinatario		//asunto		//cuerpo	//Remitente
	mail("info@misitio.com", "Presupuesto", $mensaje, "From: $nombre <$email>"\n Reply-To:$email\n Content-Type: text/html; charset=utf-8);
//Redireccionamiento a otra pagina del sitio
	header("location:https://github.com/c215714n/EducacionIT")
?>