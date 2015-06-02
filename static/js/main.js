$(document).ready(main);
 
var contador = 1,
	myEl = document.getElementsByClassName("Mainmenu-itemLink");
 
function main () {
	$('.menu_bar').click(function(){
		if (contador == 1) {
			$('nav').animate({
				left: '0'
			});
			contador = 0;
		} else {
			contador = 1;
			$('nav').animate({
				left: '-100%'
			});
		}
	});

	if (contador = 1){
		myEl.click({
			$('nav').animate({
				left: '-100%'
			});
		})
	}
}


/*$(document).ready(main);

var contador = 1;

function main () {
	$('.menu_bar').click(function(){
		if (contador == 1) {
			$('nav').animate({
				left: '0'
			});  //fin de la instruccion if
			contador = 0;
		} else if {
			contador = 0;
			$('nav').animate({
				left: '-100%'
			});  //fin de la instruccion else if
		} else {
			$('.Mainmenu-itemLink').click(function(){
					$('nav').animate({
						left: '-100%'
					});
 						//modificar este valor si no queda
			});
		} // fin del else
	}); //fin del main menu_bar
}*/