const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

var engine,world;
var backgroundimg;
var superhero,string;
var superimg,ground,monster,monsterimg;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16,block17,block18,block19,block20,block21;

function preload() {
//preload the images here
backgroundimg=loadImage("images/GamingBackground.png");
}

function setup() {
  createCanvas(1000, 800);
  

  engine=Engine.create();
  world=engine.world;

  // create sprites here
  superhero=new Superhero(200,400,20,20);

  ground=new Ground(width/2,600,width,20);

  monster=new Monster(900,900,20,20);

  string=new String(superhero.body,{x:390,y:200});

  block1=new Block(600,100,70,70);
  block2=new Block(600,100,70,70);
  block3=new Block(600,100,70,70);
  block4=new Block(600,100,70,70);
  block5=new Block(600,100,70,70);
  block6=new Block(600,100,70,70);
  block7=new Block(600,100,70,70);
  block8=new Block(600,100,70,70);

  block9=new Block(800,100,70,70);
  block10=new Block(800,100,70,70);
  block11=new Block(800,100,70,70);
  block12=new Block(800,100,70,70);
  block13=new Block(800,100,70,70);
  block14=new Block(800,100,70,70);
  block15=new Block(800,100,70,70);

  block16=new Block(700,100,70,70);
  block17=new Block(700,100,70,70);
  block18=new Block(700,100,70,70);
  block19=new Block(700,100,70,70);
  block20=new Block(700,100,70,70);
  block21=new Block(700,100,70,70);
}

function draw() {
  background(backgroundimg);

  Engine.update(engine);

  superhero.display();
  string.display();
  ground.display();
  monster.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();

  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();

  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
}

function mouseDragged(){
  Matter.Body.setPosition(superhero.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  string.fly();
}

