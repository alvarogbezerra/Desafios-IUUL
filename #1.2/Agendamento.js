import { RegraDeNegocioDoAgendamento } from "./RegraDeNegocioDoAgendamento.js";

export class Agendamento {
    #dataDaConsulta
    #horarioInicial 
    #horarioFinal
    #paciente

    constructor (dataDaConsulta, horarioInicial, horarioFinal){
        RegraDeNegocioDoAgendamento.validarDataDaConsulta(dataDaConsulta);
        RegraDeNegocioDoAgendamento.validarHorariosDeAgendamento(horarioInicial, horarioFinal);
        //RegraDeNegocioDoAgendamento.verificarSobreposicaoDeAgendamentos(dataDaConsulta, horarioInicial, horarioFinal);

        this.#dataDaConsulta = dataDaConsulta;
        this.#horarioInicial = horarioInicial;
        this.#horarioFinal = horarioFinal;
        this.#paciente = [];
    }

    get dataDaConsulta() {
        return this.#dataDaConsulta;
    }

    get horaInicial() {
        return this.#horarioInicial;
    }

    get horaFinal() {
        return this.#horarioFinal;
    }

    toJson() {
        return {
            dataDaConsulta: this.#dataDaConsulta,
            horaInicial: this.#horarioInicial,
            horaFinal: this.#horarioFinal,
        };
    }
}