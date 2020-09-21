var fixedRect, movingRect, Rect1;
var Rect2, Rect3;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600,400,50,80);
  fixedRect.shapeColor = "green";
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "blue";
  Rect1 = createSprite(400,300,50,80);
  Rect1.shapeColor = "orange";
  Rect2 = createSprite(450,250,80,30);
  Rect2.velocityX = -2;
  Rect3 = createSprite(100,250,50,80);
  Rect3.velocityX = 2;
}

function draw() {
  background(255,255,255); 
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY; 
  if(isTouching(movingRect,fixedRect)){
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";
  }
  else{
    fixedRect.shapeColor="green";
    movingRect.shapeColor = "blue";
  }
  if(isTouching(movingRect,Rect1)){
    Rect1.shapeColor = "red";
    movingRect.shapeColor = "red";
  }
  else{
    Rect1.shapeColor="orange";
    //movingRect.shapeColor = "red";
  }
  bouncing(Rect2,Rect3);
  drawSprites();
}