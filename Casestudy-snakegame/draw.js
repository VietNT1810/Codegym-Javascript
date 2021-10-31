let canvas = document.querySelector(".canvas");
let ctx = canvas.getContext("2d");
let scale = 10;

let rows = canvas.height / scale;
let columns = canvas.width / scale;

var snake;

function setup() {
    snake = new Snake();
    snake.draw();

    setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        snake.update();
        snake.draw();
    }, 250); //change snake speed
};

setup();

addEventListener('keydown', function (e) {
    console.log(e); //check keycode
    let direction = e.key.replace('Arrow', '');
    snake.changeDirection(direction);
});