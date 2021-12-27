let canvas;
let world;
let ctx;

function init() {
    canvas = document.getElementById('canvas');
    this.ctx = world = new World(canvas);
    ctx = canvas.getContext('2d');

    //setTimeout(() => { world.draw(); }, 1000);
}