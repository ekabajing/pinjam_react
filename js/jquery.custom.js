jQuery(document).ready(function(){


	// Slider
	//jQuery(window).on('load', function(){
		
		if( jQuery('.mainform-page').length ){
			
			jQuery('.mainform-page').flexslider({
				animation : 'slide',
				animationSpeed : 0,
				animationLoop : false,
				controlNav: false,
				directionNav: false,
				slideshow : false,
				touch : false,
				smoothHeight : true
				//prevText: '<i class="fa fa-caret-left"></i> &nbsp; Pilih Kategori Lain',
				//nextText: 'Lanjutkan &nbsp; <i class="fa fa-caret-right"></i>'
			});

			var formslider = jQuery('.mainform-page').data('flexslider');
			/*
			var animationSpeed = formslider.vars.animationSpeed; 	//save animation speed to reset later
			formslider.vars.animationSpeed = 0;
			formslider.vars.animationSpeed = animationSpeed;
			*/

			jQuery('.mainform-page').on('click', 'a', function(e){
				e.preventDefault();

				var page = parseInt(jQuery(this).attr('page'));
				/*console.log(formslider);*/
				formslider.flexAnimate( page );
			});
		}

		if( jQuery('.big-slider').length ){
			
			jQuery('.big-slider').flexslider({
				animation : 'fade',
				animationSpeed: 1000,
				directionNav: false,
				smoothHeight : true,
				animationLoop : true,
				slideshow : true,
				start : function(){
					jQuery('.big-slider .flex-control-nav').addClass('container');
				}
			});
		}

		if( jQuery('.histori-list').length ){
			
			jQuery('.histori-list').flexslider({
				animation : 'slide',
				animationSpeed: 1000,
				controlNav: false,
				smoothHeight : true,
				animationLoop : true,
				slideshow : true,
				nextText : '<span class="fa fa-angle-right"></span>',
				prevText : '<span class="fa fa-angle-left"></span>'
			});
		}

		if( $('#insideTab').length ){

			//$('#insideTab').tabCollapse({
			//	tabsClass: 'hidden-ms hidden-xs',
		    	//accordionClass: 'visible-ms visible-xs'
			//});
		}
	//});

	// Mobile nav
	jQuery('.mobile-nav').on('click', function(e){
		e.preventDefault();

		jQuery('#main-nav').slideToggle();
	});

	jQuery(window).resize(function(){

		if( jQuery(window).width() > 768 ){

			jQuery('#main-nav.nav').css('display', 'block');
		}else{

			jQuery('#main-nav.nav').css('display', 'none');
		}

	});
	jQuery(function() {
	  jQuery('a.smoothscroll[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = jQuery(this.hash);
	      target = target.length ? target : jQuery('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        jQuery('html,body').animate({
	          scrollTop: target.offset().top
	        }, 1000);
	        return false;
	      }
	    }
	  });
	});
	jQuery(".toggle-menu").click(function(e){
		e.preventDefault();
		var offset=jQuery(this).offset();
		var wwidth=jQuery( window ).width();
		var wheight=jQuery( window ).height();
		console.log(offset);
		console.log(offset.left);
		jQuery(".body-overlay").css('left',(offset.left*-1)+137);
		jQuery(".body-overlay").css('top',offset.top*-1);
		jQuery(".body-overlay").css('width',wwidth);
		jQuery(".body-overlay").css('height',wheight);
	});
	jQuery(".body-overlay").click(function(){
		jQuery(".toggle-menu").click();
		jQuery(".body-overlay").css('width',0);
		jQuery(".body-overlay").css('height',0);
	});
	jQuery(window).scroll(function(){
		if (jQuery(this).scrollTop() > 100) {
			jQuery('#scrollToTop').fadeIn();
		} else {
			jQuery('#scrollToTop').fadeOut();
		}
	});
	
	//Click event to scroll to top
	jQuery('#scrollToTop').click(function(){
		jQuery('html, body').animate({scrollTop : 0},800);
		return false;
	});
});