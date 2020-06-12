var hiceclick = true;
document.querySelector('#menu').addEventListener(
		'click', () => {
			document.querySelector('.menu').classList.toggle('mostrar');
			if (hiceclick){
				document.querySelector('#menu').innerHTML = '&times;'
				hiceclick = false;
			} else {
				document.querySelector('#menu').innerHTML = '&equiv;'
				hiceclick = true;
}	}	);