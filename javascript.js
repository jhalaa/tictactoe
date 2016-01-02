var user = 1
var numberOfClicks = 0;
var painted = new Array();
var winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
window.onload = function() {
    for (var i = 0; i < 9; i++) {
        painted[i] = false;
    }
};

function canvasClicked(element) {

    var idOfElement = element.id;
    idOfElement = idOfElement.replace("canvas", "")

    if (painted[idOfElement] == false) {

        var cellToBeFilled = element.getContext("2d");
        if (user == 1) {
            drawX(cellToBeFilled);
            user = 2;
            painted[idOfElement] = 'x';
        }
        else {
            drawO(cellToBeFilled);
            user = 1;
            painted[idOfElement] = 'o';
        }
        numberOfClicks++;
        checkForWinners(painted[idOfElement]);
        if (numberOfClicks == 9) {
            alert("GAME OVER");
            playAgain();
        }
    }
}

function checkForWinners(symbol) {
    for (var a = 0; a < winningCombinations.length; a++) {
        if (painted[winningCombinations[a][0]] == symbol && painted[winningCombinations[a][1]] == symbol && painted[winningCombinations[a][2]] == symbol) {
            alert("yea! " + symbol + " won");
            playAgain();
        }
    }
}

function playAgain() {
    var yes = confirm("Do you want to play again?");
    if (yes == true) {
        alert("OK!May the best man win :p");
        location.reload(true);
    } else {
        alert("Buh bye...");
    }
}

function drawX(cellToBeFilled) {
    cellToBeFilled.beginPath();
    cellToBeFilled.moveTo(10, 10);
    cellToBeFilled.lineTo(40, 40);
    cellToBeFilled.moveTo(40, 10);
    cellToBeFilled.lineTo(10, 40);
    cellToBeFilled.stroke();
    cellToBeFilled.closePath();
}

function drawO(cellToBeFilled) {
    cellToBeFilled.beginPath();
    cellToBeFilled.arc(25, 25, 20, 0, Math.PI * 2, true);
    cellToBeFilled.stroke();
    cellToBeFilled.closePath();

}
