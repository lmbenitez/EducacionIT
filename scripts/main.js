/*Maquetado Avanzado*/
	//Actualizar Progress con Input
		var progressInput = document.querySelector('#progressInput');
		var progressValue = document.querySelector('#progressValue')
		progressInput.addEventListener(
			'change', () => progressValue.value = progressInput.value
		)
	//Canvas
		var ctx = document.querySelector('#jsCanvas').getContext('2d');
		//Rectangulo Rojo
			ctx.fillStyle = "#c30";//Relleno
			ctx.fillRect(10,10,100,100); //(X,Y,W,H)
		//Circulo AzulCeleste
			ctx.fillStyle = "rgba(0,80,120,.5)"//Relleno
			ctx.arc(110, 110, 50, 50, 100); //(X,Y,RX,RY,ARC)
			ctx.fill();//Habilita Relleno
		//Linea Diagonal Verde
			ctx.beginPath();//Nuevo Trayecto
				ctx.moveTo(200, 0); //Posicion Inicial lapiz (X,Y)
				ctx.lineTo(0,200); //Dibujo de Linea (X,Y)
				ctx.strokeStyle = 'darkgreen'; //Color de linea
				ctx.lineWidth = 10; //Grosor de Linea
				ctx.stroke(); //Habilita Grosor
			ctx.closePath(); //Cierre de Trayecto
		//Texto sin Relleno
			ctx.lineWidth = 1;//Grosor
			ctx.strokeStyle = 'black';//Color de Linea
			ctx.font = "16px Century gothic"; //Tipografia
			ctx.strokeText("JavaScript", 110, 190); //(Texto,X,Y)
	//Menu desplegable
		var menuAbierto = true;
		document.querySelector('#menu').addEventListener(
			'click', () => {
				document.querySelector('.menu').classList.toggle('show');
				if(menuAbierto){
					document.querySelector('#menu').innerHTML = '&times;'
					menuAbierto = false;
				} else {
					document.querySelector('#menu').innerHTML = '&equiv;'
					menuAbierto = true;
				}
			}
		)
/*Autor: Cristian Racedo*/
