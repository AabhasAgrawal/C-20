var movingRect;
var fixedRect; 
function setup() {
  createCanvas(400,400);
  movingRect =  createSprite(200, 300, 50, 50);
  fixedRect =  createSprite(200, 200, 50, 50);
  movingRect.shapeColor = "green"
  fixedRect.shapeColor = "green"
  
}

function draw() {
  background(200,255,255);  

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(Math.round(movingRect.x - fixedRect.x) < Math.round(movingRect.width/2+fixedRect.width/2)
  && Math.round(fixedRect.x - movingRect.x) < Math.round(movingRect.width/2+fixedRect.width/2)
  && (Math.round(movingRect.y - fixedRect.y) < Math.round(movingRect.width/2+fixedRect.width/2)
  && Math.round(fixedRect.y - movingRect.y) < Math.round(movingRect.width/2+fixedRect.width/2))){
    

    
    //to change the colour to red 
    movingRect.shapeColor = "red"
    fixedRect.shapeColor = "red";

  }//end of if condition 
  else{
    movingRect.shapeColor = "green"
    fixedRect.shapeColor = "green";
  }


  drawSprites();
}//end of draw 
