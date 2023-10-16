ax=0;
ay=0;
random_number=1;
function preload(){
feliz=loadImage("icons8-feliz-100.png")
aro=loadImage("aro.png")
diablito=loadImage("diablito.png")


}
function setup(){
canvas=createCanvas(300,300);
canvas.center()
video=createCapture(VIDEO);
video.hide()
poseNet=ml5.poseNet(video,modelload)
poseNet.on("pose",gotposes)
}
function modelload(){
    console.log("modelo_cargado")
}
function gotposes(results){
    console.log(results)
    
    ax=results[0].pose.leftEye.x-250;
    ay=results[0].pose.leftEye.y-250;
    console.log(ax,ay)
}
function cambio(){
    random_number=Math.floor(Math.random()*2)
    console.log (random_number)
    
}
function draw() {
   image(video,0,0,300,300)
   if(random_number==1){
    image(aro,ax,ay,100,100)
    }else{
        image(diablito,ax,ay,100,70)
    }
}
function take_snapshot(){
    save("galleta.png")
}