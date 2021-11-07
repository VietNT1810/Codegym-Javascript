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

        this.sxTail = 64;
        this.syTail = 64;

        this.tx = 0;
        this.ty = 0;
    }

    draw() {
        ctx.fillStyle = "#487EFB";

        for (let i = 0; i < this.tail.length; i++) {
            // ctx.fillRect(this.tail[i].x, this.tail[i].y, scale, scale);
            // console.log(this.tail.length);
            // console.log('i: ' + i);
            let segment = this.tail[i];
            let segx = segment.x;
            let segy = segment.y;
            if (i == this.tail.length - 1) {
                //head - Determine the correct image 
                var pseg = this.tail[i - 1];
                if (pseg.y < segy) {
                    // Up
                    this.tx = 4; this.ty = 1;
                } else if (pseg.x > segx) {
                    // Right
                    this.tx = 3; this.ty = 1;
                } else if (pseg.y > segy) {
                    // Down
                    this.tx = 3; this.ty = 0;
                } else if (pseg.x < segx) {
                    // Left
                    this.tx = 4; this.ty = 0;
                }
            } else if (i == 0) {
                var nseg = this.tail[i + 1];
                //tail - Determine the correct image
                if (segy > nseg.y) {
                    // Up
                    this.tx = 3; this.ty = 2;
                } else if (segx < nseg.x) {
                    // Right
                    this.tx = 4; this.ty = 2;
                } else if (segy < nseg.y) {
                    // Down
                    this.tx = 4; this.ty = 3;
                } else if (segx > nseg.x) {
                    // Left
                    this.tx = 3; this.ty = 3;
                }
            } else {
                //body - Determine the correct image
                var pseg = this.tail[i - 1]; // Previous segment
                var nseg = this.tail[i + 1]; // Next segment
                if (nseg.x < segx && pseg.x > segx || pseg.x < segx && nseg.x > segx) {
                    // Horizontal Left-Right
                    this.tx = 1; this.ty = 0;
                } else if (pseg.x < segx && nseg.y > segy || nseg.x < segx && pseg.y > segy) {
                    // Angle Left-Down
                    this.tx = 2; this.ty = 0;
                } else if (pseg.y < segy && nseg.y > segy || nseg.y < segy && pseg.y > segy) {
                    // Vertical Up-Down
                    this.tx = 2; this.ty = 1;
                } else if (pseg.y < segy && nseg.x < segx || nseg.y < segy && pseg.x < segx) {
                    // Angle Top-Left
                    this.tx = 2; this.ty = 2;
                } else if (pseg.x > segx && nseg.y < segy || nseg.x > segx && pseg.y < segy) {
                    // Angle Right-Up
                    this.tx = 0; this.ty = 1;
                } else if (pseg.y > segy && nseg.x > segx || nseg.y > segy && pseg.x > segx) {
                    // Angle Down-Right
                    this.tx = 0; this.ty = 0;
                }
            }

            ctx.drawImage(snakeImg, this.sxTail * this.tx, this.syTail * this.ty, 64, 64, this.tail[i].x, this.tail[i].y, scale, scale);
        }
        // ctx.fillRect(this.x, this.y, scale, scale);

        // context.drawImage(img,sx,sy,swidth,sheight,x,y,width,height);
        // ctx.drawImage(snakeImg, this.sxHead, this.syHead, 64, 64, this.x, this.y, scale, scale);
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

        //let snake go through wall
        if (this.x > canvas.width) {
            this.x = 0;
        }
        else if (this.x < 0) {
            this.x = canvas.width;
        }
        else if (this.y > canvas.height) {
            this.y = 0;
        }
        else if (this.y < 0) {
            this.y = canvas.height;
        }
    }

    changeDirection(direction) {
        switch (direction) {
            case 'Up':
                this.xSpeed = 0;
                this.ySpeed = -scale * 1;

                this.sxHead = 64 * 3;
                this.syHead = 0;
                break;
            case 'Down':
                this.xSpeed = 0;
                this.ySpeed = scale;

                this.sxHead = 64 * 4;
                this.syHead = 64;
                break;
            case 'Left':
                this.xSpeed = -scale;
                this.ySpeed = 0;

                this.sxHead = 64 * 3;
                this.syHead = 64;
                break;
            case 'Right':
                this.xSpeed = scale;
                this.ySpeed = 0;

                this.sxHead = 64 * 4;
                this.syHead = 0;
                break;
            default:
                break;
        }
    }

    eat(fruit) {
        if (this.x === fruit.x && this.y === fruit.y) {
            this.total++;
            sound.play();
            this.tx = 2;
            this.ty = 2;
            return true;
        } else {
            return false;
        }
    }

    checkCollision() {
        for (let i = 0; i < this.tail.length; i++) {
            if (this.x === this.tail[i].x && this.y === this.tail[i].y) {
                this.x = this.speed;
                this.gameOver.style.visibility = "visible";
            }
        }
    }
}

let snakeImg = new Image();
snakeImg.src = '../images/snake-graphics-1.png';