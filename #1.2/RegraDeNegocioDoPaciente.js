import { Paciente } from "./Paciente.js";

export class RegraDeNegocioDoPaciente {
    static validarCPF(cpf) {
        const padraoRegexQuantidadeDeCaracteres = /^\d{11}$/;
        const padraoRegexNumerosTodosIguais = /^(?!([0-9])\1*$)\d+$/;

        if (!cpf.match(padraoRegexQuantidadeDeCaracteres)) {
            throw new Error("O CPF deve conter apenas números e ter exatamente 11 dígitos.");
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

    static validarDataDeNascimento(dataDeNascimento){
        
    }
}

// Exemplo de uso

try {
    const paciente = new Paciente("01245678910", "aleatorio", "11/11/2000");
    console.log('Paciente cadastrado com sucesso:', paciente);
} catch (error) {
    console.error('Erro ao cadastrar paciente:', error.message);
}

