function setup(){
    canvas = createCanvas(380, 310);
    canvas.position(530, 400);
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/v_sl95BzE/model.json", function(){
        console.log("Model has Loaded");
    });
}
function draw(){
    image(video, 0, 0, 380, 310);
    classifier.classify(video, gotResult);
}
function gotResult(error, result){
    if(error){
        console.log("Error: ", error)
    }
    else{
        console.log(result)
        document.getElementById("object-name-span").innerHTML = result[0].label;
        document.getElementById("object-accuracy-span").innerHTML = result[0].confidence;
    }
}