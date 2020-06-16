<?php
	$nombre		=		$_POST['nombre']
	$email		=		$_POST['email']
	$consulta	=		$_POST['consulta']

	$mensaje = "
		<strong>Nombre: </strong> $nombre <br/>
		<strong>Correo: </strong> $email <br/>
		<strong>Consulta: </strong> $consulta <br/>
	";

	mail("cristiandracedo@hotmail.com", "Presupuesto", $mensaje, "From: $nombre<$email>"\n Reply-To:$email \n Content-Type:text/html; charset=utf-8)
?>