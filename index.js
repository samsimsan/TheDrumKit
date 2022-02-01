function PlayMusic(btnName) {
  switch (btnName) {
    case "w":
      var audio = new Audio('sounds/tom-4.mp3');
      audio.play();
      return 0;

    case "a":
      var audio = new Audio('sounds/tom-3.mp3');
      audio.play();
      return 0;
    case "s":
      var audio = new Audio('sounds/tom-2.mp3');
      audio.play();
      return 0;
    case "d":
      var audio = new Audio('sounds/tom-1.mp3');
      audio.play();
      return 0;
    case "j":
      var audio = new Audio('sounds/snare.mp3');
      audio.play();
      return 0;
    case "k":
      var audio = new Audio('sounds/kick-bass.mp3');
      audio.play();
      return 0;
    case "l":
      var audio = new Audio('sounds/crash.mp3');
      audio.play();
      return 0;
    default: return 1;
};
}

function buttonAnimation(currentkey){
  var activeButton = document.querySelector('.'+currentkey);
  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 200);
}

for(var i=0; i<document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click",function handleclicked() {
      var btnName = this.innerHTML;
      var retVal = PlayMusic(btnName);
      if (retVal == 0){
        buttonAnimation(btnName);
      }
  });
};

document.addEventListener("keydown", function (event) {
  var btnpressed = event.key;
  var retVal =PlayMusic(btnpressed);
  if (retVal == 0){
    buttonAnimation(btnpressed);
  }
});
