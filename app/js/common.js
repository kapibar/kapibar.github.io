var 
	canv = document.getElementById("canv"),
	ctx  = canv.getContext("2d");
// ctx.fillStyle = "green";
// ctx.strokeStyle = "green";
// ctx.fillRect(25, 25, 100, 100);
// ctx.clearRect(45, 45, 60, 60);
// ctx.strokeRect(50, 50, 50, 50);

ctx.beginPath();
ctx.strokeStyle = 'green';
ctx.moveTo(50, 50);
ctx.lineTo(25, 100);
ctx.lineTo(75, 100);
// ctx.closePath();
ctx.fill();

ctx.beginPath();
ctx.strokeStyle = 'blue';
ctx.moveTo(125, 50);
ctx.lineTo(100, 100);
ctx.lineTo(150, 100);
ctx.closePath();
ctx.moveTo(175, 100);
ctx.lineTo(200, 100);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(225, 50);
ctx.lineTo(200, 100);
ctx.stroke();

// ctx.arc(75, 75, 50, 0, Math.PI*2, true);
// ctx.moveTo(110, 75);
// ctx.arc(75, 75, 35, 0, Math.PI, false);
// ctx.moveTo(65, 65);
// ctx.arc(60, 65, 5, 0, Math.PI*2, false);
// ctx.stroke();


