class Character extends MovableObject {

    x = 30;
    y = 140;
    img;
    height = 300;
    width = 120;
    speed = 10;
    IMAGES_WALKING = [
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-22.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-23.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-24.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-25.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-26.png'
    ];
    world;

    currentImage = 0;
    ImageCache = [];
    constructor() {
        super().loadImage('img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png')
        this.loadImages(this.IMAGES_WALKING);

        this.animate();
    }

    animate() {
        setInterval(() => {
            if (this.world.keyboard.RIGHT) {
                this.x += this.speed;
                this.otherDirection = false;

                //Walk animation
                let path = this.IMAGES_WALKING[this.currentImage];
                this.img = this.imageCache[path];
                this.currentImage++;
                if (this.currentImage == 6) {
                    this.currentImage = 0;
                }
            }
            if (this.world.keyboard.LEFT) {
                this.x -= this.speed;
                this.otherDirection = true;
                //Walk animation
                let path = this.IMAGES_WALKING[this.currentImage];
                this.img = this.imageCache[path];
                this.currentImage++;
                if (this.currentImage == 6) {
                    this.currentImage = 0;
                }
            }
            if (this.world.keyboard.UP) {
                this.y -= 50;
                setTimeout(() => {
                    this.y += 50;
                }, 500);
                this.otherDirection = false;
                //Walk animation
                let path = this.IMAGES_WALKING[this.currentImage];
                this.img = this.imageCache[path];
                this.currentImage++;
                if (this.currentImage == 6) {
                    this.currentImage = 0;
                }
            }
            /*             if (this.world.keyboard.DOWN) {
                            this.y += 50;

                            //Walk animation
                            let path = this.IMAGES_WALKING[this.currentImage];
                            this.img = this.imageCache[path];
                            this.currentImage++;
                            if (this.currentImage == 6) {
                                this.currentImage = 0;
                            }
                        } */
        }, 100);
    }

    jump() {

    }


}