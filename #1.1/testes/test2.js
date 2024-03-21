import { Vertice } from "../questao1.js";
import { Triangulo } from "../questao2.js";

//TESTE
// Criando Triangulos
const triangulo1 = new Triangulo(new Vertice(0, 0), new Vertice(5, 5), new Vertice(10, 0));
const triangulo2 = new Triangulo(new Vertice(0, 0), new Vertice(4, 4), new Vertice(8, 0));
const triangulo3 = new Triangulo(new Vertice(0, 0), new Vertice(1, 0), new Vertice(0, 10));
const triangulo5 = new Triangulo(new Vertice(0, 0), new Vertice(5, 5), new Vertice(10, 0));

// Testando o método equals
console.log(triangulo1.equals(triangulo2)); // Os triangulos não são iguais
console.log(triangulo1.equals(triangulo5)); // Os triângulos são iguais.

// Testando o método perimetro
console.log(`Perímetro do triangulo1: ${triangulo1.perimetro}`);
console.log(`Perímetro do triangulo2: ${triangulo2.perimetro}`);
console.log(`Perímetro do triangulo3: ${triangulo3.perimetro}`);

// Testando o método tipo
console.log(`Tipo do triangulo2: ${triangulo2.tipo()}`); // Isóceles
console.log(`Tipo do triangulo: ${triangulo3.tipo()}`); // Escaleno

// Testando o método clone
const triangulo4 = triangulo1.clone();
console.log(triangulo4.equals(triangulo1)); // Os triângulos são iguais.

// Testando o método area
console.log(`Área do triangulo1: ${triangulo1.area()}`);
console.log(`Área do triangulo2: ${triangulo2.area()}`);
console.log(`Área do triangulo3: ${triangulo3.area()}`);