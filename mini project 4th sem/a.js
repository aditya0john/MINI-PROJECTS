const tool = document.getElementById('toolbar');
const ctx = document.getElementById('drawing-board').getContext('2d');
window.addEventListener('resize',resize);
resize();
let mousePos ={
	x:0,
	y:0
}

window.addEventListener('mousemove',draw);
window.addEventListener('mousedown',mousePosition);
window.addEventListener('mouseenter',mousePosition);

function mousePosition(e){
	mousePos.x=e.clientX-90;
	mousePos.y=e.clientY;
}

function resize(){
	ctx.canvas.width=window.innerWidth;
	ctx.canvas.height=window.innerHeight;
}
function line(){
	var c=document.getElementById("drawing-board");
	var ctx =c.getContext('2d');
	ctx.moveTo(0,0);
	ctx.lineTo(200,200);
	ctx.stroke();
}
function circle(){
	var c=document.getElementById("drawing-board");
	var ctx =c.getContext('2d');
	ctx.beginPath();
	ctx.arc(90,60,50,0,2*Math.PI);
	ctx.stroke();
}
function draw(e){
	if(e.buttons!==1)
		return;
	ctx.beginPath();
	ctx.linecap='round';

	tool.addEventListener('change',e =>{
	if(e.target.id === 'stroke'){
		ctx.strokeStyle = e.target.value;
	}
	if(e.target.id === 'linewidth'){
		linewidth = e.target.value;
	}
});
	ctx.moveTo(mousePos.x,mousePos.y);
	mousePosition(e);
	ctx.lineTo(mousePos.x,mousePos.y);
	ctx.stroke();
}