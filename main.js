img = "";
status = "";
object = []

function preload(){
    img = loadImage('dog_cat.jpg');
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modeloaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function draw() {
    image(img, 0, 0, 640, 420);

    if(status != "")
    {
        document.getElementById("status").innerHTML = "Status : Object Detected";

        fill("#FF0000");
        percent = floor(objects[i].confidence * 100);
        text(object[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
        nofill();
        stroke("#FF0000");
        rect(object[i].x, objects[i].y, objects[i].width, objects[i].height);
    }
}

function modeloaded() {
    console.log("Model Loaded!")
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.log(error)
    }
    console.log(results);
    objects = results;
}

for (i = 0; i < objects.length; i++) {
    document.getElementById("status").innerHTML = "Status : Object Detected";

    fill("#FF0000");
    percent = floor(objects[i].confidence * 100);
    text(object[i].label + "" + percent + "%", objects[i].height);
    noFill();
    stroke("#FF0000");
    rect(object[i].x, objects[i].y, objects[i].width, objects[i].height);
}