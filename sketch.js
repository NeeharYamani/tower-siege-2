const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;
var box1;

function preload() {
    
}

function setup(){
    var canvas = createCanvas(1600,700);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,480,400,20)

    ground2 = new Ground(1200,280,400,20)
	

    box1 = new Box(450,95,70,70);
    box2 = new Box(524,285,70,70);
    box3 = new Box(598,390,70,70);
    box4 = new Box(672,450,70,70);
    box5 = new Box(745,400,70,70);

    box6 = new Box(524,285,70,70);
    box7 = new Box(598,390,70,70);
    box8 = new Box(672,450,70,70);
    box9 = new Box(598,390,70,70);

    box10 = new Box(1060,100,70,70);
    box11 = new Box(1130,150,70,70);
    box12 = new Box(1200,200,70,70);
    box13 = new Box(1270,250,70,70);
    box14 = new Box(1341,200,70,70);
    box15 = new Box(1130,150,70,70);
    box16 = new Box(1200,200,70,70);
    box17 = new Box(1270,250,70,70);
    box18 = new Box(1200,200,70,70);

    hero = new Hero(220,400,30);
    
  
   slingshot = new Slingshot(hero.body, {x:200,y:180})

}

function draw(){
    background("maroon");
    Engine.update(engine);
   
    box1.display();
    box2.display();
    ground.display();
    ground2.display();
    

    box3.display();
    box4.display();
   
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    hero.display();

   
    slingshot.display();
	
}
function mouseDragged(){
    Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    slingshot.fly();
    
}
function keyPressed(){
    if(keyCode === 32){
      Matter.Body.setPosition(hero.body, {x: 220, y:400});
      slingshot.attach(hero.body);
    }
  }

