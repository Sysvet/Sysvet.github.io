//function to show hidden scrollToTop button
$(document).ready(function(){
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});

	//function to scroll the page to the top
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
});

//function to scroll to the specified id
function scrollToId(inId){
	var id = "#";
	id += inId;
	$('html,body').animate({
		scrollTop: $(id).offset().top -60
	}, 1000);
}

