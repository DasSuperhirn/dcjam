let gameState = "overworld";


//overworld variables
let seed = 0;

let overworldCoordsX = 0;
let overworldCoordsY = 0;

//inspector variables
let selectedStarX = 0;
let selectedStarY = 0;

//STAR STRUCTURE
//COLOR
//SIZE
//NAME


function setup(){
    cnv = createCanvas(1200,900);
    colorMode(HSB,255);
    noStroke();
    seed = random(1000000000000);
}

function draw(){
    background(0);
    noiseSeed(seed);
    if(gameState == "overworld"){
        background(20);
        for(let x = 0;x<20;x++){
            for(let y = 0;y<15;y++){
                fill(255);
                //STERNE
                if(noise((x+overworldCoordsX)/4,(y+overworldCoordsY)/3) >= 0.65){
                    //Star Seed
                    randomSeed(((y+overworldCoordsY) << 16 | (x+overworldCoordsX)) << (y+overworldCoordsY)*(x+overworldCoordsX));
                    fill(random(255),100,255);
                    ellipse(width/20*x+(width/20/2),height/15*y+(height/15/2),random(10,50));
                }
                //------
                //MOUSE
                    fill(0,0,255,1);
                    rect(round((mouseX-(width/20/2))/(width/20))*(width/20),round((mouseY-(height/15/2))/(height/15))*(height/15),(width/20),(height/15));
                    //if(mouseClicked()){
                        //getStar(round((mouseX-(width/20/2))/(width/20))*(20),round((mouseY-(height/15/2))/(height/15))*(15));
                    //}
                //------
                fill(0,0,255);
                rect(0,height/15*y,width,2);
            }
            fill(0,0,255);
            rect(width/20*x,0,2,height);
        }
    }
    if(gameState == "inspector"){
        randomSeed((selectedStarY << 16 | selectedStarX) << selectedStarY*selectedStarX);
        fill(random(255),100,255);
        ellipse(width/2,height/2,random(100,500));
        textSize(40);
        text("P- "+int(random(1000000,999999999)),20,40);

        stroke(0,0,255);
        strokeWeight(5);
        noFill();
        rect(width/2-250,height/2-250,500,500);
        noStroke();
    }
}

function getStar(x, y){
    randomSeed(((y+overworldCoordsY) << 16 | (x+overworldCoordsX)) << (y+overworldCoordsY)*(x+overworldCoordsX));
    let color = random(255);
    let size = random(10,50);
    //console.log((x+overworldCoordsX)+" - "+(y+overworldCoordsY)+" + color: "+color);
    //console.log((x+overworldCoordsX)+" - "+(y+overworldCoordsY)+" + size: "+size);

}

function mouseClicked(){

    if(gameState == "overworld"){
    getStar(round((mouseX-(width/20/2))/(width/20)),round((mouseY-(height/15/2))/(height/15)));
    selectedStarX = round((mouseX-(width/20/2))/(width/20)) + overworldCoordsX;
    selectedStarY = round((mouseY-(height/15/2))/(height/15)) + overworldCoordsY;
    gameState = "inspector";
    }
    else if(gameState == "inspector"){

        gameState = "overworld";
    }
}
window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
      return;
    }
if(gameState == "overworld"){ 
    switch (event.key) {
        /*case "ArrowDown":
            overworldCoordsY+=1;
            break;
        case "ArrowUp":
            overworldCoordsY-=1;
            break;
        case "ArrowLeft":
            overworldCoordsX-=1;
            break;
        case "ArrowRight":
            overworldCoordsX+=1;
            break;*/
        case "w":
            overworldCoordsY-=1;
            break;
        case "a":
            overworldCoordsX-=1;
            break;
        case "s":
            overworldCoordsY+=1; 
            break;
        case "d":
            overworldCoordsX+=1;
            break;
        case " ":
            break;
        default:
        return;
    }
}
  
    event.preventDefault();
  }, true);