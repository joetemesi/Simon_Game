var userClickedPattern = [];
var gamePattern = [];
var buttonColours = ['red', 'blue', 'green', 'yellow'];

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    return buttonColours[randomNumber];
}

// var randomChosenColour = nextSequence();
// gamePattern.push(randomChosenColour);

var hasOperationOccurred = false; //check key press number

$(document).keydown(function(event){ //key down event listener
    if (!hasOperationOccurred){
        var randomChosenColour = nextSequence();
    gamePattern.push(randomChosenColour); 
    console.log(randomChosenColour)

    switch (randomChosenColour) {
        case "blue":
            var blue = $("#" + randomChosenColour);
            animationButton(randomChosenColour);
            playSound(randomChosenColour);
            break;
        case "green":
            var green = $("#" + randomChosenColour);
            animationButton(randomChosenColour);
            playSound(randomChosenColour);
            break;
        case "red":
            var red = $("#" + randomChosenColour);
            animationButton(randomChosenColour);
            playSound(randomChosenColour);
            break;
        case "yellow":
            var yellow = $("#" + randomChosenColour);
            animationButton(randomChosenColour);
            playSound(randomChosenColour);
            break; // Add 'break' to exit the 'switch'
        default:
            // Code to be executed if expression doesn't match any case
            break; // Add 'break' for the 'default' case
    }
    hasOperationOccurred = true;
    }

})
  




function animationButton(pressedKey) {
    var pressedKeyButton = $("#" + pressedKey);
    pressedKeyButton.addClass("pressed");

    setTimeout(function () {
        pressedKeyButton.removeClass("pressed");
    }, 100);
}

$(".btn").click(function(){ //handler funxtion store id of clicked button
    var userChosenColour = $(this).attr('id');
    userClickedPattern.push(userChosenColour)
    var lastElement = userClickedPattern[userClickedPattern.length - 1];
    playSound(lastElement);
    console.log(userClickedPattern);
});

function playSound(buttonColor) {
    var audio = new Audio("sounds/" + buttonColor + ".mp3");
    audio.play();
}