let gameState = "overworld";


//overworld variables
let seed = 69;

let overworldCoordsX = 0;
let overworldCoordsY = 0;


function setup(){
    cnv = createCanvas(1200,900);
    colorMode(HSB,255);
    noStroke();
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
                if(noise((x+overworldCoordsX)/4,(y+overworldCoordsY)/3) >= 0.7){
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
}

function getStar(x, y){
    randomSeed(((y+overworldCoordsY) << 16 | (x+overworldCoordsX)) << (y+overworldCoordsY)*(x+overworldCoordsX));
    let color = random(255);
    let size = random(10,50);
    console.log((x+overworldCoordsX)+" - "+(y+overworldCoordsY)+" + color: "+color);
    console.log((x+overworldCoordsX)+" - "+(y+overworldCoordsY)+" + size: "+size);

}

function mouseClicked(){
    getStar(round((mouseX-(width/20/2))/(width/20)),round((mouseY-(height/15/2))/(height/15)));
}
window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
      return;
    }
  
    switch (event.key) {
      case "ArrowDown":
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
        break;
      case " ":
          break;
      default:
        return;
    }
  
    event.preventDefault();
  }, true);