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

//Hide on click <li>
	$('.Mainmenu-itemLink').click(function(){
		$('nav').animate({
			left: '-100%'
		});
	});
}

