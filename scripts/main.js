//Menu desplegable
	var mostrar = true;
	document.querySelector('#menu').addEventListener(
		'click', () => {
			document.querySelector('.menu').classList.toggle('mostrar');
			if (mostrar){
				document.querySelector('#menu').innerHTML = '&times;';
				mostrar = false;
			} else {
				document.querySelector('#menu').innerHTML = '&equiv;'
				mostrar = true;
	}	}	);

//Campos de Formularios
	document.querySelector('#success').addEventListener(
		'click', () => {
			if (document.forms['contactForm']['nombre'].value == ''){
				alert('debe ingresar un nombre')
			}
		}
	)