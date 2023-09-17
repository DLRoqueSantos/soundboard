const keys = document.querySelectorAll('.sound');
const instruments = document.querySelectorAll('#navigation>li>a');

/* click and play sound function*/
function clickSound(e){
  let soundKey = e.target.dataset['sound'];
  let audio = document.querySelector(`audio[data-sound="${soundKey}"]`);
  audio.currentTime = 0;
  audio.play();
}

/* Change between instruments by making the section visible and invisible */
function switchInstrument(e){
  e.preventDefault();
  let drumSection = document.querySelector('#drums');
  let violinSection = document.querySelector('#violin');
  let pianoSection = document.querySelector('#piano');
  let instrument = e.target.dataset['instrument'];
  if(instrument=="drums"){
    drumSection.style.display = "block";
    violinSection.style.display = "none";
    pianoSection.style.display = "none";
    document.getElementById("instrument_selected").innerHTML = "drum";
    return;
  }else if (instrument=="violin") {
    drumSection.style.display = "none";
    violinSection.style.display = "block";
    pianoSection.style.display = "none";
    document.getElementById("instrument_selected").innerHTML = "violin";
    return;
  }
  drumSection.style.display = "none";
  violinSection.style.display = "none";
  pianoSection.style.display = "block";
  document.getElementById("instrument_selected").innerHTML = "piano";
}


keys.forEach(function(key){
    key.addEventListener("click", clickSound);
});

instruments.forEach(function(instrument){
  instrument.addEventListener("click", switchInstrument);
});



/* if certain keys are pressed in the keyboard the specific instrument will play depending on the section that the user is on*/
document.addEventListener("keypress", function(event) {
var instrument_selected = document.getElementById("instrument_selected").innerHTML;
  if (event.keyCode == 53) {
      var audio = new Audio("./sounds/"+instrument_selected+"/5.wav");
      audio.play();
  }
  if (event.keyCode == 52) {
      var audio = new Audio("./sounds/"+instrument_selected+"/4.wav");
      audio.play();
  }
    if (event.keyCode == 51) {
        var audio = new Audio("./sounds/"+instrument_selected+"/3.wav");
        audio.play();
    }
    if (event.keyCode == 50) {
        var audio = new Audio("./sounds/"+instrument_selected+"/2.wav");
        audio.play();
    }
    if (event.keyCode == 49) {
        var audio = new Audio("./sounds/"+instrument_selected+"/1.wav");
        audio.play();
    }
})
