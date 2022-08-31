img="";

function preload(){
    img=loadImage('Vishnu.jpg');
}

function setup(){
    canvas=createCanvas(600,400);
    canvas.center();

}

function draw(){
    image(img,0,0,600,400);
    fill("red");
    text("god",45,75);
    noFill();
    stroke("brown");
    rect(30,60,450,300);

}