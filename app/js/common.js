var 
	canv = document.getElementById("canvas"),
	ctx  = canv.getContext("2d");

var canv = document.getElementById('canvas'),
	ctx  = canv.getContext('2d');

	canv.width = window.innerWidth;
	canv.height = window.innerHeight;

	var 
	   	x = 50,
	    isMouseDown = false,
	    coords = [],
	    radius = 5;	     
	   

	   canv.addEventListener('mousedown', function() {
	   		isMouseDown = true;
	   });

	   canv.addEventListener('mouseup', function() {
	  		isMouseDown = false;
	  		ctx.beginPath();

	  		coords.push('mouseup');
	   });

	   ctx.lineWidth = radius * 2;

	   canv.addEventListener("mousemove", function(e) {
	   
	   	if (isMouseDown) {
	   		coords.push([e.clientX, e.clientY]);

	   		ctx.lineTo(e.clientX, e.clientY);
	   		ctx.stroke();

	   		ctx.beginPath();
	   		ctx.arc(e.clientX, e.clientY, radius, 0, Math.PI * 2);
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

	   function replay() {
	   		var
	   			timer = setInterval( function() {
	   				if( !coords.length ){
	   					clearInterval(timer);
	   					ctx.beginPath();
	   					return;
	   				}

	   				var
	   					crd = coords.shift(), 
	   					e = {
	   						clientX: crd['0'],
	   						clientY: crd["1"]
	   					};

	   					ctx.lineTo(e.clientX, e.clientY);
	   					ctx.stroke();

	   					ctx.beginPath();
	   					ctx.arc(e.clientX, e.clientY, radius, 0, Math.PI * 2);
	  	 				ctx.fill();

	  	 				ctx.beginPath();
	  	 				ctx.moveTo(e.clientX, e.clientY);
	   			}, 30);
	   		// coords = JSON.parse(localStorage.getItem('coords'));
	   		
	   }

	   document.addEventListener('keydown', function(e) {
	   			console.log(e.keyCode); // for define a button
	   		if(e.keyCode == 83) {	  
	   			save();
	   			console.log("saved");
	   		}
	  	 	if(e.keyCode == 82) {
	   
	 	  		replay();
	 	  	}
	   		if(e.keyCode == 67) {
	   			// clear
	   			clear();
	   		}
	   });
