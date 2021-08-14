var garden,rabbit;
var gardenImg,rabbitImg;
var apple, appleImage;
var leaf, leafImage;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImage=loadImage("apple.png");
  leafImage=loadImage("orangeLeaf.png");
}

function setup(){
  createCanvas(400,400);

// Moving background

garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.addImage(rabbitImg);
rabbit.scale=0.1;
}


function draw() {
  background("white");
  
  rabbit.x=World.mouseX;
  edges= createEdgeSprites();
  rabbit.collide(edges);
  
var select_sprites = Math.round(random(1,2));

if (frameCount % 80 == 0) {
  if (select_sprites == 1) {
    createApples();
    }
    else {
      createLeaves();
    }
}

  drawSprites();
}

function createApples() {
  apple=createSprite(random(50,350), 40, 10, 10);
  apple.addImage(appleImage);
  apple.scale=0.1;
  apple.velocityY=4;
}

function createLeaves() {
  leaf=createSprite(random(50,350),40,10,10);
  leaf.addImage(leafImage);
  leaf.scale=0.1;
  leaf.velocityY=4;
}

