import { Vertice } from "./questao1.js";

export class Triangulo {
    #a;
    #b;
    #c;

    constructor(vertice1, vertice2, vertice3) {
        if (!vertice1 || !vertice2 || !vertice3) {
            throw new Error ('Todos os vértices são necessários no construtor.');
        }

        if (this.saoVerticesIguais(vertice1, vertice2) || this.saoVerticesIguais(vertice1, vertice3) || this.saoVerticesIguais(vertice2, vertice3)) {
            throw new Error ('Os vértices não podem ter as mesmas coordenadas.');
        }
    
        this.#a = new Vertice(vertice1);
        this.#b = new Vertice(vertice2);
        this.#c = new Vertice(vertice3);
    }
    
    get a() {
        return this.#a;
    }

    get b() {
        return this.#b;
    }

    get c() {
        return this.#c;
    }

    equals(outroTriangulo) {
        return this.#a.equals(outroTriangulo.a) && this.#b.equals(outroTriangulo.b) && this.#c.equals(outroTriangulo.c);
    }    
    

    get perimetro() {
        //repeti o código pois não foi descrito se poderia criar novos atributos
        let ab = this.#a.distancia(this.#b);
        let bc = this.#b.distancia(this.#c);
        let ca = this.#c.distancia(this.#a);
        return ab + bc + ca;
    }

    tipo (){
        //repeti o código pois não foi descrito se poderia criar novos atributos
        let ab = this.#a.distancia(this.#b);
        let bc = this.#b.distancia(this.#c);
        let ca = this.#c.distancia(this.#a);

        if (ab == bc && bc == ca){
            return "Equilátero";
        } else if (ab == bc || bc == ca || ca == ab){
            return "Isóceles";
        } else {
            return "Escaleno";
        }
    }

    clone() {
        return new Triangulo(
            new Vertice(this.#a.x, this.#a.y),
            new Vertice(this.#b.x, this.#b.y),
            new Vertice(this.#c.x, this.#c.y)
        );
    }
    
    
    area (){
        let semiPerimetro = this.perimetro / 2;
        let area = Math.sqrt(semiPerimetro * (semiPerimetro - this.#a.distancia(this.#b)) * (semiPerimetro - this.#b.distancia(this.#c)) * (semiPerimetro - this.#c.distancia(this.#a)));

        return area;
    }

    // Método auxiliar para verificar se as coordenadas dos vertices são iguais
    saoVerticesIguais(vertice1, vertice2) {
        return vertice1.x === vertice2.x && vertice1.y === vertice2.y;
    }

} 