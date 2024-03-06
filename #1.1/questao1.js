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
        let valorAoQuadrado = Math.pow(outroVertice.x - this.x, 2) + Math.pow(outroVertice.y - this.y, 2);
        let resultado = Math.sqrt(valorAoQuadrado);
        return resultado;
    }

    move (x, y){
        this.x = x;
        this.y = y;
    }

    equals (outroVertice){
        if (this.x === outroVertice.x && this.x === outroVertice.x) {
            return true;
        } else {
            return false;
        }
    }

    toString() {
        return `[Vertice { x: ${this.#x}, y: ${this.#y} }]`;
    }
}