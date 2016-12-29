$(".button-collapse").sideNav();

$(document).ready(function(){
	$('.carousel').carousel({
		dist:-25,
		shift:0,
		padding:20,
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
	$( "#"+this.id+ "-item" ).css('background-image', this.url);
})

