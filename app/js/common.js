$(function() {

	var canv = document.getElementById('canvas'),
	    ctx  = canv.getContext('2d');

	    canv.width = window.innerWidth;
	    canv.height = window.innerHeight;

	    var 
	    	x = 50,
	    	isMouseDown = false,
	    	coords = [];
	    
	    // setInterval(function() {
	    // 	ctx.fillStyle = "white";
	    // 	ctx.fillRect(0, 0, canv.width, canv.height);

	    	// ctx.fillStyle = 'magenta';
	    	// ctx.fillRect(x, 50, 300, 200);
			
	    	// ctx.strokeStyle = 'red';
	    	// ctx.strokeRect(300, 300, 200, 200);
	    	// ctx.lineWidth = 10;

	    	// ctx.arc(canv.width / 2, canv.height / 2, 100, 0, Math.PI*2);
	    	// ctx.fill();

	    	// var 
	    	// 	grad = ctx.createLinearGradient(0, 0, 500, 0);

	    	// grad.addColorStop('0', 'magenta');
	    	// grad.addColorStop('.50', 'blue');
	    	// grad.addColorStop('1', 'red');

	    	// ctx.fillStyle = grad;
	    	// ctx.textAlign = "center";
	    	// ctx.font = "bold 30px Georgia";
	    	// ctx.fillText("Hello world", canv.width / 2, 50);
	    	// ctx.fillText("Hello world", 50, 70);

	    	// ctx.scale(2, 2);
	    	// ctx.rotate(.2);
	    	// ctx.rotate(3 * Math.PI/180);
	    	// ctx.beginPath();
	    	// ctx.moveTo(50, 50);
	    	// ctx.lineTo(25, 100);
	    	// ctx.lineTo(75, 100);
	    	// ctx.lineTo(50, 50);
	    	// ctx.closePath();
	    	// ctx.stroke();

	    	
	    // }, 10);

	   canv.addEventListener('mousedown', function() {
	   	isMouseDown = true;
	   	ctx.beginPath();
	   });

	   canv.addEventListener('mouseup', function() {
	   	isMouseDown = false;
	   });

	   ctx.lineWidth = 10 * 2;

	   canv.addEventListener("mousemove", function(e) {
	   
	   	if (isMouseDown) {
	   		coords.push([e.clientX, e.clientY]);
	   		ctx.lineTo(e.clientX, e.clientY);
	   		ctx.stroke();
	   		ctx.beginPath();
	   		ctx.arc(e.clientX, e.clientY, 10, 0, Math.PI * 2);
	  	 	ctx.fill();
	  	 	ctx.beginPath();
	  	 	ctx.moveTo(e.clientX, e.clientY);
	   	}
	   	
	   });

	   function save() {
	   	localStorage.setItem('coords', JSON.stringify(coords));
	   }

	   function clear() {
	   		ctx.fillStyle = "white";
	   		ctx.fillRect(0, 0, canv.width, canv.height);

	   		ctx.beginPath();
	   		ctx.fillStyle = "black";
	   }

	   document.addEventListener('keydown', function(e) {
	   	// console.log(e.keyCode); // for define a button
	   	if(e.keyCode == 83) {
	   		// save
	   		save();
	   	}
	   	if(e.keyCode == 82) {
	   		// replay
	   		// replay();
	   	}
	   	if(e.keyCode == 67) {
	   		// clear
	   		clear();
	   	}
	   });



	// $('#my-menu').mmenu({
	// 	extensions: ['widescreen', 'theme-black', 'effect-menu-slide', 'pagedim-black', 'position-right'],
	// 	navbar: {
	// 		title: '<img src="img/logo.png" alt="name img">'
	// 	}		
	// });

	// var api = $('#my-menu').data('mmenu');
	// api.bind('opened', function() {
	// 	$('.hamburger').addClass('is-active');
	// }).bind('closed', function() {
	// 	$('.hamburger').removeClass('is-active');
	// });

});