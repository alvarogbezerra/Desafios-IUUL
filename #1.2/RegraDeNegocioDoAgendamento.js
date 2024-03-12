
export class RegraDeNegocioDoAgendamento{


    //esse método está incompleto, preciso corrigir
    static validarDataDaConsulta(dataDaConsulta, horarioInicial, horarioFinal) {
        const padraoRegexQuantidadeDeCaracteresDataDaConsulta = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(19\d{2}|20\d{2})$/;
        const padraoRegexQuantidadeDeCaracteresHoras = /^\d{2}:\d{2}$/;

        if (!dataDaConsulta.match(padraoRegexQuantidadeDeCaracteresDataDaConsulta)) {
            throw new Error("A data da consulta deve conter exatamente 10 caracteres e estar no formato DD/MM/AAAA.");
        } if (!dataDaConsulta.match(padraoRegexQuantidadeDeCaracteresHoras)) {
            throw new Error("O horário inicial e o horário final devem conter exatamente 5 caracteres e estar no formato HH:MM.");
        } 



        const data = moment(dataDaConsulta, 'DD/MM/YYYY', true);
        if (!data.isValid()) {
            throw new Error("A data fornecida não é válida.");
        }

        const dataAtual = moment();
        if (dataAtual < dataDaConsulta) {
            throw new Error("Você não pode agendar em uma data passada.");
        }

        return dataDaConsulta;
    }

}