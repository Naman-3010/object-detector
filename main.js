img="";
object_detector="";
status="";
objects=[];
function preload(){
    img=loadImage('Elephant.jpg');
}

function setup(){
    canvas=createCanvas(900,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(900,500);
    video.hide();
    
}

function start(){
    object_detector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting objects";

}

function modelLoaded(){
    console.log("modelLoaded");
    status=true;
    


}

function gotResult(error,results){
    if(error){
        console.log(error);
    }
    console.log(results);
    objects=results;


}
function draw(){
    image(video,0,0,900,500);
    if(status != "") {
        r=random(255);
        g=random(255);
        b=random(255);
        object_detector.detect(video,gotResult);
        for (var i = 0; i < objects.length; i++) { 
        document.getElementById("status").innerHTML = "Status : Object Detected";
        document.getElementById("number_of_objects").innerHTML="Number of objects detected is:"+objects.length;
        fill(r, g, b); percent = floor(objects[i].confidence * 100); 
        text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15); 
        noFill(); stroke(r, g, b); rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height); } }



}