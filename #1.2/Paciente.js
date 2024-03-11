import { RegraDeNegocioDoPaciente } from './RegraDeNegocioDoPaciente.js';

export class Paciente {
    #cpf;
    #nome;
    #dataDeNascimento; //formato DD/MM/AAAA

    constructor (cpf, nome, dataDeNascimento) {
        this.#cpf = cpf;
        this.#nome = nome;
        this.#dataDeNascimento = dataDeNascimento;
    } 

    get cpf() {
        return this.#cpf;
    }

    get nome() {
        return this.#nome;
    }

    get dataDeNascimento() {
        return this.#dataDeNascimento;
    }
}