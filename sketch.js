var Player 
var bars1,bars2,bars3,bars4,bars5,bars6,bars7
var bars8,bars9,bars10,bars11,bars12,bars13,bars14
var bars15,bars16,bars17,bars18,bars19,bars20,bars21
var bars22,bars23,bars24,bars25,bars26,goal
function preload() {
  WinSound = loadSound("Game_Completed.mp3");
}
function setup(){
  createCanvas(300,300)
Player = createSprite(8,385,15,15) 
  Player.shapeColor = "orange";
   bars1 = createSprite(10,70,100,20);
   bars2 = createSprite(100,50,20,100);
 bars3 = createSprite(80,130,100,20);
 bars4 = createSprite(50,250,20,100);
 bars5 = createSprite(130,210,100,20);
 bars6 = createSprite(10,250,100,20);
 bars7 = createSprite(160,120,20,100);
 bars8 = createSprite(150,20,100,20);
 bars9 = createSprite(250,70,20,100);
 bars10 = createSprite(270,150,100,20);
 bars11= createSprite(330,50,100,20);
 bars12= createSprite(340,125,20,100);
 bars13 =createSprite(220,250,20,100);
 bars14 = createSprite(330,210,150,20);
 bars15 = createSprite(100,300,20,100);
 bars16 = createSprite(180,310,100,20);
 bars17 = createSprite(30,400,20,100);
 bars18 = createSprite(175,352,20,100);
 bars19 = createSprite(280,290,20,100);
 bars20 = createSprite(350,270,120,20);
 bars21 = createSprite(250,340,100,20);
 bars22 = createSprite(330,370,20,100);
 bars23 = createSprite(200,-10,600,10);
 bars24 = createSprite(200,445,600,10);
 bars25 = createSprite(-35,200,10,600);
 bars26 = createSprite(415,200,10,600)
 dot = createSprite(180 , 90 , 10 , 10);
 dot1 = createSprite(72 , 360 , 10 , 10);
 dot2 = createSprite(224 , 49 , 10 , 10);
 dot3 = createSprite(371 , 177 , 10 , 10);
 dot4 = createSprite(369 , 336 , 10 , 10);
 dot5 = createSprite(171 , 249 , 10 , 10);
 dot6 = createSprite(80 , 174 , 10 , 10);
 dot7 = createSprite(41 , 20 , 10 , 10);
 goal = createSprite(390,11,10,50);
dot.shapeColor = "green";
dot1.shapeColor ="green";
dot2.shapeColor ="green";
dot3.shapeColor ="green";
dot4.shapeColor ="green";
dot5.shapeColor = "green";
dot6.shapeColor ="green";
dot7.shapeColor ="green";

   bars1.shapeColor = "red";
  bars2.shapeColor = "red";
  bars3.shapeColor = "red";
  bars4.shapeColor = "red";
  bars5.shapeColor = "red"
   bars6.shapeColor = "red";
   bars7.shapeColor = "red";
   bars8.shapeColor = "red";
   bars9.shapeColor = "red";
   bars10.shapeColor = "red";
   bars11.shapeColor = "red";
   bars12.shapeColor = "red";
   bars13.shapeColor = "red";
   bars14.shapeColor = "red";
   bars15.shapeColor = "red";
   bars16.shapeColor = "red";
   bars17.shapeColor = "red";
   bars18.shapeColor = "red";
   bars19.shapeColor = "red";
   bars20.shapeColor = "red";
   bars21.shapeColor = "red";
   bars22.shapeColor = "red";
   bars23.shapeColor = "red";
   bars24.shapeColor = "red";
   bars25.shapeColor = "red";
   bars26.shapeColor = "red";
    goal.shapeColor = "blue";
 
}
   function draw() {
    background("cyan");

  
Player.collide(bars1);
Player.collide(bars2);
Player.collide(bars3);
Player.collide(bars4);
Player.collide(bars5);
Player.collide(bars6);
Player.collide(bars7);
Player.collide(bars8);
Player.collide(bars9);
Player.collide(bars10);
Player.collide(bars11);
Player.collide(bars12);
Player.collide(bars13);
Player.collide(bars14);
Player.collide(bars15);
Player.collide(bars16);
Player.collide(bars17);
Player.collide(bars18);
Player.collide(bars19);
Player.collide(bars20);
Player.collide(bars21);
Player.collide(bars22);
Player.collide(bars23);
Player.collide(bars24);
Player.collide(bars25);
Player.collide(bars26);
if ( Player.collide(goal))  
{
  WinSound.play();
  }

if (Player.isTouching(dot)) {
  Player.x = 8;
  Player.y = 385;
}

if (Player.isTouching(dot1)) {
  Player.x = 8;
  Player.y = 385;
}

if (Player.isTouching(dot2)) {
  Player.x = 8;
  Player.y = 385;
}

if (Player.isTouching(dot3)) {
  Player.x = 8;
  Player.y = 385;
}

if (Player.isTouching(dot4)) {
  Player.x = 8;
  Player.y = 385;
}

if (Player.isTouching(dot5)) {
  Player.x = 8;
  Player.y = 385;
}

if (Player.isTouching(dot6)) {
  Player.x = 8;
  Player.y = 385;
}

if (Player.isTouching(dot7)) {
  Player.x = 8;
  Player.y = 385; 
}

if (keyDown("UP_ARROW")) {
Player.y=Player.y-4;
}

if (keyDown(DOWN_ARROW)) { 
Player.y= Player.y+4;
}

if (keyDown(LEFT_ARROW)) { 
Player.x=Player.x-4;
}

if (keyDown(RIGHT_ARROW)) { 
Player.x=Player.x+4;
}
bars23.depth=goal.depth+1;
camera.position.x = Player.x
camera.position.y = Player.y
  drawSprites();
}