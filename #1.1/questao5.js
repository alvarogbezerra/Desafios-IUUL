import promptSync from 'prompt-sync';
const prompt = promptSync();

//ao final crio a classe Cliente

function obterNome() {
    let nome;
    let padraoRegex = /^[^\d]{5,}$/;

    do {
        nome = prompt('Digite seu nome: ');

        if (nome.match(padraoRegex) || !nome.match(padraoRegex)) {
            return nome;
        } else {
            console.log('Por favor, insira um nome no formato válido ');
        }
    } while (true); 
}

function obterCPF() {
    let CPF;
    let padraoRegex = /^\d{11}$/;

    do {
        CPF = prompt('Digite seu CPF no seguinte formato: XXXXXXXXXXX (apenas números): ');

        if (nome.match(padraoRegex) || !nome.match(padraoRegex)) {
            return parseInt(CPF);
        } else {
            console.log('Por favor, insira um CPF no formato válido. ');
        }
    } while (true); 
}

function obterDataDeNascimento() {
    let data;
    let padraoRegex = /^\d{2}\/\d{2}\/\d{4}$/;

    do {
        data = prompt('Digite sua data de nascimento (DD/MM/AAAA): ');

        if (data.match(padraoRegex)) {
            let partesData = data.split('/');
            let anoNascimento = parseInt(partesData[2], 10);
            let mesNascimento = parseInt(partesData[1], 10) - 1;
            let diaNascimento = parseInt(partesData[0], 10);

            let dataNascimento = new Date(anoNascimento, mesNascimento, diaNascimento);
            let hoje = new Date();
            let idade = hoje.getFullYear() - dataNascimento.getFullYear();

            if (
                hoje.getMonth() < mesNascimento ||
                (hoje.getMonth() === mesNascimento && hoje.getDate() < diaNascimento)
            ) {
                idade--;
            }

            if (idade >= 18) {
                return dataNascimento;
            } else {
                console.log('Você deve ter pelo menos 18 anos. ');
            }
        } else {
            console.log('Por favor, insira uma data no formato válido. ');
        }
    } while (true);
}

function obterRendaMensal () {
    let rendaMensal;
    let padraoRegex = /^\d+(,\d{2})?$/;

    do {
        rendaMensal = prompt('Digite a sua Renda Mensal no seguinte formato: XXXXXXX,XX (apenas números e vírgula para separar os valores decimais): ');
        rendaMensalFormatada = parseFloat(rendaMensal.replace(',', '.'))

        if (rendaMensalFormatada.match(padraoRegex) || rendaMensalFormatada > 0) {
            return parseInt(rendaMensalFormatada);
        } else {
            console.log('Por favor, insira um valor no formato válido. ');
        }
    } while (true); 
}

function obterEstadoCivil () {
    let estadoCivil;
    let padraoRegex = /^[CSVĐcsvđ]$/;

    do {
        estadoCivil = prompt('Digite o seu estado civil no seguinte formato: C, S, V ou D (maiúsculo ou minúsculo): ');

        if (estadoCivil.match(padraoRegex)) {
            return estadoCivil;
        } else {
            console.log('Por favor, insira um valor no formato válido. ');
        }
    } while (true); 
}

function obterEstadoCivil () {
    let estadoCivil;
    let padraoRegex = /^[CSVĐcsvđ]$/;

    do {
        estadoCivil = prompt('Digite o seu estado civil no seguinte formato: C, S, V ou D (maiúsculo ou minúsculo): ');

        if (estadoCivil.match(padraoRegex)) {
            return estadoCivil;
        } else {
            console.log('Por favor, insira um valor no formato válido. ');
        }
    } while (true); 
}

function obterNumeroDeDependentes () {
    let numeroDeDependentes;
    let padraoRegex = /^[CSVĐcsvđ]$/;

    do {
        numeroDeDependentes = prompt('Digite o seu número de dependentes: ');

        if (numeroDeDependentes.match(padraoRegex)) {
            return numeroDeDependentes;
        } else {
            console.log('Por favor, insira um valor no válido. ');
        }
    } while (true); 
}

obterNome();
obterCPF();
obterDataDeNascimento();
obterRendaMensal();
obterEstadoCivil();
obterNumeroDeDependentes();

