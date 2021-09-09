var boy,boy_running;
var path,pathImg,leftBoundary,rightBoundary;
var i;


function preload(){
  boy_running = loadImage("Runner-1.png","Runner-2.png");
  pathImg = loadImage("path.png");
}

function setup(){

  createCanvas(400,400); 


 path = createSprite (200,200,200,10);
 path.addImage("path.png",pathImg);
 path.scale=1.2;
 path.velocityY = 4;
 

 boy = createSprite (200,200,20,200);
 boy.addImage("running",boy_running);
 boy.scale=0.05;
 boy.x = 200
 edges = createEdgeSprites();

 leftBoundary=createSprite(0,0,100,800);
 leftBoundary.visible=false;


 rightBoundary=createSprite(410,0,100,800);
 rightBoundary.visible=false;


}

function draw() {
  background("black");
  drawSprites();
  
  boy.collide(edges); 
  boy.velocityX = boy.velocityX + 0.5;

 path.velocityY=2
  if(path.y < 0 ){
    path.y=path.height/2;
  }
  console.log(path.x);
 boy.x=world.mouse;
}
