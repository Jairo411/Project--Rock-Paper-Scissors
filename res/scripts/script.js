var canvas = document.getElementById("viewport");
var context = canvas.getContext("2d");

context.beginPath();
context.arc(100,300,40,0, 2 * Math.PI);
context.stroke();