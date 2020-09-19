$(function(){
	 $(window).scroll(function(){
        var sc = $(this).scrollTop();
        if(sc > 50){  // Show Sticky Navbar
            $('header').addClass('sticky');
        }
        else {
            $('header').removeClass('sticky');
        }
        
       
        
    });
	
	$("section.home").height($(window).height());
	

});