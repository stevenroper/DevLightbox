//Problem: User when clicking on image goes to a dead end
//Solution: Create an overlay with the large image - Lightbox
$(document).ready(function() {
	
	//Capture click event on image
	$('#imageGallery a').click(function( event ) {
		
		//Prevent new page from opening on click
		event.preventDefault();
		
		//Store image URL & image caption for overlay use
		var $clickedImageURL = $(this).children().attr('src');
		var $clickedImageCaption = $(this).children().attr('alt');

		//Add image & caption to overlay div
		$('#overlay').html('<img src=\'' + $clickedImageURL + '\'>' + '<p>' + $clickedImageCaption + '</p>');
		
		//Fade in overlay
		$('#overlay').fadeIn('fast');
	});

	//Hide overlay once user clicks on overlay
	$('#overlay').click( function() {
		$('#overlay').fadeOut('fast');
	});
});

