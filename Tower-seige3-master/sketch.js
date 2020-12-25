const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var world, engine;

var stone, sling, gameState, score;
var platform1, platform2, ground;
var blu1, blu2, blu3, blu4, blu5, blu6, blu7, blu8, blu9, blu10, blu11, blu12;
var red1, red2, red3, red4, red5, red6;
var gre1, gre2, gre3, gre4, rge5, gre6;
var grey;
var sBlu, sRed, sGre, whi;

function setup() {
  createCanvas(1200,500);
  engine = Engine.create();
  world = engine.world;
  score = 0;
  textSize(14);

  gameState = "onSling";

  //preset colours
  sBlu = [50, 50, 250];
  sGre = [50, 250, 50];
  sRed = [250, 50, 50];

  //make the platforms and a ground
  platform1 = new Box(530, 440, 320, 30, 255, true);
  platform2 = new Box(960, 200, 260, 30, 255, true);
  ground = new Base(width/2, height + 10, width, 30);

  //make the hurler
  stone = new Hexa(130, 240, 30);

  //make the sling for the sling shot
  sling = new String(stone.body, {x: 130, y: 220});

  //the first piramid
  blu1 = new Box(410, 400, 40, 50, sBlu, false);
  blu2 = new Box(450, 400, 40, 50, sBlu, false);
  blu3 = new Box(490, 400, 40, 50, sBlu, false);
  blu4 = new Box(530, 400, 40, 50, sBlu, false);
  blu5 = new Box(570, 400, 40, 50, sBlu, false);
  blu6 = new Box(610, 400, 40, 50, sBlu, false);
  blu7 = new Box(650, 400, 40, 50, sBlu, false);

  gre1 = new Box(450, 350, 40, 50, sGre, false);
  gre2 = new Box(490, 350, 40, 50, sGre, false);
  gre3 = new Box(530, 350, 40, 50, sGre, false);
  gre4 = new Box(570, 350, 40, 50, sGre, false);
  gre5 = new Box(610, 350, 40, 50, sGre, false);

  red1 = new Box(490, 300, 40, 50, sRed, false);
  red2 = new Box(530, 300, 40, 50, sRed, false);
  red3 = new Box(570, 300, 40, 50, sRed, false);

  grey = new Box(530, 250 ,40, 50, 155, false);

  //the second piramid
  blu8 = new Box(870, 150, 40, 50, sBlu, false);
  blu9 = new Box(910, 150, 40, 50, sBlu, false);
  blu10 = new Box(950, 150, 40, 50, sBlu, false);
  blu11 = new Box(990, 150, 40, 50, sBlu, false);
  blu12 = new Box(1030, 150, 40, 50, sBlu, false);

  red4 = new Box(910, 100, 40, 50 ,sRed, false);
  red5 = new Box(950, 100, 40, 50 ,sRed, false);
  red6 = new Box(990, 100, 40, 50 ,sRed, false);

  gre6 = new Box(950, 50, 40, 50, sGre, false);

  Engine.run(engine);
}

function draw() {
  background(100);
  Engine.update(engine);
  showMouse(100, 10, "s", true);

  //scoring
  fill(0);
  textSize(17);
  text("score: " + score, 100, 50);
  if(score > 2499){
    fill(30, 255, 30);
    textSize(20);
    gameState = "onSling";
    sling.attach(stone.body);
    text("score: " + score, 545, 220);
    text("YOU WIN!!", 550, 250);
  }

  //2 platforms and a ground
  platform1.display();
  platform2.display();
  ground.display();

  //stone
  stone.display();

  //sling line
  sling.display();
  strokeWeight(1);

  //piramid 1
  blu1.destroy();
  blu2.destroy();
  blu3.destroy();
  blu4.destroy();
  blu5.destroy();
  blu6.destroy();
  blu7.destroy();
  //scoring
  blu1.score();
  blu2.score();
  blu3.score();
  blu4.score();
  blu5.score();
  blu6.score();
  blu7.score();

  gre1.destroy();
  gre2.destroy();
  gre3.destroy();
  gre4.destroy();
  gre5.destroy();
  //scoring
  gre1.score();
  gre2.score();
  gre3.score();
  gre4.score();
  gre5.score();

  red1.destroy();
  red2.destroy();
  red3.destroy();
  //scoring
  red1.score();
  red2.score();
  red3.score();

  grey.destroy();
  grey.score();

  //piramid 2
  blu8.destroy();
  blu9.destroy();
  blu10.destroy();
  blu11.destroy();
  blu12.destroy();
  //scoring
  blu8.score();
  blu9.score();
  blu10.score();
  blu11.score();
  blu12.score();

  red4.destroy();
  red5.destroy();
  red6.destroy();
  //scoring
  red4.score();
  red5.score();
  red6.score();

  gre6.destroy();
  gre6.score();

  drawSprites();
  fill(230, 200, 40);
  text("press the space bar to take another shot", 900, 450);
  text("destroy the boxes!!", 480, 50);
}

//draggind the box
function mouseDragged(){
  if(gameState === "onSling"){
    Body.setPosition(stone.body, {x: mouseX, y: mouseY});
  }
}

//releasing the box
function mouseReleased(){
  gameState = "shot";
  sling.fly();
}

function keyPressed(){
  if(keyCode === 32){
    gameState = "onSling";
    sling.attach(stone.body);
  }
}