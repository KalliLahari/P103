Webcam.set({
    width:350,
    height:350,
    image_format:'png',
    png_quality:100
});

camera=document.getElementById("camera");

Webcam.attach(camera);

function capture(){
    Webcam.snap(function(data_uri){
        document.getElementById("output").innerHTML="<img id='captue_img' src='"+data_uri+"'>";
    });
}

console.log("ml5 version: ",ml5.version);

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/VXaA8Pf23/model.json",modelLoaded);

function modelLoaded(){
    console.log("Model Loaded");
}