$(document).ready(function(){
 	$(".navbutton").click(function(){
    	$(".navmenu").toggleClass("navmenu-open"), $(".navbutton").toggleClass("navbutton-open");
  	});
});
$(document).ready(function() {
    $('a[href^="#top"]').click(function(){
        $('html, body').animate({scrollTop:0}, 'slow');
        return false;
    });
});
