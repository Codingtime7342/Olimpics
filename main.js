canvas = document.getElementById("myCanvas");

ctx = canvas.getContext("2d");

color = "Blue";
//L_W means line_width
L_W = 4;

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = L_W;
ctx.arc(80, 300,50,0,2*Math.PI);
ctx.stroke();

color = "Black";
//L_W means line_width
L_W = 4;

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = L_W;
ctx.arc(200,300,50,0,2*Math.PI);
ctx.stroke();


color = "Red";
//L_W means line_width
L_W = 4;

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = L_W;
ctx.arc(320,300,50,0,2*Math.PI);
ctx.stroke();


color = "Yellow";
//L_W means line_width
L_W = 4;

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = L_W;
ctx.arc(130,350,50,0,2*Math.PI);
ctx.stroke();


color = "Green";
//L_W means line_width
L_W = 4;

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = L_W;
ctx.arc(250,350,50,0,2*Math.PI);
ctx.stroke();


