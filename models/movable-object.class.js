class MovableObject {
    x;
    y;
    img;
    imageCache = {};
    speed = 0.15;
    otherDirection = false;


    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }
    moveRight() {
        console.log('moving right');
    }
    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 25);
    }

}