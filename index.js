// Figure out the number of Buttons:

var numOfButtons = document.querySelectorAll(".drum").length;

// Loop through the buttons to make them all trigger an alert:

for (var i = 0; i < numOfButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    
        var buttonInnerHTML = this.innerHTML; 
        
        playSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);
    });
}


document.addEventListener("keydown", function(event){
    playSound(event.key);
    buttonAnimation(event.key);
    console.log(event);
    });

// Function to play a Sound depending on the key:
 
function playSound(key) {
    switch (key) {
        case "w":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "a":
            var tom2 = new Audio ("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var tom1 =  new Audio("sounds/tom-1.mp3");
            tom1.play(); 
            break;

        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "l":
            var  kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        default: console.log(key);
    }
} 

// Create Function to animate the button:
function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    
    // Add the .pressed class to the button:
    activeButton.classList.add("pressed");

    // Set a timeout of 0.1s and then remove that class from the button:
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}

// Constructor Function for the Keys:

// function Keys (keyId, sound){
//     this.keyId = keyId;
//     this.sound = sound;
// }

// var keyW = new Keys (13, "sounds/tom-1.mp3");
// var keyA = new Keys (11, "sounds/tom-2.mp3")



        // var audio = new Audio("sounds/tom-1.mp3");
        // audio.play();

