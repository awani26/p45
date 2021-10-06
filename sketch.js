var spaceCraft, alienShip, spaceCraftImg, alienShipImg, backgroundImg; 

function preload(){

 spaceCraftImg = loadImage("spacecraft1.png");
  //alienShipImg = loadImage("C:\Users\sanket\Desktop\Whitehat jr\spaceship-304073_960_720.png");
  backgroundImg = loadImage("spacebg.jpg");
}


function setup() {
  createCanvas(displayWidth,displayHeight);
  spaceCraft = createSprite(displayWidth-1000, displayHeight-500, 50, 50);
  spaceCraft.addImage("spaceCraft",spaceCraftImg);
 spaceCraft.scale=0.3;
}

function draw() {
  //background("blue");  
  background(backgroundImg);

  if(keyDown(UP_ARROW)){
    spaceCraft.y -= 5; 
  }
  if(keyDown(DOWN_ARROW)){
  spaceCraft.y += 5
  }
  if(keyDown(LEFT_ARROW)){
  spaceCraft.x -= 5;
  }
  
  if(keyDown(RIGHT_ARROW)){
  spaceCraft.x += 5;
  }

  spawnalienShip();
  drawSprites();
}

function spawnalienShip(){
  if(frameCount%60===0){
    ay = Math.round(random(100,800))
    ax = Math.round(random(800,1200))
    alienShip = createSprite(ax, ay, 50, 50);
    //alienShip.shapeColor="red"
    //alienShip.addImage("alienShip",alienShipImg);
  }
  
}