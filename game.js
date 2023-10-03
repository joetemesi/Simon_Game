var userClickedPattern = [];
var gamePattern = [];
var buttonColours = ['red', 'blue', 'green', 'yellow'];

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    return buttonColours[randomNumber];
}

var randomChosenColour = nextSequence();
gamePattern.push(randomChosenColour);

switch (randomChosenColour) {
    case "blue":
        var blue = $("#" + randomChosenColour);
        animationButton(randomChosenColour);
        break;
    case "green":
        var green = $("#" + randomChosenColour);
        animationButton(randomChosenColour);
        break;
    case "red":
        var red = $("#" + randomChosenColour);
        animationButton(randomChosenColour);
        break;
    case "yellow":
        var yellow = $("#" + randomChosenColour);
        animationButton(randomChosenColour);
        break; // Add 'break' to exit the 'switch'
    default:
        // Code to be executed if expression doesn't match any case
        break; // Add 'break' for the 'default' case
}

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
    console.log(userClickedPattern);
});