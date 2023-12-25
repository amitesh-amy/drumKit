for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    //this.style.color = "white";
    var buttonInnerText = this.innerText
    playSound(buttonInnerText);
    buttonAnimate(buttonInnerText);
  });
}

document.addEventListener("keydown", function (event) {
  //console.log(event.key);
  playSound(event.key);
  buttonAnimate(event.key);
});

function playSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case "k":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "l":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    default:
      console.log(key);
      break;
  }
}

function buttonAnimate(charKey){
var currentButton = document.querySelector("."+ charKey);
currentButton.classList.add("pressed");

setTimeout(function () {
  currentButton.classList.remove("pressed");
},100)
}
