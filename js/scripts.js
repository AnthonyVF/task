$(function() {

	// Set the class to be added to body to desktop one
	var scrollClass = 'scrolledDesktop';

	// This containes functions that are just for mobile
	if($(window).width() < 768){

	// Change the body class on scroll the mobile one
		scrollClass = 'scrolled';

	// Scroll back to the top of the page
		$('#scrollTop').click(function(e){
			e.preventDefault();
			$('html,body').animate({scrollTop: $('body').offset().top},'slow');	
		});
	}

	// This adds a class to the body to say the user has scrolled
	// past a certain point
	$(window).scroll(function(){
			var h = $(window).height() - 300;
		    	if($(this).scrollTop()>=h){
		    		// Add class when scroll point has been gone past
		        	$('body').addClass(scrollClass);
				}else if($(this).scrollTop() < h){
		    		// reset class attribute on body to remove any classes				
		        	$('body').attr('class', '');
				}
		});

	//Shows the filters uses transitions for lite css animation
	$('.filterBtn').click(function(e){
		 e.preventDefault();
		$('.filters, .filterBtn').toggleClass('open');
	});

	//Show and hide the filters
	$('#showFilters').click(function(e){
		 e.preventDefault();
		 $('body').toggleClass('showFilters');
	});


	//This sets the page back to the top when going to the details page
	$('.phone-full-details').click(function(){
		$('html,body').animate({scrollTop: $('body').offset().top}, 0);	
	});

	// Opens light box
	$('.phone-image').click(function(e){
		 e.preventDefault();
		 $('body').toggleClass('lightbox');
	});

	// Different click events with in the lightbox
	$('#lightbox a').click(function(e){
		 e.preventDefault();
		var $this = $(this);
		// if closes the lightbox
		if($this.hasClass('close')){
		 	$('body').removeClass('lightbox');		
		}else{ //else changes the main images src attribute
			var src = $this.find('img').attr('src');
			$('#lightbox .main img').attr('src', src);	
		}
	});

	// Open the overview and features are on the details page
	$('.details-area a').click(function(e){
		 e.preventDefault();
		$('.area').removeClass('open');
		$(this).parent().parent().toggleClass('open');
	});

});