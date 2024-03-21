
import moment from 'moment';
import fs from 'fs';


//FAZ A VALIDAÇÃO E O TRATAMENTO DE ERROS

export class RegraDeNegocioDoPaciente {
    static validarFomatacaoCPF(cpf) {
        const padraoRegexQuantidadeDeCaracteres = /^\d{11}$/;
        const padraoRegexNumerosTodosIguais = /^(?!([0-9])\1*$)\d+$/;

        if (!cpf.match(padraoRegexQuantidadeDeCaracteres)) {
            throw new Error("O CPF deve conter apenas números e ter exatamente 11 caracteres.");
        } else if (!cpf.match(padraoRegexNumerosTodosIguais)) {
            throw new Error("O CPF não pode ter os números todos iguais. ");
        }

        return cpf;
    }

    static validarNome(nome) {
        const padraoRegexNomeComMaisDe5Caracteres = /^[a-zA-ZÀ-ÖØ-öø-ÿ]{5,}$/;

        if (!nome.match(padraoRegexNomeComMaisDe5Caracteres)) {
            throw new Error("O nome deve conter mais de 5 caracteres.");
        }

        return nome;
    }

    static validarDataDeNascimento(dataDeNascimento) {
        const padraoRegexQuantidadeDeCaracteres = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(19\d{2}|20\d{2})$/;

        if (!dataDeNascimento.match(padraoRegexQuantidadeDeCaracteres)) {
            throw new Error("A data deve conter exatamente 10 caracteres e estar no formato DD/MM/AAAA.");
        } 

        const data = moment(dataDeNascimento, 'DD/MM/YYYY', true);
        if (!data.isValid()) {
            throw new Error("A data de nascimento fornecida não é válida.");
        }

        const dataAtual = moment();
        const idadeMinima = moment().subtract(13, 'years');
        if (data.diff(idadeMinima, 'days') > 0) {
            throw new Error("A pessoa deve ter no mínimo 13 anos de idade.");
        }

        return dataDeNascimento;
    }

}