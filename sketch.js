
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy;
var tree;
var mango1,mango2,mango3,mango4,mango6,mango7,mango8;
var stone;
var launcher;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(1365, 653);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	boy=new Boy(200,550,200,350);
	
	tree=new Tree(1100,380,400,600);
	
	mango1=new Mango(1140,130,50,50);
	mango2=new Mango(1040,150,50,50);
	mango3=new Mango(1180,230,50,50);
	mango4=new Mango(1030,250,50,50);
	mango5=new Mango(950,300,50,50);
	mango6=new Mango(1250,300,50,50);
	mango7=new Mango(1050,350,50,50);
	mango8=new Mango(1120,280,50,50);
	
	stone=new Stone(135,470,50,50);
	
	launcher=new Launcher(stone.body,{x:135,y:470});
	
	ground=new Ground(685,650,25,1375);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  
  boy.display();
  
  tree.display();
  
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  
  stone.display();
  
  launcher.display();
  
  ground.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    launcher.fly();
}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stone.body,{x:135,y:470})
		launcher.attach(stone.body);
	}
}

function detectCollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position

	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
		if(distance<=lmango.r+lstone.r){
			Matter.Body.setStatic(lmango.body,false);
		}
}