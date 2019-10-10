//Check to see If VizCode Updates
var sky;
var chop;
var betty;
var talk;
var santan;
var surprise;
var monster;
var cain;
var cnv;
var click = 1;
function preload(){
    sky = loadImage("theglory.jpeg");
    chop = createImg ("TreeChop.gif");
	betty = createImg ("bettyboop.gif");
	talk = createImg("deadtalk.gif");
	santan = createImg("Santan.gif");
	surprise = createImg("surprise.gif");
	monster = createImg ("monster.gif");
	cain = createImg ("cain.gif");
}
function setup() {
//cnv = createCanvas (1000, 1000);
	createCanvas (1200, 1200);
	background ("blue");
	//cnv.position (300, 0)
	




}
function draw(){
	push();
	image(sky, 0, 0, 1200, 1200);
	chop.position(0, 500);
	chop.size(300, 350);
	
	pop();
	betty.position (900, 900);
	betty.size(300, 300);
	
	talk.position (0, 0);
	talk.size(500, 500);
	

	santan.position (300, 830);
	santan.size(600, 370);

	surprise.position (0, 850);
	surprise.size(300, 350);
	
	cain.position (720, 0);
	cain.size(500, 500);
	
	
	monster.position (820, 500);
	monster.size(400, 400);
	if (click%2 === 0){
	fill (255, 0, 0);
	textSize (100);
	textFont('American Typewriter');
	text ('FEAR', 300, 600);
    text ('no', 450, 700);
    text ('EVIL', 500,800 );
	}
	stroke(0);
	push();
    strokeWeight (1000);
    noFill();
    if (click%2 == 0){
    circle (550, 650, 450);

	}
	pop();
}
	
	function mousePressed(){
  click ++;
}