
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,paper1,dustbin;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
ground=new Ground(400,600,800,30);
paper1= new Paper(200,550,20);
dustbin= new Dustbin(600,550);

	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  


 ground.display();
 dustbin.display();
 paper1.display();
  
}
function keyPressed(){
	if(keyCode=== UP_ARROW){
	
	  Matter.Body.applyForce(paper.body,paper.body.position,{x:85,7:85});
	
	
	
	}
	}


