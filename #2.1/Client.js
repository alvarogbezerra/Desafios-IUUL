import { DateTime } from 'luxon';

export class Client {
    #nome;
    #cpf;
    #dt_nascimento;
    #renda_mensal;
    #estado_civil;

    constructor(nome, cpf, dt_nascimento, renda_mensal, estado_civil ) {
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

    validarNome() {
        const padraoRegex = /^.{5,60}$/;

        if (!this.#nome.match(padraoRegex)) {
            return { "campo":"nome","mensagem": "O nome não possui entre 5 e 60 caracteres."}
        }

        return null
    }

    validarCPF() {
        const padraoRegexQuantidadeDeCaracteres = /^\d{11}$/;
        const padraoRegexNumerosTodosIguais = /^(?!([0-9])\1*$)\d+$/;
        const padraoRegexNumeros = /^[0-9]+$/;

        if (!this.#cpf.match(padraoRegexQuantidadeDeCaracteres) || !this.#cpf.match(padraoRegexNumeros) ||!this.#cpf.match(padraoRegexNumerosTodosIguais)) {
            return { "campo": "cpf", "mensagem": "O CPF é inválido" };
        }

        return null
    }

    validarDT_nascimento() {
        const dataNascimento = DateTime.fromFormat(this.dt_nascimento, 'ddMMyyyy'); 
    
        if (!dataNascimento.isValid) {
            return { "campo":"dt_nascimento","mensagem": "A data de nascimento é inválida."};
        }
        return null
    }
    
    
    validarIdadeCliente() {
        const dataNascimento = DateTime.fromFormat(this.#dt_nascimento, 'ddMMyyyy');
        const hoje = DateTime.now();
        const idade = hoje.diff(dataNascimento, 'years').years;
    
        if (idade < 18) {
            return {"campo":"dt_nascimento","mensagem":"O cliente deve ter pelo menos 18 anos na data atual."}
        }
        return null
    }

    validarRendaMensal() {
        if (!this.#renda_mensal) {
            return null; 
        }
    
        const padraoRegexRenda = /^\d{1,}(\,\d{2})?$/;

        if (!this.#renda_mensal.match(padraoRegexRenda)) {
            return {"campo":"renda_mensal","mensagem":"Formato de renda mensal inválido. Não atendeu ao padrão de duas casas decimais e vírgula decimal."}
        }
        return null
    }

    validarEstadoCivil() {
        if (!this.#estado_civil) {
            return null;
        }
    
        const estado_civil = this.#estado_civil.toUpperCase();
    
        const estadosCivisValidos = ['C', 'S', 'V', 'D'];
    
        if (!estadosCivisValidos.includes(estado_civil)) {
            return {"campo":"estado_civil","mensagem":"Estado civil inválido."}
        }
        return null
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