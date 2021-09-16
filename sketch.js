var PLAY = 1;
var END = 0;
var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = PLAY;
var score = 0;

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");

  
}

function setup() {
  createCanvas(600,600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 4+(3*score/100);
  ghost = createSprite(300,300,50,50);
  ghost.addImage(ghostImg);
  ghost.scale = 0.3;
  door = createSprite(500,200,50,50);
  door.addImage(doorImg);
  door.scale = 0.6;
  climber = createSprite(500,230,50,50);
  climber.addImage(climberImg);
  climber.scale = 0.6;

  
}

function draw() {
  background(200);
  text("Score" + score,500,50);
  if(gameState == PLAY){
    score = score + Math.round(getFrameRate()/600);
    tower.velocityY = 4+(3*score/100);

    if(keyDown('space') || keyDown('up')){
      ghost.velocityY = -12;
    }
    if(keyDown('left')){
      ghost.velocityX = ghost.velocityX - 0.75;
    }
    if(keyDown('right')){
      ghost.velocityX = ghost.velocityX + 0.75;
    }

    ghost.velocityY += 1;
  }
  drawSprites();
  if(tower.y > 400){
      tower.y = 300
    }

}
