var x = 150;
var y =100;

function setup(){
  createCanvas(600, 400);
}

function draw(){
    background(50);
    bottom();
    display();
    
  
}

function display(){
   //pop
    noStroke();
    ellipse(x+100, y+75, x-75, y-25);
    fill(255);

}

function bottom(){
    //the line
    rect(x+97, y+65, 10, 125);
    fill(66, 217, 244);
}


