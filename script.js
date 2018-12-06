
var myscore = 0;

function play() {
    document.getElementById("setup").style.display = "none";
    document.getElementById("play").style.display = "block";
    showImage("spaceship.png")
}

function end() {
    document.getElementById("play").style.display = "none";
    document.getElementById("end").style.display = "block";
}

function move (event) {
    var keyNum = event.keyCode;
    switch(keyNum) {
        case 32:
            fire();
            break;
        case 38:
            moveUp();
            break;
        case 40:
            moveDown();
            break;
        case 39:
            moveRight();
            break;
        case 37:
            moveLeft();
            break;
        default:
            break;
    }
}

function fire() {

}

function moveDown() {
    var spaceship = (document.getElementById("spaceship"));
    var bottom = spaceship.style.bottom;
    spaceship.style.bottom = Number(bottom.substring(0, bottom.length-2)) - 10 + "px";
}

function moveUp() {
    var spaceship = (document.getElementById("spaceship"));
    var bottom = spaceship.style.bottom;
    spaceship.style.bottom = Number(bottom.substring(0, bottom.length-2)) + 10 + "px";
}

function moveRight() {
    var spaceship = (document.getElementById("spaceship"));
    var left = spaceship.style.left;
    spaceship.style.left = Number(left.substring(0, left.length-2)) + 10 + "px";
}

function moveLeft() {
    var spaceship = (document.getElementById("spaceship"));
    var left = spaceship.style.left;
    spaceship.style.left = Number(left.substring(0, left.length-2))- 10 + "px";
}

this.end = function () {
    document.getElementById("play").style.display = "none";
    document.getElementById("end").style.display = "block";
    document.getElementById("playAgain").disabled = true;
}

this.showImage = function(imageUrl) {
	var img = document.createElement("IMG");
    img.src = "images/" + imageUrl;
    document.getElementById("spaceship").appendChild(img);
}

function listen() {
    document.addEventListener("keydown", move, true);
}

function score() {
    document.getElementById("score").innerHTML = myscore++;
}

window.setInterval(listen, 10);
window.setInterval(score, 10);




