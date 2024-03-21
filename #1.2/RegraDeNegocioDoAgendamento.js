const caminhoDB_agendamentos = "./DB_agendamentos.json";
import fs from 'fs';

export class RegraDeNegocioDoAgendamento {

    static validarDataDaConsulta(dataDaConsulta) {
        const padraoRegexQuantidadeDeCaracteresDataDaConsulta = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(19\d{2}|20\d{2})$/;

        if (!dataDaConsulta.match(padraoRegexQuantidadeDeCaracteresDataDaConsulta)) {
            throw new Error("A data da consulta deve conter exatamente 10 caracteres e estar no formato DD/MM/AAAA.");
        }

        const partesData = dataDaConsulta.split('/');
        const dataConsulta = new Date(partesData[2], partesData[1] - 1, partesData[0]);
        const dataAtual = new Date();

        if (dataConsulta < dataAtual || (dataConsulta.getTime() === dataAtual.getTime() && dataConsulta.getHours() < dataAtual.getHours())) {
            throw new Error("A data da consulta não pode ser anterior à data atual ou à hora atual.");
        }

        return dataDaConsulta;
    }

    static validarHorariosDeAgendamento(horarioInicial, horarioFinal) {
        const padraoRegexHorario = /^(0[8-9]|1[0-8])([0-5]\d)$/;

        if (!horarioInicial.match(padraoRegexHorario) || !horarioFinal.match(padraoRegexHorario)) {
            throw new Error("Os horários de agendamento devem estar no formato HHMM e dentro do horário de funcionamento (08:00 às 18:45).");
        }

        const horaInicial = Number(horarioInicial.substring(0, 2));
        const minutoInicial = Number(horarioInicial.substring(2, 4));
        const horaFinal = Number(horarioFinal.substring(0, 2));
        const minutoFinal = Number(horarioFinal.substring(2, 4));

        if (horaInicial < 8 || (horaFinal === 18 && minutoFinal > 45) || horaFinal > 18) {
            throw new Error("Os horários de agendamento estão fora do horário de funcionamento (08:00 às 18:45).");
        }

        if (minutoInicial % 15 !== 0 || minutoFinal % 15 !== 0) {
            throw new Error("Os minutos dos horários de agendamento devem ser em incrementos de 15.");
        }

        if (horaFinal < horaInicial || (horaFinal === horaInicial && minutoFinal <= minutoInicial)) {
            throw new Error("O horário final do agendamento deve ser posterior ao horário inicial.");
        }

        return {
            horarioInicial,
            horarioFinal
        };
    }

    static verificarSobreposicaoDeAgendamentos(dataDaConsulta, horarioInicial, horarioFinal) {
        const agendamentosData = fs.readFileSync(caminhoDB_agendamentos, 'utf8');
        const agendamentos = JSON.parse(agendamentosData);
    
        const agendamentosDoDia = agendamentos.filter(agendamento => agendamento.dataDaConsulta === dataDaConsulta);
    
        const sobreposto = agendamentosDoDia.some(agendamento => {
            const inicioAgendamento = parseInt(agendamento.horaInicial);
            const fimAgendamento = parseInt(agendamento.horaFinal);
            const inicioNovoAgendamento = parseInt(horarioInicial);
            const fimNovoAgendamento = parseInt(horarioFinal);
    
            return (
                (inicioNovoAgendamento >= inicioAgendamento && inicioNovoAgendamento < fimAgendamento) ||
                (fimNovoAgendamento > inicioAgendamento && fimNovoAgendamento <= fimAgendamento) ||
                (inicioAgendamento >= inicioNovoAgendamento && inicioAgendamento < fimNovoAgendamento) ||
                (fimAgendamento > inicioNovoAgendamento && fimAgendamento <= fimNovoAgendamento)
            );
        });
    
        if (sobreposto) {
            throw new Error('Erro: Sobreposição de agendamentos detectada.');
        }
    
        return sobreposto;
    }
    
    

    
}