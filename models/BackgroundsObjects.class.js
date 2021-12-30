class BackgroundObjects extends MovableObject {
    width = 720;
    height = 480;

    /*imagePath = '../img/5.Fondo/Capas/3.Fondo3/1.png'; */

    constructor(imagePath, x) {
        super().loadImage(imagePath);
        this.x = x;
        this.y = 480 - this.height; //480-height
    }

}