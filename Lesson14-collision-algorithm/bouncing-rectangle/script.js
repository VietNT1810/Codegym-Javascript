var c = document.getElementById("canvas");
var blue = c.getContext("2d");
var red = c.getContext("2d");
var green = c.getContext("2d");
var black = c.getContext("2d");

//blue rect
blue.beginPath();
blue.fillStyle = "blue";
blue.fillRect(40, 50, 100, 50);

//red rect
// red.beginPath();
// red.fillStyle = "red";
// red.fillRect(200, 300, 100, 50);

//move rect
let width = c.width;
let height = c.height;

//setup blue rectangle
let blueX = 40;
let blueY = 50;
let blueXSpeed = 2;
let blueYSpeed = 2;

//setup red rectangle
let redX = 500;
let redY = 300;
let redXSpeed = 2;
let redYSpeed = 2;


function draw() {
    blue.beginPath();
    blue.fillStyle = "blue";
    blue.fillRect(blueX, blueY, 100, 50);

    red.beginPath();
    red.fillStyle = "red";
    red.fillRect(redX, redY, 100, 50);
}

function move() {
    blue.clearRect(blueX, blueY, 100, 50);
    red.clearRect(redX, redY, 100, 50);


    //change position blue
    if (blueX + 100 == width || blueX == 0) {
        blueXSpeed = -blueXSpeed;
    }

    if (blueY + 50 == height || blueY == 0) {
        blueYSpeed = -blueYSpeed;
    }

    blueX += blueXSpeed;
    blueY += blueYSpeed;

    //change position red
    if (redX + 100 == width || redX == 0) {
        redXSpeed = -redXSpeed;
    }


    if (redY + 50 == height || redY == 0) {
        redYSpeed = -redYSpeed;
    }

    redX += redXSpeed;
    redY += redYSpeed;

    //check if collision 
    if (blueX < redX + 100 &&
        blueX + 100 > redX &&
        blueY < redY + 50 &&
        blueY + 50 > redY
    ) {
        blueXSpeed = -blueXSpeed;
        blueYSpeed = blueYSpeed;
        redXSpeed = -redXSpeed;
        redYSpeed = redYSpeed;
    }
    
    draw();
    console.log(blueX);
    console.log(redX);
}
setInterval(move, 10);



// class Rectangle {
//     constructor(x, y, width, height, color) {
//         this.x = x;
//         this.y = y;
//         this.width = width;
//         this.height = height;
//         this.color = color;
//     }

//     draw(context) {
//         context.beginPath();
//         context.fillStyle = this.color;
//         context.fillRect(this.x, this.y, this.width, this.height);
//     }
// }
