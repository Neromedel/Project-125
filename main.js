noseX = 0;

noseY = 0;


leftX = 0;
rightX = 0;
difference = 0;




function preload() {

}

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(550, 500);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('Model is Loaded!');
}

function draw() {
    background('lightsalmon');
    textSize(difference);
    fill('#4CBB17');
    text('Adhvaith',50,400);
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("Nose X = "+noseX+" "+" Nose Y = "+noseY);

        leftX = results[0].pose.leftWrist.x;
        rightX = results[0].pose.rightWrist.x;
        difference = floor(leftX - rightX);
    }
}