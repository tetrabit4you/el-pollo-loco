class BackgroundsObjects extends MovableObject {
    x = 0;
    h = 0;
    width = 720;
    height = 300;

    imagePath = 'img/5.Fondo/1.png';

    constructor(imagePath) {
        super().loadImage(imagePath);
    }

}