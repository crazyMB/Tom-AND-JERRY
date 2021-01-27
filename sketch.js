var cat,mouse,garden;
var catImg2,catImg3,catImg1,catImg4,mouseImg1,mouseImg2,mouseImg3,mouseImg4,gardenImg,catLastImage;


function preload() {
    //load the images here


    catImg1 = loadImage("images/cat1.png");
    catImg2 = loadAnimation("images/cat2.png","images/cat3.png");
    catImg3 = loadImage("images/cat4.png");
    mouseImg1 = loadImage("images/mouse1.png");
    mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseImg3 = loadImage("images/mouse4.png");
    gardenImg = loadImage("images/garden.png");
}

function setup(){
    createCanvas(1000,800);


    //create tom and jerry sprites here

    cat = createSprite(870,600);
    cat.addImage(catImg1);
    cat.scale = 0.1;
    
     mouse = createSprite(200,600,50,50);
     mouse.addAnimation(mouseImg2);
     mouse.scale = 0.1;

    

}

function draw() {

    background(gardenImg);
    
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        cat.addAnimation("catRunning",catImg3);
        cat.changeAnimation("catRunning");
        cat.velocityX = 0;
    }


    drawSprites();
}



function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
      cat.velocityX = -5;
      cat.addAnimation("catRunning",catImg2);
      cat.changeAnimation("catRunning");
  }

}
