$(document).ready(function(){
	//mouse-hover
    $('.mod-slide0 .element').hover(function() {
		$(this).addClass('element-on');
	},
	function() {
		$(this).removeClass('element-on');
	})
	 //mouse-hover
    $('.mod-slide0 .element0').hover(function() {
	   $('.txt',$(this)).animate({top:'253px'},150)
	},
	function() {
		$('.txt',$(this)).animate({top:'293px'},150)
	})
		
	//mouse-hover
    $('.mod-slide0 .element1, .mod-slide0 .element2, .mod-slide0 .element3, .mod-slide0 .element4, .mod-slide0 .element5, .mod-slide0 .element6, .mod-slide0 .element7, .mod-slide0 .element8, .mod-slide0 .element9, .mod-slide0 .element10, .mod-slide0 .element11').hover(function() {
	   $('.txt',$(this)).animate({top:'106px'},150)
	},
	function() {
		$('.txt',$(this)).animate({top:'146px'},150)
	})
	$('.box-brand0 .list-con3').each(function(){
		$('li',$(this)).each(function(i){
			$(this).addClass('li'+i);
		})
	})	
	
	//mask layer
	var bodyHeight = $('.wrap').height();//500 is for preview
	$('.mask').css('height',bodyHeight);
	$('.mask, .mod-layer0, .layer .btn-close').click(function(){ //mod-layer0 or mod-layer1 or mod-layer?
		$('.layer').fadeOut();
		$('.mask').fadeOut();
		$('.mod-layer0').fadeOut();
	})
	$('.layer').click(function(e){
		e.stopPropagation();
	})
	
	$('.box-video0').each(function(){
		var $this = $(this);
		$('.list-con2 li',$this).each(function(i){
			$('a',$(this)).click(function(){
				$('.layer0 .mod-video0').empty()				
				/*.html($('.con-container:eq('+i+')',$this).html());*/
				$('.mod-layer0').css('top',$(window).scrollTop());
				$('.mask').show(function(){
					$('.mod-layer0').show(function(){
						$('.layer0').fadeIn(function(){
							$('.layer0 .mod-video0').html($('.con-container:eq('+i+')',$this).html());
						});
					});
				})
			})
		})
	})
	
})