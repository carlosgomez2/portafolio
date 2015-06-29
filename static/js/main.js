$(document).ready(main);
 
var contador = 1,
	menuLink = document.getElementsByClassName("Mainmenu-itemLink");
	headerImage = document.getElementsByClassName("Header-image");
 
function main () {

//Hide|Show Menu Bar on button Menu
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

//FadeIn Header Image
	$('.Header-image').fadeIn('slow');


}

