const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20,box21,box22,box23,box24,box25,box26;
var hero,monster,ground;


function preload() {
  bg = loadImage("PlaceholderImages/LevelAssets/Backgrounds/HauntedForest.png");
  //obstacle1 = loadImage("PlaceholderImages/Enemies/BoneGoombaPlaceholder")
  //obstacle2 = loadImage("PlaceholderImages/Enemies/BooPlaceholder2")
  //obstacle3 = loadImage("PlaceholderImages/Enemies/ParabonesPlaceholder3")
 heroimage=loadImage("PlaceholderImages/LuigiPlaceHolderUpdated.png");
 overimg = loadImage("PlaceholderImages/LuigiGameOverPlaceholder.jpg");
}

function setup() {
  createCanvas(displayWidth, displayHeight-120);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(displayWidth/2, displayHeight-120, displayWidth, 20);
  ground2 = new Ground(displayWidth-30, displayHeight/2, 20, displayHeight);
  ground3 = new Ground(30, displayHeight/2, 20, displayHeight);
  ground4 = new Ground(displayWidth/2, 10, displayWidth, 20);
  
 
 
  BoneGoomba = new Goomba(1280,800,100);
  Boo = new Ghost(1200,800,100)
  ParaBones = new BoneDragon(1050,800,100)

  box1 = new Box(1000, 200, 70, 70);
  box2 = new Box(1350, 600, 70, 70);
  box3 = new Box(800, 450, 70, 70);
  box4 = new Box(1200, 150, 70, 70);
  box5 = new Box(1250, 360, 70, 70);
  box6 = new Box(1200, 800, 70, 70);
  box7 = new Box(1200, 800, 70, 70);
  box8 = new Box(900, 800, 70, 70);
  box9 = new Box(1200, 800, 70, 70);
  box10 = new Box(1150, 800, 70, 70);
  box11 = new Box(780, 800, 70, 70);
  box12 = new Box(900, 800, 70, 70);
  hero = new Hero(500,50,200);
  rope = new Rope(hero.body , {x:500 , y:50})

  gameover = createSprite(displayWidth/2 , displayHeight/2)
  gameover.addImage(overimg)
  gameover.scale = 1.45
  gameover.visible = false
}

function draw() {
  background(bg);
  Engine.update(engine);
  drawSprites()
  ground.display();
  ground2.display();
  ground3.display()
  ground4.display()
  box1.display();
  box2.display();
  box3.display();
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  box8.display()
  box9.display()
  box10.display()
  box11.display()
  box12.display()

 

  BoneGoomba.display();
  Boo.display()
  ParaBones.display()
  
  hero.display();
  rope.display();

  if(Boo.Visiblity <0 && ParaBones.Visiblity <0 && BoneGoomba.Visiblity <0){
    console.log("gameover")
    gameover.visible = true
    textSize(35)
    fill("yellow")
    text("RELOAD THE PAGE TO RESTART!!!" , displayWidth/2-250 , displayHeight/2)
  }
  
}



function mouseDragged(){
  Matter.Body.setPosition(hero.body , {x : mouseX , y:mouseY})
}

function mouseReleased(){
  rope.fly()
}


