/*Maquetado Avanzado*/
	//Actualizar Progress al cambiar Input
		var progressInput = document.querySelector('#progressInput');
		var progressValue = document.querySelector('#progressValue')
		progressInput.addEventListener(
			'change', () => progressValue.value = progressInput.value
		)
	//Canvas
		var ctx = document.querySelector('#jsCanvas').getContext('2d');
		//Rectangulo Rojo
			ctx.fillStyle = "#c30";
			ctx.fillRect(10,10,100,100);
		//Circulo AzulCeleste
			ctx.fillStyle = "rgba(0,80,120,.5)"
			ctx.arc(110, 110, 50, 50, 100);
			ctx.fill();
		//Linea Diagonal Verde
			ctx.beginPath();
				ctx.moveTo(200, 0);
				ctx.lineTo(0,200);
				ctx.strokeStyle = 'darkgreen';
				ctx.lineWidth = 10;
				ctx.stroke();
			ctx.closePath();
		//Texto sin Relleno
			ctx.lineWidth = 1;
			ctx.strokeStyle = 'black';
			ctx.font = "16px Century gothic";
			ctx.strokeText("JavaScript", 110, 190);
/*Autor: Cristian Racedo*/
