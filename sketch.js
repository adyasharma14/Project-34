const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const MouseConstraint=Matter.MouseConstraint
const Mouse = Matter.Mouse;

var bob, bob2, bob3, bob4, bob5;
var roof;
var rope;
var bobDiameter=80;
var mConstraint;


function preload()
{
	backImg=loadImage("sprites/Image.png")
}

function setup() {
  canvas=createCanvas(windowWidth/2,windowHeight/1.5);
  
	engine = Engine.create();
  world = engine.world;
  let canvasmouse=Mouse.create(canvas.elt)
  canvasmouse.pixelRatio=pixelDensity();
  let options={
    mouse:canvasmouse
  };
  mConstraint=MouseConstraint.create(engine,options);
  World.add(world,mConstraint);


  
  

	bob = new Bob(200,350,39.6);
	bob2 = new Bob(250,350,39.6);
	bob3 = new Bob(300,350,39.6);
	bob4 = new Bob(440,350,39.6);
	bob5 = new Bob(500,350,39.6);
	roof = new Roof(300,50,400,20);
	rope1 = new Rope(bob.body,roof.body,-bobDiameter*2,0)
	rope2 = new Rope(bob2.body,roof.body,-bobDiameter*1,0)
	rope3 = new Rope(bob3.body,roof.body,bobDiameter*0,0)
	rope4 = new Rope(bob4.body,roof.body,bobDiameter*1,0)
	rope5 = new Rope(bob5.body,roof.body,bobDiameter*2,0)

	Engine.run(engine);
  
}


function draw() 
{
  rectMode(CENTER);
  background(backImg);
  fill(0,0,150);
  bob.display();
  fill("pink")
  bob2.display();
  fill(150,0,0)
  bob3.display();
  fill("orange")
  bob4.display(); 
  fill("purple")
  bob5.display();

  fill("blue")
  roof.display();
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
  textSize(25);
 fill ("red");
 stroke("black");
  text("Please drag any of the pendulum to start",70,30);
  text("Newton's",10,100);
  text("Craddle",500,100);
  
 //if(!mouseDragged){
  //textSize(15)
  //text("Drag this>",5,350)
 //}
}

//function keyPressed(){
//	if(keyCode===UP_ARROW){
//		Matter.Body.applyForce(bob.body,bob.body.position,{x:-800,y:-500})
//	}
//}



