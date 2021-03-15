var monkey, monkey_running
var banana, bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score = 0;
var ground, invisible;
var survivalTime = 0;


function preload() {


  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
  
}



function setup() {
 // createCanvas(500, 500);



  FoodGroup = new Group();
  obstacleGroup = new Group();

  monkey = createSprite(80, 315, 20, 20);
  monkey.addAnimation("monkey", monkey_running);
  monkey.scale = 0.1;

  ground = createSprite(400, 350, 900, 10);
 ground.velocityX=-4
  ground.x=ground.width/2;
  console.log(ground.x)
  //ground.debug = true;

 // invisible = createSprite(250, 407, 1000, 10);
  //invisible.x = ground.width / 2;

}


function draw() {
  background("white");

 
    //reset the ground
    if (ground.x < 0) {
      ground.x = ground.width / 2;
    }

   
    if (keyDown("space")) {
      monkey.velocityY = -20;
    }
    monkey.velocityY = monkey.velocityY+0.8
   // score = Math.round(frameCount / 3);
    //survivalTime = Math.ceil(frameCount / frameRate());
     //ground.velocityX = -(5 + 2 * score / 100);
     monkey.collide(ground);
   
   
   Food();
   Obstacle();
 drawSprites();
   stroke("white");
  textSize(20);
  fill("white");
  text("score: "+score,500,50)
  

    if (obstacleGroup.isTouching(monkey)) {
     ground.velocityX = 0
      monkey.velocityY = 0
      obstacleGroup.setVelocityXEach(0)
        FoodGroup.setVelocityXEach(0)
        obstacleGroup.setLifetimeEach(-1)
       FoodGroup.setLifetimeEach(-1)
    }


 

 

 
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survival Time:" + survivalTime, 100, 50);
  





 
}

function Food() {

  if (frameCount % 80 === 0) {
    var banana = createSprite(500, 10, 10, 20);
    banana.addImage("banana", bananaImage);
    banana.velocityX = -5
    banana.y = random(120, 200);
    banana.scale = 0.1;
    FoodGroup.add(banana);
    //banana.lifetime=300;
    banana.setCollider("rectangle", 0, 0, 400, 400);

  }

}

function Obstacle() {

  if (frameCount % 300 === 0) {
    var obstacle = createSprite(800, 320, 10, 40);
    obstacle.velocityX = -6
    obstacle.addImage("obstacle", obstacleImage);
    obstacle.scale = 0.2;
    obstacleGroup.add(obstacle);
    obstacle.lifetime=300;
    // obstacle.debug = true;
    //obstacle.setCollider("circle", 0, 0, 200)
  }

}



