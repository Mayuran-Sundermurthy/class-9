var box;

function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,20,20);
  
}

function draw() 
{
  background(30);
  drawSprites();
  box.velocityX = 0;
  box.velocityY = 0;
  if(keyIsDown(RIGHT_ARROW)){
    box.velocityX = 6;
  }

  if(keyIsDown(LEFT_ARROW)){
    box.velocityX = -6;
  }

  if(keyIsDown(UP_ARROW)){
    box.velocityY = -6;
  }

  if(keyIsDown(DOWN_ARROW)){
    box.velocityY = 6;
  }
 
}




