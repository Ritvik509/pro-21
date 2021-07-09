var canvas;
var music;
var surface1;
var surface2;
var surface3;
var surface4;
var box;

function preload(){
    music = loadSound("music.mp3");
   
}


function setup(){
    canvas = createCanvas(900,600);

    //create 4 different surfaces
   
    surface1 = createSprite(100,590,200,20)
    surface1.shapeColor = "blue";
    surface2 = createSprite(340,590,200,20)
    surface2.shapeColor = "orange";
    surface3 = createSprite(580,590,200,20)
    surface3.shapeColor = "purple";
    surface4= createSprite(820,590,200,20)
    surface4.shapeColor = "green";

    //create box sprite and give velocity
  box = createSprite(random(20,750),200,20,20);
  box.shapeColor = "White";
  box.velocityX = 10;
  box.velocityY = 10;
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges = createEdgeSprites()
    box.bounceOff(edges);
    if(box.bounceOff(surface1)){
        box.shapeColor="blue"

    }
    else if(box.bounceOff(surface2)){
        box.shapeColor="orange"
    }
    else if (box.bounceOff(surface3)){
        box.shapeColor="purple"
    }
    else if (box.bounceOff(surface4)){
        box.shapeColor="green"
    }
    

    //add condition to check if box touching surface and make it box
    drawSprites();
}
