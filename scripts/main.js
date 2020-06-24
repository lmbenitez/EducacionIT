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
	var campos = ['nombre', 'email', 'tel', 'consulta']
	campos.map( campo =>	(document.querySelector('#success').addEventListener(
		'click', () => {
			if (document.forms['contactForm'][campo].value == ''){
				alert(`debe ingresar un ${campo}`)
}	}	)	)	);