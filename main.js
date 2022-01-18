prediction1 = "";

Webcam.set({
    width:350,
    height:300,
    image_from:'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot() {

    Webcam.snap(function (date_uri){
    document.getElementById("result").innerHTML= "<img id='capture_image' src="+date_uri+">";
    })
}
console.log('ml5_version', ml5_version);

classifier = ml5.startClassifier("", modelLoaded);

function modelLoaded(){
    console.log('Model Loaded!');
}

function speak(){
var synth = window.seepchSythesis;
speak_date_1 = "The First Prediction is" + prediction_1;
var utterThis = new SpeechSynthesisUtterance(speak_date_1);
synth.speak(utterThis);
}