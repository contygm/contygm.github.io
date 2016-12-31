$(".button-collapse").sideNav();

$(document).ready(function(){
	$('.carousel').carousel({
		dist:-25,
		shift:0,
		padding:20
	});

	$(window).scroll( function(){
    
       
        $('.fadeInBlock').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* Adjust the "200" to either have a delay or that the content starts fading a bit before you reach it  */
            bottom_of_window = bottom_of_window + 200;  
          
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},1000);
                    
            }
        }); 
    
    });
});

$( ".info-button" ).click(function() {
	$( "#"+this.id+ "-title-face").hide();
	$( "#"+this.id+ "-info-face").fadeIn("slow");
	$( "#"+this.id+ "-item").css('background-image', 'none');
	$( "#"+this.id+ "-item" ).addClass( "grey" );
});

$(".back-button").click(function(){
	$( "#"+this.id+ "-title-face").fadeIn("slow");
	$( "#"+this.id+ "-info-face").hide();
	$( "#"+this.id+ "-item").removeClass( "grey" );

	var url = $(this).attr("url");
	$( "#"+this.id+ "-item" ).css('background-image', url);

})

//$(".button-collapse").sideNav();

$('.button-collapse').sideNav({
    closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
});

