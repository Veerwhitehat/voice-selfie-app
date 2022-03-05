var sr= window.webkitSpeechRecognition;
var r= new sr();

function start(){
    document.getElementById("text_area").innerHTML="";
    r.start()
}

r.onresult= function run(event){
    console.log(event);
    content= event.results[0][0].transcript;
    console.log(content);
    if (content ==" Iron Man selfie") {

        console.log(" Iron Man selfie ---");
       speak() 
    }
    document.getElementById("text_area").innerHTML=content;

    

    setTimeout(function()  {
        take_snapshot;
        save();
    }, 5000);
}
function speak(){
    synth= window.speechSynthesis;
    speech= "taking your Iron Man selfie in 5 seconds";
    utter = new SpeechSynthesisUtterance(speech);
    synth.speak(utter);
    setTimeout();
    Webcam.attach(camera);   
}
Webcam.set({
    width:365,
    height:250,
    image_format:"jpeg",
    jpeg_quality:100,
});
camera=document.getElementById("camera");
function take_snapshot(){
    Webcam.snap(function (data_uri) {
      document.getElementById("result").innerHTML= '<img id="selfie_image" src="'+data_uri+'">';

    })
}

function save()
{
    link= document.getElementById("link");
    image = document.getElementById("selfie_image").src;
    link.href = image;
    link.click();
}
 