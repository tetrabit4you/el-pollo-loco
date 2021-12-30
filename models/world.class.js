class World {

    character = new Character();
    chicken = new Chicken();
    enemies = [
        new Chicken(),
        new Chicken(),
        new Chicken(),
    ];
    clouds = [
        new Cloud()
    ];

    BackgroundObjects = [
        new BackgroundObjects('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 0),
        new BackgroundObjects('/img/5.Fondo/Capas/3.Fondo3/1.png', 0),
        new BackgroundObjects('/img/5.Fondo/Capas/2.Fondo2/1.png', 0),
        new BackgroundObjects('/img/5.Fondo/Capas/1.suelo-fondo1/1.png', 0)
    ];


    canvas;
    ctx;
    constructor(canvas) {
        //super().loadImage('../img/5.Fondo/Capas/1.suelo-fondo1/1.png');
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw();
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.addObjectsToMap(this.BackgroundObjects);
        this.addToMap(this.character);
        this.addObjectsToMap(this.enemies);
        this.addObjectsToMap(this.clouds);

        /*         this.BackgroundObjects.forEach((bgo) => {
                    this.addToMap(bgo);
                }) */

        //Draw wird immer wieder aufgerufen...
        let self = this;
        requestAnimationFrame(function() {
            self.draw();
        });
    }

    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }

    addToMap(obj) {
        this.ctx.drawImage(obj.img, obj.x, obj.y, obj.width, obj.height);
    }
}