import { Vertice } from "./questao1.js";
import { Triangulo } from "./questao2.js";

//TESTE
// Criando Triangulos
const triangulo1 = new Triangulo(new Vertice(0, 0), new Vertice(1, 0), new Vertice(0, 1));
const triangulo2 = new Triangulo(new Vertice(2, 2), new Vertice(3, 2), new Vertice(2, 3));
const triangulo3 = new Triangulo(new Vertice(0, 0), new Vertice(1, 0), new Vertice(0, 1));

// Testando o método equals
console.log(triangulo1.equals(triangulo2)); // Os triangulos não são iguais
console.log(triangulo1.equals(triangulo3)); // Os triângulos são iguais. Há um erro que eu não consegui resolver aqui pois o resultado deveria ser true

// Testando o método perimetro
console.log(`Perímetro do triangulo1: ${triangulo1.perimetro}`);
console.log(`Perímetro do triangulo2: ${triangulo2.perimetro}`);
console.log(`Perímetro do triangulo3: ${triangulo3.perimetro}`);

// Testando o método tipo
console.log(`Tipo do triangulo1: ${triangulo1.tipo()}`); // Equilátero
console.log(`Tipo do triangulo2: ${triangulo2.tipo()}`); // Isóceles
console.log(`Tipo do triangulo3: ${triangulo3.tipo()}`); // Escaleno

// Testando o método clone
const triangulo4 = triangulo1.clone();
console.log(triangulo4.equals(triangulo1)); // Os triângulos são iguais.

// Testando o método area
console.log(`Área do triangulo1: ${triangulo1.area()}`);
console.log(`Área do triangulo2: ${triangulo2.area()}`);
console.log(`Área do triangulo3: ${triangulo3.area()}`);