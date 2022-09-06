img="";

function preload(){
    img=loadImage('Elephant.jpg');
}

function setup(){
    canvas=createCanvas(600,400);
    canvas.center();
    object_detector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting objects";

}

function modelLoaded(){
    console.log("modelLoaded");
    status=true;
    object_detector.detect(img,gotResult);


}

function gotResult(error,results){
    if(error){
        console.log(error);
    }
    console.log(results);
    

}

function draw(){
    image(img,0,0,600,400);
    fill("red");
    text("baby elephant",45,190);
    noFill();
    stroke("brown");
    rect(25,200,300,200);
    text("Adult elephant",320,120);
    fill("blue");
    noFill();
    stroke("yellow");
    rect(300,90,200,450);

}