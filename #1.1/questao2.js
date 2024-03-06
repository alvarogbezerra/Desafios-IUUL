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
    
        this.#a = vertice1;
        this.#b = vertice2;
        this.#c = vertice3;
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
        let ab = this.#a.distancia(this.#b);
        let bc = this.#b.distancia(this.#c);
        let ca = this.#c.distancia(this.#a);

        return ab + bc + ca;
    }

    tipo (){
        let ab = this.#a.distancia(this.#b);
        let bc = this.#b.distancia(this.#c);
        let ca = this.#c.distancia(this.#a);
        console.log(ab);
        console.log(bc);
        console.log(ca);

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