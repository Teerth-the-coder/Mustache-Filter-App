function preload() {
    mustache = loadImage('mustache2.png')
}

function setup() {
   canvas =  createCanvas(300,300)
   canvas.center()
   video = createCapture(VIDEO)
   video.size(300,300)
   video.hide()

   poseNet = ml5.poseNet(video, () => console.log("Model Loaded"))
    poseNet.on("pose", gotResults)
}

function draw() {
   image(video, 0,0,300,300)

   image(mustache, noseX - 20, noseY + 15, 30,30)
}

noseX = 0;
noseY = 0;

function gotResults(results) {
   console.log(results)
   noseX = results[0].pose.nose.x;
   noseY = results[0].pose.nose.y;


}
