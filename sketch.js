var player, tunnel, mariobg; 
var playerImg, bgImg, tunnelImg; 
var tunnelGroup

function preload(){
  playerImg = loadImage("mario.png");
  bgImg = loadImage("mario bg.png");
  tunnelImg = loadImage("tunnel.png");
}

function setup() {
  createCanvas(400,400);

  mariobg = createSprite(200, 200, 200, 200);
  mariobg.addImage("background", bgImg);
  mariobg.velocityX = -1;
  mariobg.x = mariobg.width/2;

  player = createSprite(50, 200, 50, 50);
  player.addImage("player", playerImg);
  player.scale = 0.03;

  tunnelGroup = createGroup();
}

function draw() {
  background("black");

  if (mariobg.x < 0){
    mariobg.x = mariobg.width/2;
  }

  console.log(mariobg.x);
  
  tunnelSpawn();
  drawSprites();
  text(mouseX +","+ mouseY);
}
function tunnelSpawn(){
  if(frameCount%60 === 0){
    tunnel = createSprite(400, 200, 20, 20);
    tunnel.addImage("tunnel", tunnelImg);
    tunnel.velocityX = -4;
    tunnel.scale = 0.2;
    tunnel.lifetime = 100;
    tunnelGroup.add(tunnel);
  }
}