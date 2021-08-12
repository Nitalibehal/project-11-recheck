var path , boy , background , track , runner_running ; 

var leftbound , rightbound ;




function preload(){
  track = loadImage("path.png");
  runner_running = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,00);
  path = createSprite(200,200);
  path.addImage(track);
  path.velocityY = 4;
  path.scale = 1.2;

  boy = createSprite(50,180,20,50);
  boy.addAnimation("running",runner_running);
  boy.scale = 1.4;

  leftbound = createSprite(0,0,100,400);
  leftbound.visible = false 

  rightbound = createSprite(410,0,100,400);
  rightbound.visible = false;

  edges = createEdgeSprites();
  boy.collide (leftbound);
  boy.collide(rightbound);
  boy.collide(edges[3]);
}

function draw() {
  background(6);
  
  if(path.y > 400){
    path.y = height/2;
  }
boy.x = mouseX;

}