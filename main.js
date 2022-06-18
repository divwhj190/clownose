
var noseX=0;
var noseY=0;

function preload(){
clownnose=loadImage('https://i.postimg.cc/8CkgvmqR/nose-removebg-preview.png');

}
function setup(){
canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();
poseNet=ml5.poseNet(video,modelLoaded);     
poseNet.on('pose',gotPoses);
}
function draw(){
image(video,0,0,300);
//fill(255,0,0);
//stroke(255,0,0);
//circle(noseX,noseY,20);
image(clownnose,noseX,noseY,30,30);

}
function takeSnapshot(){
    save('filterImage.jpg');

}
function modelLoaded(){
    console.log("poseNet is loaded");
    
}
function gotPoses(results){
if(results.length>0){
    console.log(results);
    console.log("nosex="+results[0].pose.nose.x);
    console.log("nosey="+results[0].pose.nose.y);
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
}
}