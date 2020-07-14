/*Maquetado Avanzado*/
	//Actualizar Progress al cambiar Input
		var progressInput = document.querySelector('#progressInput');
		var progressValue = document.querySelector('#progressValue')
		progressInput.addEventListener(
			'change', () => progressValue.value = progressInput.value
		)
	//Canvas
		var ctx = document.querySelector('#jsCanvas').getContext('2d');
		ctx.fillStyle = "tomato";
		ctx.fillRect(10,10,100,50);
		ctx.arc(100, 75, 20, 0, 2*Math.PI);
		ctx.stroke();
		ctx.moveTo(200, 0);
		ctx.lineTo(0,200);
		ctx.lineTo(50,50);
		ctx.stroke();
/*Autor: Cristian Racedo*/
