import { Vertice } from "./questao1.js";

class Poligono {
    #vertices; // array de arrays que armazenarão as coordenadas. Formato: [ Vertice {}, Vertice {}, Vertice {}, Vertice {} ]

    constructor(...vertices) {
        if (vertices.length < 3){
            throw new Error ("Um polígono sempre deve ter 3 ou mais vertices.");
        }

        this.#vertices = vertices.map(v => new Vertice(v[0], v[1]));
    }

    get vertices() {
        return this.#vertices;
    }

    addVertice(v) {
        let verticeExistente = this.#vertices.find(vertice => vertice.equals(v));

        if (verticeExistente) {
            console.log("Já existe esse vértice, forneça uma nova coordenada.");
            return false;
        } else {
            this.#vertices.push(v);
            console.log("Vértice adicionado com sucesso.");
            return true; 
        }
    }

    get perimetro() {
        let somatorio = 0;

        for (let i = 0; i < this.#vertices.length; i++) {
            let proximoIndice = (i + 1) % this.#vertices.length;
            let distancia = this.#vertices[i].distancia(this.#vertices[proximoIndice]);
    
            somatorio += distancia;
        }
    
        return somatorio;
    }

    get qtdVertices() {
        return this.#vertices.length
    }


}

let poligono = new Poligono([0, 0], [0, 50], [50, 50]);
//let poligono = new Poligono([0, 0], [0, 50]); //Daria erro

console.log(poligono.addVertice(new Vertice(100, 100)))
//console.log(poligono.addVertice(new Vertice(0, 0))) //Daria erro

console.log(poligono.perimetro)
console.log(poligono.qtdVertices)
