moustacheX = 0;
moustacheY = 0;

function preload() {
    moustache = loadImage('https://i.postimg.cc/prkMPw6P/moustache.png');
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results) 
{
   if(results.length > 0)
   {
       console.log(results);
       moustacheX =  results[0].pose.nose.x;
       moustacheY =  results[0].pose.nose.y;
       console.log("moustache x = " + moustacheX);
       console.log("moustache y = " + moustacheY);
   }
}

function modelLoaded() {
    console.log('PoseNet is Initialized');
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(moustache, moustacheX - 15, moustacheY + 20, 30, 30);
}

function take_snapshot() {
    save('myFilterImage.png');
}