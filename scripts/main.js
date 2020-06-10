// escuchar el evento click del elemento #menu y agregar la clase .mostrar al elemento menu
var mostrar = true;
document.querySelector('#menu').addEventListener(
		'click', () => {
			document.querySelector('.menu').classList.toggle('mostrar');
			if (mostrar){
				document.querySelector('#menu').innerHTML = 'Cerrar';
				mostrar = false;
			}else{
				document.querySelector('#menu').innerHTML = 'Menu Principal'
				mostrar = true;
			}
		}
	)
