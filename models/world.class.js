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

    BackgroundsObjects = [
        new BackgroundsObjects('img/5.Fondo/1.png')
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

        this.addToMap(this.character);
        //this.ctx.drawImage(this.character.img, this.character.x, this.character.y, this.character.width, this.character.height);

        this.addObjectsToMap(this.enemies);
        /* this.enemies.forEach(enemy => {
            this.addToMap(enemy);
        });
 */

        this.addObjectsToMap(this.clouds);
        /* 
                this.clouds.forEach(cloud => {
                    this.addToMap(cloud);
                }); */

        this.addObjectsToMap(this.BackgroundsObjects);

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