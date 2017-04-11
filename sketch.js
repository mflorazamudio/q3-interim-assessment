var x = 150;
var y =100;

function setup(){
  createCanvas(600, 400);
}

function draw(){
    background(50);
    display();
    
  
}

function display(x, y){
   //pop
    noStroke();
    ellipse(x+100, y+75, x-75, y-25);
    fill(255);

     //the line
    rect(x+97, y+65, 10, 125);
    fill(66, 217, 244);
}




