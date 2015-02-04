//Problem: User when clicking on image goes to a dead end
//Solution: Create an overlay with the large image - Lightbox
$(document).ready(function() {
	
	//Capture click event on image
	$('#imageGallery a').click(function( event ) {
		
		//Prevent new page from opening on click
		event.preventDefault();
		
		//Store image URL for overlay use
		var $clickedImageURL = $(this).children().attr('src');

		//Add image to overlay div
		$('#overlay').html('<img src=\'' + $clickedImageURL + '\'><');
		
		//Fade in overlay
		$('#overlay').css('display', 'inline').fadeIn('fast');
	});
});

