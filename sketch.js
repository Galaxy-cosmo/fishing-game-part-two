var boy,boyImg;
var fish1,fish1Img;
var fish2,fish2Img;
var fish3,fish3Img;

function preload(){
  boyImg = loadAnimation("images/boy1.png","images/boy2.png","images/boy3.png","images/boy4.png","images/boy5.png","images/boy6.png");
  boyImg2=loadAnimation("images/boy1.png")
  fish1Img=loadAnimation("images/fish1.png","images/fish2.png","images/fish3.png");
  fish2Img=loadAnimation("images/blue1.png","images/blue2.png","images/blue3.png","images/blue4.png","images/blue5.png")
  fish3Img=loadAnimation("images/silver1.png","images/silver2.png","images/silver3.png","images/silver4.png","images/silver5.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  boy=createSprite(400, 200, 50, 50);
  boy.addAnimation("boy2",boyImg2)
  boy.addAnimation("boy",boyImg)
  boy.scale=0.4
}

function draw() {
  background(37,255,255);  
  if(keyDown("right")){
    boy.x=boy.x+5;
    boy.changeAnimation("boy",boyImg)
  }
  
  if(keyDown("left")){
    boy.x=boy.x-5;
    boy.changeAnimation("boy",boyImg)
  }

  if(keyDown("up")){
    boy.y=boy.y-5;
    boy.changeAnimation("boy",boyImg)
  }
  
  if(keyDown("down")){
    boy.y=boy.y+5;
    boy.changeAnimation("boy",boyImg)
  }
  
  if(keyWentUp("left")||keyWentUp("right")||keyWentUp("up")||keyWentUp("down")){
    boy.changeAnimation("boy2",boyImg2)
  }

  spawnFish1();

  drawSprites();
}

function spawnFish1(){
   if(World.frameCount%150===0){
     var fish1 = createSprite(windowWidth+10,300);
     fish1.addAnimation("fish1",fish1Img);
     fish1.velocityX = -5;
     fish1.scale=0.2
     fish1.y=random(100,600)
   }
}