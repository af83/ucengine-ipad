(function(){
	var eltFocus = "";
	var navScroller = new iScroll('chatScroller');
  var listWidgets = new iScroll('listWidgets');

  document.addEventListener('touchmove', function(e){ e.preventDefault(); }, false);

	$('textarea').bind('focus', function(e) {
		$('body').addClass('focus');
	});
	$('textarea').bind('blur', function(e) {
		$('body').removeClass('focus');
		$('body').scrollTop(0);
	});
	
	// bind all buttons for fullscreen mode
	$('#listWidgets article header ul li a').bind('click', function(e) {
		e.preventDefault();
		
		eltFocus = $(this).parents('article').attr('id');
		$('body').removeClass('video sharing whiteboard');
		$('textarea').blur();
		slideScreen();
	});
	
	function slideScreen() {
		$('body').addClass('loading');
		$('.page').animate(
			{'left': '-1024px'},
			{
				queue: 			false,
				duration: 	300,
				easing: 		'swing',
				complete: function(){ showFullScreen(); }
			}
		);
	}
	
	function showFullScreen() {
		navScroller.destroy();
		listWidgets.destroy();
		$('.page').delay(10000).css({'left': '0px'});
		$('body').delay(10000).addClass(eltFocus).removeClass('loading');
	}
	
	
	/* ---- */
	/* Back */
	/* ---- */
	// bind back button for exit fullscreen mode
	$('body > header > ul.left li a').bind('click', function(e) {
		e.preventDefault();
		slideBackScreen();
		eltFocus = "";
	});
	
	function slideBackScreen() {
		$('body').addClass('loading');
		$('.page').animate(
			{'left': '1024px'},
			{
				queue: 			false,
				duration: 	300,
				easing: 		'swing',
				complete: function(){ showHomeScreen(); }
			}
		);
	}
	
	function showHomeScreen() {
		$('.page').delay(10000).css({'left': '0px'});
		$('body').delay(10000).removeClass('video sharing whiteboard').removeClass('loading');
		navScroller = new iScroll('chatScroller');
	  listWidgets = new iScroll('listWidgets');
	}
}())