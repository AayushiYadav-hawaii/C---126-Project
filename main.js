function setup(){
    canvas=createCanvas(600, 500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
  /*  postNet=ml5.postNet(video, modelLoaded);
    postNet.on('pose', gotPoses); */
}
/* function modelLoaded(){
    console.log("Model is Loaded");
} */
function draw(){
image(video, 0, 0, 600, 500);
stroke('#c5e6d9');
fill('#ffc7c7');
}
rwX = 0;
rwY = 0;
lwX = 0;
lwY = 0;

leftscore = 0;
rightscore = 0;