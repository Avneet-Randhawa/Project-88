canvas = new fabric.Canvas("myCanvas");

ball_x =  0 ;
ball_y =  0 ;
hole_x =  400 ;
hole_y =  800 ; 

block_img_height = 5;
block_img_width = 5;

function load_img(){
	fabric.Image.fromURL("golf-h.png",function(Img){
		hole_object = Img;
		hole_object.scaleToHeight(50);
		hole_object.scaleToWidth(50);
		hole_object.set({
			top : hole_y ,
			left : hole_x 
		});
		canvas.add(hole_object);
	});
	new_image();
}

function new_image(){
	fabric.Image.fromURL("ball.png",function(Img){
		ball_object = Img;
		ball_object.scaleToHeight(50);
		ball_object.scaleToWidth(50);
		ball_object.set({
			top : ball_y ,
			left : ball_x
		});
		canvas.add(ball_object);
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{

	keyPressed = e.keyCode;
	console.log(keyPressed);
	if(ball_x == hole_x && ball_y == hole_y){
		canvas.remove(ball_object);
		console.log("ball removed");
		document.getElementById("hd3").innerHTML ="You have Hit the Goal!!!";
		document.getElementById("myCanvas").style.borderColor ="red";
		canvas.remove(ball_object);
	}
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
			load_img();
		}
		if(keyPressed == '40'){
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
}
	function up()
	{
		if(ball_y >= 0){
			ball_y = ball_y - 10;
			console.log("X = "+ball_x + " Y = " + ball_y);
			canvas.remove(ball_object);
			load_img();
			
		}
	}
	function down()
	{
		if(ball_y < 950){
			ball_y = ball_y + 10;
			console.log("X = "+ball_x + " Y = " + ball_y);
			canvas.remove(ball_object);
		load_img();
	}
	}

	

	function left()
	{
		if(ball_x >5)
		{
			ball_x = ball_x - 10;
			console.log("X = "+ball_x + " Y = " + ball_y);
			canvas.remove(ball_object);
			load_img();
		}
	}

	function right()
	{
		if(ball_x <=950)
		{
			ball_x = ball_x + 10;
			console.log("X = "+ball_x + " Y = " + ball_y);
			canvas.remove(ball_object);
			load_img();
		}
		
	}
	


