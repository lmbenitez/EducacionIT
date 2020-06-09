//Automatizacion Elemento Progress
	var miProgreso = document.querySelector('#progressBar');
	var ingresar = document.querySelector('#miValor');

	function ActualizarProgreso(){
		miProgreso.value = ingresar.value;
	}
//Manipulacion Elemento Video
	var miVideo = document.querySelector('#miVideo');
	var reproducir = document.querySelector('#reproducir');
	var alternar = true;

	function Reproducir(){
			if (alternar) {
				miVideo.play();
				reproducir.innerHTML = 'click to Pause';
				reproducir.style.color = '#eee';
				reproducir.style.backgroundColor = 'darkslateblue';
				alternar = false;
			} else {
				miVideo.pause();
				reproducir.innerHTML = 'click to Play';
				reproducir.style.color = '#ccc';
				reproducir.style.backgroundColor = 'slateblue';
				alternar = true;
			}
		}
//Dibujo simple en Canvas
	var canvas = document.querySelector('#lienzo');
	var ctx = canvas.getContext('2d');
	//Rectangulo a X=10 Y=10 con width=50
		ctx.fillStyle = 'rgb(200, 0, 0)';
        ctx.fillRect(10, 10, 50, 50);
    //Rectangulo a X=30 Y=30 con width=50
        ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
        ctx.fillRect(30, 30, 50, 50);
//Manipulacion Input [type="range"]
	var rango = document.querySelector('#rango');
	var valorRango = document.querySelector('#valorRango');

	rango.addEventListener(
		'change', 
		() => valorRango.innerHTML = rango.value
	);
//Manipulacion classList (menu)
	document.querySelector('#menu').addEventListener(
		'click', () => {
			document.querySelector('#menu').classList.toggle('presionado');
			document.querySelector('.menu').classList.toggle('presionado')
		} )