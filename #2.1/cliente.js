import { Erros } from "./erros.js";

export class Cliente {
    #nome;
    #cpf;
    #dt_nascimento;
    #renda_mensal;
    #estado_civil;

    constructor({ nome, cpf, dt_nascimento, renda_mensal, estado_civil }) {
        this.#nome = nome
        this.#cpf = cpf
        this.#dt_nascimento = dt_nascimento
        this.#renda_mensal = renda_mensal
        this.#estado_civil = estado_civil
    }

    get nome() {
        return this.#nome;
    }

    get cpf() {
        return this.#cpf;
    }

    get dt_nascimento() {
        return this.#dt_nascimento;
    }

    get renda_mensal() {
        return this.#renda_mensal;
    }

    get estado_civil() {
        return this.#estado_civil;
    }

    //Modelo para testar futuramente
    validarNome() {
        const padraoRegex = /^.{5,60}$/;

        if (!this.#nome.match(padraoRegex)) {
            return ["nome", "O nome não possui entre 5 e 60 caracteres."];
        }
    }

    validarCPF(cpf) {
        const padraoRegexQuantidadeDeCaracteres = /^\d{11}$/;
        const padraoRegexNumerosTodosIguais = /^(?!([0-9])\1*$)\d+$/;
        const padraoRegexNumeros = /^[0-9]+$/;

        if (!cpf.match(padraoRegexQuantidadeDeCaracteres)) {
            return "O CPF não possui exatamente 11 caracteres."
        } else if (!cpf.match(padraoRegexNumerosTodosIguais)) {
            return "O CPF não possui os números todos iguais. "
        } else if (!cpf.match(padraoRegexNumeros)) {
            return "O CPF não possui apenas números."
        }
    }

    //OS MÉTODOS ABAIXO ESTÃO TODOS DESADAPTADOS
    validarDT_nascimento(dt_nascimento) {
        const dataNascimento = DateTime.fromFormat(dt_nascimento, 'ddMMyyyy');
    
        if (!dataNascimento.isValid) {
            throw new Error("Data de nascimento inválida.");
        }
    
        const hoje = DateTime.now();
        const idade = hoje.diff(dataNascimento, 'years').years;
    
        if (idade < 18) {
            throw new Error("O cliente deve ter pelo menos 18 anos na data atual.");
        }
    
        return Error;
    }

    validarRendaMensal(renda_mensal) {
        if (!renda_mensal) {
            return null; 
        }
    
        const padraoRegexRenda = /^\d{1,}(\,\d{2})?$/;

        if (!renda_mensal.match(padraoRegexRenda)) {
            throw new Error("Formato de renda mensal inválido. Não atendeu ao padrão de duas casas decimais e vírgula decimal.");
        }
    
        return Error;
    }

    validarEstadoCivil(estado_civil) {
        if (!estado_civil) {
            return null;
        }
    
        estado_civil = estado_civil.toUpperCase();
    
        const estadosCivisValidos = ['C', 'S', 'V', 'D'];
    
        if (!estadosCivisValidos.includes(estado_civil)) {
            throw new Error("Estado civil inválido.");
        }
    
        return Error;
    }

    //meotodo para executar dotos os metodos anteriores e retornar os parametros para a construcao de uma instância de Erros
    verificaAsValidacoes () {
        //retorna um capo e uma mensagem de cada um
    }

    toJSON() {
        return {
            "Nome": this.nome,
            "CPF": this.cpf,
            "Data de Nascimento": this.dt_nascimento,
            "Renda Mensal": this.renda_mensal,
            "Estado Civil": this.estado_civil
        };
    }
}