import { Vertice } from "../questao1.js";

//TESTE
// Criando alguns objetos Vertice
const vertice1 = new Vertice(0, 0);
const vertice2 = new Vertice(1, 1);
const vertice3 = new Vertice(2, 3);
const vertice4 = new Vertice(0, 0);

// Testando o método distancia
console.log(`Distância entre vertice1 e vertice2: ${vertice1.distancia(vertice2)}`);
console.log(`Distância entre vertice1 e vertice3: ${vertice1.distancia(vertice3)}`);

// Testando o método move
vertice1.move(3, 4);
console.log(`Novas coordenadas de vertice1: x = ${vertice1.x}, y = ${vertice1.y}`);

// Testando o método equals
console.log(`Os vértices vertice1 e vertice2 são iguais? ${vertice1.equals(vertice2)}`);
console.log(`Os vértices vertice1 e vertice4 são iguais? ${vertice1.equals(vertice4)}`); //Há um erro que não consegui identificar aqui, pois o resultado deveria ser true

// Testando o método toString
console.log(`Representação em string de vertice1: ${vertice1.toString()}`);
console.log(`Representação em string de vertice2: ${vertice2.toString()}`);
console.log(`Representação em string de vertice3: ${vertice3.toString()}`);