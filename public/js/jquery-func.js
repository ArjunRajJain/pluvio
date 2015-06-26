$(document).ready(function(){

    //=================================== Totop  ===================================//
		$().UItoTop({ 		
			scrollSpeed:500,
			easingType:'linear'
		});

	//=================================== Nav Responsive =====================================//
	    $('#menu').tinyNav({
	       active: 'selected'
	    });
	    
	  //=================================== Nav Superfish ======================================//
	  jQuery(document).ready(function() {
	    jQuery('ul.sf-menu').superfish();
	  });	

     //=================================== Accordion  =================================// 
    $('.accordion-container').hide(); 
    $('.accordion-trigger:first').addClass('active').next().show();
    $('.accordion-trigger').click(function(){
      if( $(this).next().is(':hidden') ) { 
        $('.accordion-trigger').removeClass('active').next().slideUp();
        $(this).toggleClass('active').next().slideDown();
      }
      return false;
    });

	 //=================================== Works Carousel  ===================================// 
	  $(".ch-grid").owlCarousel({
	      autoPlay: 3000, 
	      items : 3,
	      navigation: false,
	      navigationText: true, 
	      itemsDesktop : [1199,3],
	      itemsDesktopSmall : [1000,2],
	      itemsMobile : [560,1],
	      stopOnHover : true
	  });

	  //=================================== Gallery Carousel  ===================================// 
	  $(".carousel_singlepost").owlCarousel({
	      items : 1,
	      navigation: true,
	      navigationText: true, 
	      singleItem: true,
	      stopOnHover : true,
	      autoPlay: 2000
	  });
  
	  //=================================== Testimonials Carousel  ===================================// 
	  $(".testimonials").owlCarousel({
	      autoPlay: 3500, 
	      items : 1,
	      navigation: true,
	      navigationText: true, 
	      singleItem: true,
	      stopOnHover : true
	  });

	  //=================================== Flikr Feed  ========================================//
     $('#flickr').jflickrfeed({
		 limit: 8, //Number of images to be displayed
		 qstrings: {
			id: '36587311@N08'//Change this to any Flickr Set ID as you prefer.
		 },
		 itemTemplate: '<li><a href="{{image_b}}" class="fancybox"><img src="{{image_s}}" alt="{{title}}" /></a></li>'
	 });

	 $('#flickr-aside').jflickrfeed({
		limit: 10, //Number of images to be displayed
		qstrings: {
			id: '36587311@N08'//Change this to any Flickr Set ID as you prefer.
		},
		itemTemplate: '<li><a href="{{image_b}}" class="fancybox"><img src="{{image_s}}" alt="{{title}}" /></a></li>'
	 });

	//=================================== Lightbox  ===================================//	
	$('.fancybox').fancybox({
		'overlayOpacity'	:  0.7,
		'overlayColor'		: '#000000',
		'transitionIn'		: 'elastic',
		'transitionOut'		: 'elastic',
    	'easingIn'			: 'easeOutBack',
    	'easingOut'      	: 'easeInBack',
		'speedIn'         	: '700',
		'centerOnScroll'	: true,
		'titlePosition'     : 'over'
	});
    
	//=================================== Hover Effects =====================================//
	$('.social_icon a').hover(function() {
		$(this).toggleClass('animated tada');
	});
	$('.specialize a i').hover(function() {
		$(this).toggleClass('animated wobble');
	});
	$('.contact_us .btn-default').hover(function() {
		$(this).toggleClass('animated pulse');
	});

	//=================================== Tooltips =====================================//

	if( $.fn.tooltip() ) {
		$('[class="tooltip_hover"]').tooltip();
	}  

	//=================================== Scrollbar  ======================================//

	$(".info_hover").mCustomScrollbar({
        scrollButtons:{
			enable:true
		},
		theme:"dark-2"
    });

    //=============================  Nice scroll bar Body =================================//
      $("html").niceScroll({
        background:"transparent",
        cursorcolor:"#555",
        cursorwidth:8, 
        boxzoom:true, 
        autohidemode:false,
        zindex:99999,
        cursorborder:"0",
      });

	//=================================== Subtmit Form  ====================================//
	  $('.form-contact').submit(function(event) {  
	    event.preventDefault();  
	    var url = $(this).attr('action');  
	    var datos = $(this).serialize();  
	    $.get(url, datos, function(resultado) {  
	      $('.result').html(resultado);  
	    });  
	  });  

  //=================================== Video Bg =====================================//
  // Use Modernizr to detect for touch devices, 
  // which don't support autoplay and may have less bandwidth, 
  // so just give them the poster images instead
  var screenIndex = 1,
  numScreens = $('.screen').length,
  isTransitioning = false,
  transitionDur = 1000,
  BV,
  videoPlayer,
  isTouch = Modernizr.touch,
  $bigImage = $('.big-image'),
   $window = $(window);
         
    if (!isTouch) {
    // initialize BigVideo
    /*BV = new $.BigVideo({forceAutoplay:isTouch});
    BV.init();
    showVideo();
                
    BV.getPlayer().addEvent('loadeddata', function() {
     onVideoLoaded();
    });*/

    // adjust image positioning so it lines up with video
    /*$bigImage
     .css('position','relative')
     .imagesLoaded(adjustImagePositioning);
     // and on window resize
     $window.on('resize', adjustImagePositioning);*/
    }
            
  // Next button click goes to next div
  $('#next-btn').on('click', function(e) {
    e.preventDefault();
    if (!isTransitioning) {
      next();
    }
  });
/*
  function showVideo() {
    BV.show($('#screen-'+screenIndex).attr('data-video'),{ambient:true});
  }*/

  function next() {
    isTransitioning = true;
            
    // update video index, reset image opacity if starting over
    if (screenIndex === numScreens) {
      $bigImage.css('opacity',1);
        screenIndex = 1;
    } else {
      screenIndex++;
            }
    
    if (!isTouch) {
      $('#big-video-wrap').transit({'left':'-100%'},transitionDur)
    }
                    
    (Modernizr.csstransitions)?
      $('.wrapper').transit(
        {'left':'-'+(100*(screenIndex-1))+'%'},
          transitionDur,
          onTransitionComplete):
          onTransitionComplete();
    }

    function onVideoLoaded() {
      $('#screen-'+screenIndex).find('.big-image').transit({'opacity':0},500)
    }

    function onTransitionComplete() {
      isTransitioning = false;
      if (!isTouch) {
        $('#big-video-wrap').css('left',0);
          showVideo();
          }
      }

    function adjustImagePositioning() {
      $bigImage.each(function(){
        var $img = $(this),
        img = new Image();

        img.src = $img.attr('src');

        var windowWidth = $window.width(),
        windowHeight = $window.height(),
        r_w = windowHeight / windowWidth,
        i_w = img.width,
        i_h = img.height,
        r_i = i_h / i_w,
        new_w, new_h, new_left, new_top;

        if( r_w > r_i ) {
          new_h   = windowHeight;
          new_w   = windowHeight / r_i;
        }
        else {
          new_h   = windowWidth * r_i;
          new_w   = windowWidth;
        }

        $img.css({
          width   : new_w,
          height  : new_h,
          left    : ( windowWidth - new_w ) / 2,
          top     : ( windowHeight - new_h ) / 2
        })

      });
  }
  
});
	

