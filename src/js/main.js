import $ from 'jquery';
import slides from './slides.js';

$(document).ready(function(){
	
	$(window).bind("keydown", function(e) {
		
		if (e.which == 32 || e.which == 39) {
			
			var currentUrl = $(location).attr('pathname');
			var currentSlide = 0;
			
			alert(currentUrl);
			alert(currentSlide);


		} else if (e.which == 37) {

			alert('BACK');

		} else {

			return;

		}

	});

});