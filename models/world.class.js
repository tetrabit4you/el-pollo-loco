class World {

    character = new Character();
    chicken = new Chicken();
    enemies = [
        new Chicken(),
        new Chicken(),
        new Chicken()
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
        this.ctx.drawImage(this.character.img, this.character.x, this.character.y, this.character.width, this.character.height);
        this.enemies.forEach(enemy => {
            this.ctx.drawImage(this.enemy.img, this.enemy.x, this.enemy.y, this.enemy.width, this.enemy.height);

        });

        //Draw wird immer wieder aufgerufen...
        let self = this;
        requestAnimationFrame(function() {
            self.draw();
        });
    }
}