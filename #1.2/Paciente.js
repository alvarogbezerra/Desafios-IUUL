import { RegraDeNegocioDoPaciente } from './RegraDeNegocioDoPaciente.js';

export class Paciente {
    #cpf; //formato 11122233344 (11 digitos)
    #nome;
    #dataDeNascimento; //formato DD/MM/AAAA
    #agendamentos;

    constructor (cpf, nome, dataDeNascimento) {
        RegraDeNegocioDoPaciente.validarFomatacaoCPF(cpf);
        RegraDeNegocioDoPaciente.validarNome(nome);
        RegraDeNegocioDoPaciente.validarDataDeNascimento(dataDeNascimento)
        RegraDeNegocioDoPaciente.verificaSeCPFJaFoiCadastrado(cpf);


        this.#cpf = cpf;
        this.#nome = nome;
        this.#dataDeNascimento = dataDeNascimento;
        this.#agendamentos = [];
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

    toJSON() {
        return {
            cpf: this.#cpf,
            nome: this.#nome,
            dataDeNascimento: this.#dataDeNascimento,
            agendamentos: this.#agendamentos
        };
    }
}