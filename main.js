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

    Webcam.snap(function (data_uri){
    document.getElementById("result").innerHTML= "<img id='capture_image' src="+date_uri+">";
    })
}
console.log('ml5_version', ml5_version);

classifier = ml5.startClassifier("https://teachablemachine.withgoogle.com/models/77ZWuysd_/model.json", modelLoaded);

function modelLoaded(){
    console.log('Model Loaded!');
}

function speak(){
var synth = window.seepchSythesis;
speak_date_1 = "The First Prediction is" + prediction_1;
var utterThis = new SpeechSynthesisUtterance(speak_date_1);
synth.speak(utterThis);
}
function check(){

img = document.getElementById('capture_image');
classifier.classify(img, gotResult);

}

function gotResult(error, result){
if(error){
    console.log(error);
}

else{
    console.log(result);
    document.getElementById("result_emotion_name").innerHTML = results[0].lable;
    prediction_1 = results[0].lable;
  speak()
  if (result[0].lable =="awsome"){
      document.getElementById('updata_gesture').innerHTML = "&#128076;";
  }
  if(result[0].lable == "Thmu's up"){
      document.getElementById('updata_gesture').innerHTML = "&#128077;";
  }
  if(result[0].lable == "V"){
      document.getElementById('updata_gesture').innerHTML = "&#9996;";
}
}
}