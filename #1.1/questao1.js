export class Vertice {
    #x //eixo horizontal
    #y //eixo vertical

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
/*
const vertice1 = new Vertice(50,50);
const vertice2 = new Vertice(50,50);

function equals (vertice1, vertice2){
    if (vertice1.x === vertice2.x && vertice1.x === vertice2.x) {
        return console.log("Os vértices são iguais.")
    } else {
        return console.log("Os vértices não são iguais.")
    }
}

console.log(equals(vertice1, vertice2));*/