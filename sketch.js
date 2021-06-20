const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

function setup() {
  createCanvas(displayWidth,displayHeight);

  engine = Engine.create();
  world = engine.world
  
  ground = new Ground(displayWidth/2, displayHeight-200, displayWidth, 20)
ball = new Ball(100,200,20)
  
}

function draw() {
  background(0); 
  Engine.update(engine)
  ground.display();
  ball.display();
}