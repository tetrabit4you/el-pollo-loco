class MovableObject {
    x;
    y;
    img;



    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    moveRight() {
        console.log('moving right');
    }
    moveLeft() {
        console.log('moving left');
    }
}