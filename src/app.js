//canvas template
//based on spicy yoghurt tutorials
//https://spicyyoghurt.com/game-development-tutorials

//***************************************/

"use strict";
let canvas;
let context;
window.onload = init();

function isColliding(a, b) {
    let r = false;
    if ((a.x >= b.x && a.x <= b.x + b.xSize) || (a.x + a.xSize >= b.x && a.x + a.xSize <= b.x + b.xSize)) {
        if ((a.y >= b.y && a.y <= b.y + b.xSize) || (a.y + a.ySize >= b.y && a.y + a.ySize <= b.y + b.ySize)) {
            r = true;
        }
    }
    return r;
}

class Keyboard {
    constructor(left, right, space) {
        this.left = false;
        this.right = false;
        this.up = false;
        this.down = false;
        this.space = false;
    }
}
let key = new Keyboard;

}
function init() {
    // Get a reference to the canvas
    canvas = document.getElementById('canvas');
    context = canvas.getContext('2d');
    window.requestAnimationFrame(gameLoop);
    document.addEventListener("keydown", keyboardDown);
    document.addEventListener("keyup", keyboardUp);
}
function gameLoop(timeStamp) {
    clearCanvas();

    window.requestAnimationFrame(gameLoop);
}
function clearCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}
function keyboardDown(e) { //when a key is pressed  
    console.log(e.keyCode);
    switch (e.keyCode) {
        case (37)://left
            key.left = true;
            break;
        case (39)://right
            key.right = true;
            break;
        case (38)://up
            key.up = true;
            break;
        case (40)://down
            key.down = true;
            break;
        case (32):
            key.space = true;
            break;
    }
}
function keyboardUp(e) { //when a key is unpressed  
    switch (e.keyCode) {
        case (37)://left
            key.left = false;
            break;
        case (39)://right
            key.right = false;
            break;
        case (38)://up
            key.up = false;
            break;
        case (40)://down
            key.down = false;
            break;
        case (32):
            key.space = false;
            break;
    }
}