// var path;
// var boy;
// var shell,shell1,shell2;
// var crab;
// var shellG,shell1G,shell2G,crabG;
// var shellImg,shell1Img,shell2Img,crabImg;
// var gameover,restart;
// var score = 0;

// //Game States
// var PLAY=1;
// var END=0;
// var gameState=PLAY;



// function preload(){

// pathImg = loadImage("seawater.png");
// shellImg = loadImage("chain.png");
// shell1Img = loadImage("shell1.png");
// shell2Img = loadImage("shell2.png");
// boyImg = loadImage("surfing boy.png");
// crabImg = loadImage("crab 1.png");

// }

// function setup() {
 
//     createCanvas(windowWidth,windowHeight);

//     path=createSprite(width/2,200);
//     path.addImage(pathImg);
//     path.velocityX = 4;

//     edges = createEdgeSprites();
//     shellG = new Group();
//     crabG = new Group();
    

   
//     boy = createSprite(width-100,height/2,20,20);
//     boy.setCollider("circle",0,0,40);
//     boy.debug = true;
//     boy.addAnimation("boyRunning",boyImg);
//     setCollider = true;
//     //boy.scale=0.08;
// }


// function draw() {
 
//   background(52);

//   if(gameState==PLAY){

//     if(keyDown("up_arrow")){
//       boy.y = boy.y - 10;
//     }

//     if(keyDown("down_arrow")){
//       boy.y = boy.y + 10;
//     }
    
//     boy.collide(edges);
//     if(path.x > width ){
//         path.x = width/2;
//       }


//       createShell();
//       createShell1();
//       createShell2();
//       createCrab();

//       if (shellG.isTouching(boy)) {
//         shellG.destroyEach();
//         score = score + 20;

        
//       }

//       if (crabG.isTouching(boy)) {
//         crabG.destroyEach();
        
//       }

//   }

//     else if (gameState == END) {

              
//         boy.addAnimation("boyRunning",endImg);
//         boy.x = width/2;
//         //boy.y = height/2;
//         boy.scale = 0.6;
//         path.velocityX = 0;
            
            
          
//           }

//     drawSprites();
//     textSize(30)
//     text("Score : "+score,50,40 )
// }


// function createShell() {
//     if (World.frameCount % 150 == 0) {
//     var shell = createSprite(-5, Math.round(random(100, width-100), 10, 10));
//     shell.addImage(shellImg);
//     shell.scale=0.2;
//     shell.velocityX = 5;
//     shell.lifetime = 2000;
//     shellG.add(shell);
//     }
//   }

//   function createShell1() {
//     if (World.frameCount % 180 == 0) {
//     var shell1 = createSprite(-5,Math.round(random(100, width-100), 10, 10));
//     shell1.addImage(shell1Img);
//     shell1.scale=0.2;
//     shell1.velocityX = 5;
//     shell1.lifetime = 2000;
//     shellG.add(shell1);
//     }
//   }

// function createShell2() {
//     if (World.frameCount % 120 == 0) {
//     var shell2 = createSprite(-5,Math.round(random(100, width-100), 10, 10));
//     shell2.addImage(shell2Img);
//     shell2.scale=0.2;
//     shell2.velocityX = 5;
//     shell2.lifetime = 2000;
//     shellG.add(shell2);
//     }
//   }


//     function createCrab() {
//       if (World.frameCount % 120 == 0) {
//       var crab = createSprite(-5,Math.round(random(100, width-100), 10, 10));
//       crab.addImage(crabImg);
//       crab.scale=0.2;
//       crab.velocityX = 5;
//       crab.lifetime = 2000;
//       crabG.add(crab);
//       }
//     }


















var path;
var boy;
var shell,shell1,shell2;
var crab;
var shellG,shell1G,shell2G,crabG;
var shellImg,shell1Img,shell2Img,crabImg;
var gameover,restart;
var score = 0;
var lives=2;

