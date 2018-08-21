$(function() {

	$('#my-menu').mmenu({
		extensions: ['widescreen', 'theme-black', 'effect-menu-slide', 'pagedim-black', 'position-right'],
		navbar: {
			title: '<img src="img/logo.png" alt="name img">'
		}		
	});

	var api = $('#my-menu').data('mmenu');
	api.bind('opened', function() {
		$('.hamburger').addClass('is-active');
	}).bind('closed', function() {
		$('.hamburger').removeClass('is-active');
	});

});