var userClickedPattern = [];
var gamePattern = [];
var buttonColours = ['red', 'blue', 'green', 'yellow'];
var documentHeaderLevel = 0;
var hasOperationOccurred = false; //check key press number

function nextSequence() {
    userClickedPattern = [];
    var randomNumber = Math.floor(Math.random() * 4);
    documentHeaderLevel = documentHeaderLevel + 1;
    var documentHeader = $("#level-title"); // Use # for ID
    documentHeader.text("Level " + documentHeaderLevel);
    return buttonColours[randomNumber];
}

// var randomChosenColour = nextSequence();
// gamePattern.push(randomChosenColour);

$(document).keydown(function(event){ //key down event listener
    if (!hasOperationOccurred){
        var randomChosenColour = nextSequence();
    gamePattern.push(randomChosenColour);
    userClickedPattern.push(randomChosenColour)
    console.log(gamePattern[gamePattern.length - 1]);

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
    nextSequence();
    var userChosenColour = $(this).attr('id');
    userClickedPattern.push(userChosenColour);
    var lastElement = userClickedPattern[userClickedPattern.length - 1];
    playSound(lastElement);
    checkAnswer(userClickedPattern.length - 1) /// push index of the last answer the last answer.

    console.log(gamePattern[gamePattern.length - 1]); //ok gamepattern
   console.log(userClickedPattern.length - 1); //ok userclicked pattern
});

function playSound(buttonColor) {
    var audio = new Audio("sounds/" + buttonColor + ".mp3");
    audio.play();
}

function checkAnswer(currentLevel){ //check if the most recent user answer is the same as the game pattern
    var gamePattern1 = gamePattern[gamePattern.length-1];
    var userClickedPattern1 = userClickedPattern[currentLevel];
    if(userClickedPattern1 == gamePattern1){
        console.log("success");
    } else {
        console.log("fail");
    }
}