//Game States
var PLAY=1;
var END=0;
var gameState=PLAY;

function preload(){
  pathImg = loadImage("seawater.png");
  shellImg = loadImage("chain.png");
  shell1Img = loadImage("shell1.png");
  shell2Img = loadImage("shell2.png");
  boyImg = loadImage("surfing boy.png");
  crabImg = loadImage("Shark.png");
  endImg=loadImage('gameOver.png')
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  path=createSprite(width/2,200);
  path.addImage(pathImg);
  path.velocityX = 4;

  edges = createEdgeSprites();
  shellG = new Group();
  crabG = new Group();
  
  boy = createSprite(width-100,height/2,20,20);
  boy.setCollider("rectangle",0,0,150,300);
  boy.debug = true;
  boy.addImage(boyImg);
 
}


function draw() { 
  background(52);

  if(gameState==PLAY){

    if(keyDown("up_arrow")){
      boy.y = boy.y - 10;
    }

    if(keyDown("down_arrow")){
      boy.y = boy.y + 10;
    }
    
    boy.collide(edges);

    if(path.x > width ){
      path.x = width/2;
    }

    // if(boy.isTouching(crab)){
    //   score = 0;
    // }

    createShell();
    createShell1();
    createShell2();
    createCrab();
    shellG.isTouching(boy,destroyShell)
    crabG.isTouching(boy,destroyCrab)
  }

  else if (gameState == END) {
    boy.addImage(endImg);
    boy.x = width/2;
    boy.y = height/2;
    boy.scale = 1;
    path.velocityX = 0;  
    crabG.setLifetimeEach(-1);
    shellG.setLifetimeEach(-1);  
    
    shellG.destroyEach();
    //shell1G.destroyEach();
    //shell2G.destroyEach();
    crabG.destroyEach();
    
    shellG.setVelocityYEach(0);
    //shell1G.setVelocityYEach(0);
    //shell2G.setVelocityYEach(0);
    crabG.setVelocityYEach(0);

    if(lives>0){
      gameState=PLAY
      
      
    }
  
  }

  drawSprites();
  textSize(30);
  fill("skyblue");
  text("Score : "+score,50,40);
  fill("skyblue");
  text("Lives : "+lives,250,40);
  
}

function destroyShell(shell,boy){
  shell.destroy();
  score = score + 20;
}

function destroyCrab(crab,boy){
  crab.destroy();
  lives = lives-1;
  score = 0;
  path.velocityx=0;
  if(lives==0){
    gameState=END;
  }
}

function createShell() {
    if (World.frameCount % 150 == 0) {
      var shell = createSprite(-5, Math.round(random(100, width-100), 10, 10));
      shell.addImage(shellImg);
      shell.scale=0.2;
      shell.velocityX = 5;
      shell.lifetime = 2000;
      shellG.add(shell);
    }
}

function createShell1() {
    if (World.frameCount % 180 == 0) {
      var shell1 = createSprite(-5,Math.round(random(100, width-100), 10, 10));
      shell1.addImage(shell1Img);
      shell1.scale=0.2;
      shell1.velocityX = 5;
      shell1.lifetime = 2000;
      shellG.add(shell1);
    }
}                

function createShell2() {
    if (World.frameCount % 120 == 0) {
      var shell2 = createSprite(-5,Math.round(random(100, width-100), 10, 10));
      shell2.addImage(shell2Img);
      shell2.scale=0.2;
      shell2.velocityX = 5;
      shell2.lifetime = 2000;
      shellG.add(shell2);
    }
}

function createCrab() {
    if (World.frameCount % 200 == 0) {
      var crab = createSprite(-5,Math.round(random(100, width-100), 10, 10));
      crab.addImage(crabImg);
      crab.scale=0.4;
      crab.velocityX = 5;
      crab.lifetime = 2000;
      crabG.add(crab);
    }
}

