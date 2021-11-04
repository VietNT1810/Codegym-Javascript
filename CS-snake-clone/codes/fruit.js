class Fruit {
    constructor() {
        this.x;
        this.y;
        this.spriteWidth = 320;
        this.spriteHeight = 256;
    }

    randomSpawn() {
        this.x = (Math.floor(Math.random() * rows - 1) + 1) * scale;
        this.y = (Math.floor(Math.random() * columns - 1) + 1) * scale;
        // console.log(this.x, this.y);
    }

    draw() {
        ctx.fillRect(this.x, this.y, scale, scale);
        // ctx.drawImage(fruitImg, this.x, this.y, scale, scale);
        // context.drawImage(img,sx,sy,swidth,sheight,x,y,width,height);
        // ctx.drawImage(fruitImg2, 0, 64 * 3, 64, 64, this.x, this.y, scale, scale);
    }
}

let fruitImg2 = new Image();
fruitImg2.src='../images/snake-graphics.png';


