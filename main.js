function setup(){
    canvas = createCanvas(400, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded());
    poseNet.on('pose', gotResult);
}

noseX=0;
noseY=0;

function modelLoaded(){
    console.log("poseNet is initialized!");
}
img = 0; 
function preload(){
img = loadImage('https://i.postimg.cc/3wbg3c8x/mustache.png');
}

function draw(){
    image(video, 0,0, 400, 400);
    image(img, noseX, noseY, 70, 40);
}

function gotResult(results){
    if(results.length>0){
        console.log(results);
        noseX = results[0].pose.nose.x - 135;
        noseY = results[0].pose.nose.y - 50;
        console.log("noseX = " + noseX + "noseY = " + noseY);
    }
}
