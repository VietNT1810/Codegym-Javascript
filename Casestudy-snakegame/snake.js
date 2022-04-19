class Snake {
    constructor() {
        this.x = 200;
        this.y = 200;
        this.xSpeed = scale;
        this.ySpeed = 0;
        this.total = 2;
        this.tail = [];
        this.gameOver = document.getElementById('gameOver');

        this.sxHead = 64 * 4;
        this.syHead = 0;
    }

    draw() {
        for (let i = 0; i < this.tail.length; i++) {
            // ctx.fillRect(this.tail[i].x, this.tail[i].y, scale, scale);
            // console.log(this.tail.length);
            // console.log('i: ' + i);
            let segment = this.tail[i];
            let segX = segment.x;
            let segY = segment.y;
            let tx;
            let ty;
            if (i == this.tail.length - 1) {
                //head - Determine the correct image 
                var previousSegment = this.tail[i - 1];
                if (previousSegment.y < segY) {
                    // Up
                    tx = 4; ty = 1;
                } else if (previousSegment.x > segX) {
                    // Right
                    tx = 3; ty = 1;
                } else if (previousSegment.y > segY) {
                    // Down
                    tx = 3; ty = 0;
                } else if (previousSegment.x < segX) {
                    // Left
                    tx = 4; ty = 0;
                }
            } else if (i == 0) {
                var nextSegment = this.tail[i + 1];
                //tail - Determine the correct image
                if (segY > nextSegment.y) {
                    // Up
                    tx = 3; ty = 2;
                } else if (segX < nextSegment.x) {
                    // Right
                    tx = 4; ty = 2;
                } else if (segY < nextSegment.y) {
                    // Down
                    tx = 4; ty = 3;
                } else if (segX > nextSegment.x) {
                    // Left
                    tx = 3; ty = 3;
                }
            } else {
                //body - Determine the correct image
                var previousSegment = this.tail[i - 1]; // Previous segment
                var nextSegment = this.tail[i + 1]; // Next segment
                if (nextSegment.x < segX && previousSegment.x > segX || previousSegment.x < segX && nextSegment.x > segX) {
                    // Horizontal Left-Right
                    tx = 1; ty = 0;
                } else if (previousSegment.x < segX && nextSegment.y > segY || nextSegment.x < segX && previousSegment.y > segY) {
                    // Angle Left-Down
                    tx = 2; ty = 0;
                } else if (previousSegment.y < segY && nextSegment.y > segY || nextSegment.y < segY && previousSegment.y > segY) {
                    // Vertical Up-Down
                    tx = 2; ty = 1;
                } else if (previousSegment.y < segY && nextSegment.x < segX || nextSegment.y < segY && previousSegment.x < segX) {
                    // Angle Top-Left
                    tx = 2; ty = 2;
                } else if (previousSegment.x > segX && nextSegment.y < segY || nextSegment.x > segX && previousSegment.y < segY) {
                    // Angle Right-Up
                    tx = 0; ty = 1;
                } else if (previousSegment.y > segY && nextSegment.x > segX || nextSegment.y > segY && previousSegment.x > segX) {
                    // Angle Down-Right
                    tx = 0; ty = 0;
                }
            }

            // context.drawImage(img,sx,sy,swidth,sheight,x,y,width,height);
            ctx.drawImage(snakeImg, tx * 64, ty * 64, 64, 64, this.tail[i].x, this.tail[i].y, scale, scale);
        }
    }

    update() {
        //update snake tail
        for (let i = 0; i < this.tail.length - 1; i++) {
            this.tail[i] = this.tail[i + 1];
            console.log(this.tail);
        }

        this.tail[this.total - 1] = {
            x: this.x,
            y: this.y
        }

        //let snake run 
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        //let snake hit the wall
        if (this.x >= canvas.width) {
            this.gameOver.style.visibility = "visible";
        }
        else if (this.x < 0) {
            this.gameOver.style.visibility = "visible";
        }
        else if (this.y >= canvas.height) {
            this.gameOver.style.visibility = "visible";
        }
        else if (this.y < 0) {
            this.gameOver.style.visibility = "visible";
        }
    }

    changeDirection(direction) {
        switch (direction) {
            case 'Up':
                this.xSpeed = 0;
                this.ySpeed = -scale;
                break;
            case 'Down':
                this.xSpeed = 0;
                this.ySpeed = scale;
                break;
            case 'Left':
                this.xSpeed = -scale;
                this.ySpeed = 0;
                break;
            case 'Right':
                this.xSpeed = scale;
                this.ySpeed = 0;
                break;
            default:
                break;
        }
    }

    eat(fruit) {
        if (this.x === fruit.x && this.y === fruit.y) {
            this.total++;
            sound.play();
            return true;
        } else {
            return false;
        }
    }

    checkSelfCollision() {
        for (let i = 0; i < this.tail.length; i++) {
            if (this.x === this.tail[i].x && this.y === this.tail[i].y) {
                this.x = this.speed;
                this.gameOver.style.visibility = "visible";
            }
        }
    }
}

