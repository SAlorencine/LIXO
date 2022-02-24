
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var PAPEL


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	PAPEL = new PAPER(200,120,60);

	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);

  groundObject.display();
  dustbinObj.display();
  PAPEL.display();

}
function keyPressed(){
	if (keyCode == UP_ARROW){
		Matter.Body.applyForce(PAPEL.body,PAPEL.body.position,{x:90, y:-105});
	  }
}
