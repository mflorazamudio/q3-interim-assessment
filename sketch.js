var x = 150;
var y =100;


function setup(){
  createCanvas(600, 400);
}

function draw(){
    background(50);
    
    for(var x = 50; x < 600; x +=100){
        bottom(x,300);
        display(x,300);
        
    }
    
    if(mouseIsPressed){
        bottom(mouseX,mouseY);
        display(mouseX,mouseY);
    }
    
    
  
}

function display(x, y){
   //pop
    noStroke();
    ellipse(x, y, 75, 75);
    fill(255);

}

function bottom(x, y){
    //the line
    rect(x-5, y-10, 10, 125);
    fill(66, 217, 244);
}


