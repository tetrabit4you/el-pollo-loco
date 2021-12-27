class Chicken extends MovableObject {

    x = 550;
    y = 350;

    height = 80;
    width = 60;
    constructor() {
        super().loadImage('img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png');
        this.x = 400 + Math.random() * 500;
    }
}