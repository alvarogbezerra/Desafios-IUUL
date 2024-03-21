import { Vertice } from "../questao1.js";
import { Poligono } from "../questao3.js";

// Criando instâncias da classe Vertice
const vertice1 = new Vertice(0, 0);
const vertice2 = new Vertice(1, 0);
const vertice3 = new Vertice(1, 1);

// Criando uma instância da classe Poligono
const poligono = new Poligono([0, 0], [1, 0], [1, 1]);

// Testando o método perimetro da classe Poligono
console.log(poligono.perimetro); // Deve imprimir: 3.414...

// Testando o método addVertice da classe Poligono
const novoVertice = new Vertice(0, 1);
poligono.addVertice(novoVertice); // Deve imprimir: Vértice adicionado com sucesso.
console.log(poligono.qtdVertices); // Deve imprimir: 4

// Tentando adicionar um vértice duplicado
poligono.addVertice(vertice1); // Deve imprimir: Já existe esse vértice, forneça uma nova coordenada.
