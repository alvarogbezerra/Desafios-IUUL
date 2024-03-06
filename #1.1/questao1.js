export class Vertice {
    #x;
    #y;

    constructor(x, y) {
        this.#x = x;
        this.#y = y;
    }

    get x() {
        return this.#x;
    }

    get y() {
        return this.#y;
    }

    distancia(outroVertice) {
        return Math.sqrt(Math.pow(this.#x - outroVertice.x, 2) + Math.pow(this.#y - outroVertice.y, 2));
    }

    move (x, y){
        this.#x = x;
        this.#y = y;
    }

    equals(outroVertice) {
        return this.#x === outroVertice.x && this.#y === outroVertice.y;
    }          

    toString() {
        return `[Vertice { x: ${this.#x}, y: ${this.#y} }]`;
    }
}